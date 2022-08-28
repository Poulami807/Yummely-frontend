import React from "react";

function NutritionHeroCarousalCard(props) {
  return (
    <div className="w-full">
      <img src={props.image} alt="medicine" className="w-full h-full" />
    </div>
  );
}

export default NutritionHeroCarousalCard;