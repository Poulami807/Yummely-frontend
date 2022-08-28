import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineArrowLeft } from "react-icons/ai";

//logo
import logo from "../../logo/Yummely.jpg";

// Redux
import { useSelector } from "react-redux";

function CheckoutNavbar() {
  const reduxState = useSelector((globalStore) => globalStore.user.user);
  return (
    <>
      <nav className="px-4 py-2 flex bg-white shadow-md lg-shadow-none w-full items-center">
        <div className="container px-4 md:px-20 mx-auto">
          <div className="flex w-full items-center justify-between">
            <AiOutlineArrowLeft />
            <div className="flex gap-3">
              <div className="w-28">
                <img
                  src={logo}
                  alt="logo"
                  className="w-full h-full"
                />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="border p-1 border-gray-300 text-main-300 w-12 h-12 rounded-full">
                <img
                  src="https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/87-512.png"
                  alt={reduxState?.user?.userName}
                  className="w-full h-full rounded-full object-center object-cover"
                />
              </div>
              {reduxState?.user?.userName}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default CheckoutNavbar;