import { Document, Id } from "./_generated/dataModel";
import { mutation } from "./_generated/server";

export const createProfile = (features) => {
  let res: number[] = [];
  for (let i = 0; i < features[0].length; i++) {
    let f = 0;
    features.forEach((feature) => {
      f += feature[i];
    });
    res.push(f / features.length);
  }
  return res;
};

export default mutation(async ({ db, auth }, profile): Promise<Id<"users">> => {
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
    if (user.profile && user.profile.length > 0) {
      profile = createProfile([profile, user.profile]);
    }
    db.patch(user._id, {
      profile,
    });
    return user._id;
  }
  // If it's a new identity, create a new `User`.
  throw new Error("no user to modify");
});
