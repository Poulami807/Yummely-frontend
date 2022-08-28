import React from 'react'
import DiningCarousel from "./DiningCarausel";

function Dining() {
  return (
    <div>
      <h1 className="text-xl my-4 md:my-8 md:text-3xl md:font-semibold">
        Dining-Out Restaurants in Kolkata
      </h1>
      <DiningCarousel />
    </div>
  )
}

export default Dining;