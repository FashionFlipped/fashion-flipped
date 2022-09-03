import { s } from "convex/schema";
import { query } from "./_generated/server";

export default query(async ({ db }, user) => {
  return db
    .table("clothing")
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
    .take(9);
});
