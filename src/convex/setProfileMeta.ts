import { Document, Id } from "./_generated/dataModel";
import { mutation } from "./_generated/server";

export default mutation(
  async (
    { db, auth },
    fullName,
    gender,
    height,
    sizeTop,
    sizeBottom
  ): Promise<Id<"users">> => {
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
      db.patch(user._id, {
        name: fullName,
        male: gender === "Male",
        female: gender === "Female",
        height,
        sizeTop,
        sizeBottom,
      });
      return user._id;
    }
    // If it's a new identity, create a new `User`.
    throw new Error("no user to modify");
  }
);
