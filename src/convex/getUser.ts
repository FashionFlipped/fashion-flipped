import { getUserHelper } from "./storeUser";
import { query } from "./_generated/server";
import { Document, Id } from "./_generated/dataModel";

export default query(async ({ db, auth }): Promise<Document<"users">> => {
  return getUserHelper(db, auth);
});
