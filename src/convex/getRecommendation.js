import { s } from "convex/schema";
import { query } from "./_generated/server";

export function cosinesim(A, B) {
  var dotproduct = 0;
  var mA = 0;
  var mB = 0;
  for (let i = 0; i < A.length; i++) {
    // here you missed the i++
    dotproduct += A[i] * B[i];
    mA += A[i] * A[i];
    mB += B[i] * B[i];
  }
  mA = Math.sqrt(mA);
  mB = Math.sqrt(mB);
  var similarity = dotproduct / (mA * mB); // here you needed extra brackets
  return similarity;
}

export default query(async ({ db }, user) => {
  const recommendationRows = db
    .table("clothing")
    .filter((q) => q.eq(false, q.field("reserved")))
    .filter(
      (q) =>
        q.eq(user.male, q.field("male")) || q.eq(user.female, q.field("female"))
    )
    .filter(
      (q) =>
        q.eq(user.sizeBottom, q.field("sizeBottom")) ||
        q.eq(user.sizeTop, q.field("sizeTop"))
    )
    .collect();

  let recommendations = await recommendationRows;
  let recos = recommendations.map((rec) => {
    return {
      ...rec,
      distance: cosinesim(rec.features, user.profile),
    };
  });
  recos = recos.sort((a, b) => a.distance - b.distance);
  return recos;
});
