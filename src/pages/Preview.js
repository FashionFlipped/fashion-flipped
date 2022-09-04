import React, { useState, useEffect } from "react";
import { useQuery } from "./../convex/_generated/react.ts";

const Preview = () => {
  const data = useQuery("getRecommendation");
  return (
    <div>
      {data && (
        <>
          <img src={data[0].url} width="200px" />
          <img src={data[1].url} width="200px" />
          <img src={data[18].url} width="200px" />
        </>
      )}
    </div>
  );
};

export default Preview;
