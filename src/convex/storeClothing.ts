import { Document, Id } from "./_generated/dataModel";
import { mutation } from "./_generated/server";

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
export default mutation(
  async (
    { db },
    url,
    features,
    male,
    female,
    size,
    top,
    bottom
  ): Promise<Id<"clothing">> => {
    console.log(url);
    //const identity = await auth.getUserIdentity();
    //if (!identity) {
    //  throw new Error("Called storeUser without authentication present");
    //}

    // If it's a new identity, create a new `User`.
    return db.insert("clothing", {
      url: url,
      features,
      male: male,
      female: female,
      reserved: false,
      sizeTop: top,
      sizeBottom: bottom,
    });
  }
);
