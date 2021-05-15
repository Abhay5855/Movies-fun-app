import React from "react";
import "./MovieTitle.css";
function MovieTitle(props) {
  return (
    <div className="heading">
      <h2>{props.title}</h2>
    </div>
  );
}

export default MovieTitle;
