import React, { useEffect } from "react";
import CategoryTabs from '../Components/CategoryTabs';

//components
import Navbar from '../Components/Navbar';

import { useDispatch } from "react-redux";
import { getCart } from "../Redux/Reducer/Cart/cart.action";

function HomeLayout({children}) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCart());
  }, []);
  return (
    <>
    <Navbar/>
    <CategoryTabs/>
    <div className='container mx-auto px-4 lg:px-20'>{children}</div>
    </>
  )
}

export default HomeLayout;