import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function RestaurantRedirect() {
    const navigate = useNavigate ();
    const { id } = useParams();
  useEffect(() => {
    navigate(`/restaurant/${id}/overview`);
  });
  return <></>;
}

export default RestaurantRedirect;