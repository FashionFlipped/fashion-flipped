import { s } from "convex/schema";
import { cosinesim } from "./getRecommendation";
import { getUserHelper } from "./storeUser";
import { query } from "./_generated/server";

export default query(async ({ db, auth }) => {
  const user = await getUserHelper(db, auth);
  return db
    .table("clothingSmall")
    .filter((q) => q.eq(q.field("reserved"), false))
    .filter((q) =>
      q.or(
        q.eq(user.male, q.field("male")),
        q.eq(user.female, q.field("female"))
      )
    )
    .filter((q) =>
      q.or(
        q.eq(user.sizeBottom, q.field("sizeBottom")),
        q.eq(user.sizeTop, q.field("sizeTop"))
      )
    )
    .collect();
});
