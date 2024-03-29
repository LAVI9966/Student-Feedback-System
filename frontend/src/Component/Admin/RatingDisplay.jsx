import React, { useEffect, useRef } from "react";

const RatingsDisplay = ({ mockRatings }) => {
  const chartRef = useRef(null);

  return (
    <>
      <div>
        {mockRatings.map((item) => {
          <div>{item}</div>;
        })}
      </div>
      <h1>Rating Data Visualization</h1>
    </>
  );
};

export default RatingsDisplay;
