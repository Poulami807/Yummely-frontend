import React from "react";
import {Routes, Route } from "react-router-dom";

// Layout
import CheckoutLayout from "../Layout/Checkout.layout";

function CheckoutLayoutHOC({ component: Component, ...rest }) {
  return (
    <>
    <Routes>
    <Route
        {...rest}
        element={
          <CheckoutLayout>
            <Component {...rest}/>
          </CheckoutLayout>
        }
      />
    </Routes>
    </>
  );
}

export default CheckoutLayoutHOC;