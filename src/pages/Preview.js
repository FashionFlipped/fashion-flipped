import React, { useState, useEffect } from "react";
import { useQuery } from "./../convex/_generated/react.ts";
import "./Preview.css";

const Preview = () => {
  const data = useQuery("getRecommendation");
  return (
    <div>
      {data && (
        <>
          <div className="container">
            <h2>Here's What Were Sending</h2>
            <div className="preview-row">
              <img
                className="item"
                src={data[4].url}
                width="250px"
                height="250px"
              />
              <img
                className="item"
                src={data[5].url}
                width="250px"
                height="250px"
              />
              <img
                className="item"
                src={data[6].url}
                width="250px"
                height="250px"
              />
              <img
                className="item"
                src={data[Math.round(data.length / 2)].url}
                width="250px"
                height="250px"
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Preview;
