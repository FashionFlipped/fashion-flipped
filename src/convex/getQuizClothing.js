import { s } from "convex/schema";
import { cosinesim } from "./getRecommendation";
import { getUserHelper } from "./storeUser";
import { query } from "./_generated/server";

export default query(async ({ db, auth }) => {
  const user = await getUserHelper(db, auth);
  const recommendationRows = db
    .table("clothingSmall")
    .filter((q) => q.eq(false, q.field("reserved")))
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

  let recommendations = await recommendationRows;
  console.log(recommendations.length);
  let recos = recommendations.map((rec) => {
    return {
      ...rec,
      distance: cosinesim(rec.features, user.profile),
    };
  });
  let tops = recos
    .sort((a, b) => b.distance - a.distance)
    .filter((rec) => rec.sizeTop !== "none")
    .filter((rec, i) => i > 10 && i % 5 === 0)
    .filter((rec, i) => i < 5);
  let bottoms = recos
    .sort((a, b) => b.distance - a.distance)
    .filter((rec) => rec.sizeBottom !== "none")
    .filter((rec, i) => i > 10 && i % 5 === 0)
    .filter((rec, i) => i < 4);
  recos = [...tops, ...bottoms].sort((a, b) => b.distance - a.distance);
  return recos;
});
