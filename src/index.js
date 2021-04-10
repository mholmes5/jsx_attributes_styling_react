import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/500";

ReactDOM.render(
  <div>
    <h1 className="heading">My Favorite Foods</h1>
    <div>
      <img
        className="food-img"
        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/grilledshrimp-1525299887.jpg"
        alt="Grilled Shrimp"
      />
      <img
        className="food-img"
        src="https://chowhound3.cbsistatic.com/2014/09/30741_easy_bbq_baby_back_ribs_3000x2000.jpg"
        alt="BBQ Ribs"
      />
      <img
        className="food-img"
        src="https://foremangrillrecipes.com/wp-content/uploads/featured-foreman-lamb-chops.jpg"
        alt="Grilled Lamb Chops"
      />
      <img className="food-img" src={img} alt="random" />
    </div>
  </div>,
  document.getElementById("root")
);
