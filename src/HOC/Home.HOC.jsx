import React from 'react';
import {Routes,Route} from 'react-router-dom';


//Layout
import HomeLayout from '../Layout/Home.layout';


function HomeLayoutHOC({component:Component,...rest}) {
  return (
    <>
     <Routes>
      <Route {...rest} element={<HomeLayout>
        <Component {...rest}/>
      </HomeLayout >}/>
     </Routes>
    </>
  )
}

export default HomeLayoutHOC;