import { Document, Id } from "./_generated/dataModel";
import { mutation } from "./_generated/server";

export default mutation(
  async ({ db, auth }, subscription): Promise<Id<"users">> => {
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
      db.patch(user._id, { subscription });
      return user._id;
    }
    // If it's a new identity, create a new `User`.
    return db.insert("users", {
      name: identity.name!,
      tokenIdentifier: identity.tokenIdentifier,
      subscription: subscription,
      // The `_id` field will be assigned by the backend.
    });
  }
);
