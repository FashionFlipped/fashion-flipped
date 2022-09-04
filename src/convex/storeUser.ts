import { Document, Id } from "./_generated/dataModel";
import { mutation, DatabaseReader } from "./_generated/server";
import { Auth } from "convex/server";

// Insert or update the user in a Convex table then return the document's Id.
//
// The `UserIdentity` returned from `auth.getUserIdentity` is just an ephemeral
// object representing the identity of the authenticated user; most applications
// will want to store this in a `users` table to reference it in their other
// tables.
//
// The `UserIdentity.tokenIdentifier` string is a stable and unique value we use
// to look up identities, but inserting the value into a table also gives us an
// `_id` field.
//
// Keep in mind that `UserIdentity` has a number of optional fields, the
// presence of which depends on the identity provider chosen. It's up to the
// application developer to determine which ones are available and to decide
// which of those need to be persisted.
export async function getUserHelper(
  db: DatabaseReader,
  auth: Auth
): Promise<Document<"users">> {
  const identity = await auth.getUserIdentity();
  if (!identity) {
    throw new Error("Unauthenticated call to getUser");
  }
  return await db
    .table("users")
    .filter((q) => q.eq(q.field("tokenIdentifier"), identity!.tokenIdentifier))
    .unique();
}

export default mutation(async ({ db, auth }): Promise<Id<"users">> => {
  const identity = await auth.getUserIdentity();
  if (!identity) {
    throw new Error("Called storeUser without authentication present");
  }

  // Check if we've already stored this identity before.
  const user: Document<"users"> | null = await db
    .table("users")
    .filter((q) => q.eq(q.field("tokenIdentifier"), identity.tokenIdentifier))
    .first();
  if (user !== null) {
    // If we've seen this identity before but the name has changed, patch the value.

    return user._id;
  }
  // If it's a new identity, create a new `User`.
  return db.insert("users", {
    name: identity.name!,
    tokenIdentifier: identity.tokenIdentifier,
    subscription: "none",
    male: false,
    female: false,
    sizeTop: "",
    sizeBottom: "",
    height: 0,
    // The `_id` field will be assigned by the backend.
  });
});
