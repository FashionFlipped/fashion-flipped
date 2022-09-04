import { defineSchema, defineTable, s } from "convex/schema";

export default defineSchema({
  clothing: defineTable({
    url: s.string(),
    features: s.array(s.number()),
    male: s.boolean(),
    female: s.boolean(),
    reserved: s.boolean(),
    sizeTop: s.string(),
    sizeBottom: s.string(),
  }),
  clothingLarge: defineTable({
    url: s.string(),
    features: s.array(s.number()),
    male: s.boolean(),
    female: s.boolean(),
    reserved: s.boolean(),
    sizeTop: s.string(),
    sizeBottom: s.string(),
  }),
  distances: defineTable({
    user: s.id("users"),
    clothing: s.id("clothing"),
    distance: s.number(),
  }),
  users: defineTable({
    name: s.string(),
    male: s.boolean(),
    female: s.boolean(),
    tokenIdentifier: s.string(),
    subscription: s.string(),
    sizeTop: s.string(),
    sizeBottom: s.string(),
    height: s.number(),
    profile: s.array(s.number()),
  }),
  channels: defineTable({
    body: s.string(),
    channel: s.id("channels"),
    format: s.union(s.literal("text"), s.literal("giphy")),
    user: s.id("users"),
  }),
});
