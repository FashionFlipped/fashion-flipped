import { useQuery } from "../convex/_generated/react";
import React, { useState, useEffect } from "react";

function cosinesim(A, B) {
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

const useQuizResults = () => {
  let data = useQuery("getQuizClothing");
  let user = useQuery("getUser");
  let [res, setRes] = useState([]);
  useEffect(() => {
    if (data && user) {
      let recos = data.map((rec) => {
        return {
          ...rec,
          distance: cosinesim(rec.features, user.profile),
        };
      });
      let tops = recos
        .filter((rec) => rec.sizeTop !== "none")
        .sort((a, b) => b.distance - a.distance)
        .filter((rec, i) => i > 10 && i % 3 === 0)
        .filter((rec, i) => i < 5);
      let bottoms = recos
        .filter((rec) => rec.sizeBottom !== "none")
        .sort((a, b) => b.distance - a.distance)
        .filter((rec, i) => i > 10 && i % 3 === 0)
        .filter((rec, i) => i < 4);
      recos = [...tops, ...bottoms].sort((a, b) => b.distance - a.distance);
      setRes(recos);
    }
  }, [data, user]);
  return res;
};

export default useQuizResults;
