import React, { useState, useEffect } from "react";
import { useMutation, useQuery } from "./../convex/_generated/react.ts";

const Subscription = () => {
  const setSubscription = useMutation("setSubscription");
  return <p>Subscription Tiers Below</p>;
};

export default Subscription;
