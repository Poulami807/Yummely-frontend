import React from 'react';
import {Routes,Route} from 'react-router-dom';


//Layout
import RestaurantLayout from '../Layout/Restaurant.layout';


function RestaurantLayoutHOC({component:Component,...rest}) {
  return (
    <>
     <Routes>
      <Route {...rest} element={<RestaurantLayout>
        <Component {...rest}/>
      </RestaurantLayout>}/>
     </Routes>
    </>
  )
}

export default RestaurantLayoutHOC;