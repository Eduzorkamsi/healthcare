import React from "react";
import ReactStars from "react-rating-stars-component";


const firstExample = {
    size: 15,
    value: 5,
    edit: false
  };

  export default function Star() {
    return (
      <div className="stars">
        <ReactStars {...firstExample} />
      </div>
    );
    }