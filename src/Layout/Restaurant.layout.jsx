import React, {useState,useEffect} from 'react'
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import RestaurantNavbar from '../Components/Navbar/RestaurantNavbar';
import ImageGrid from '../Components/Restaurant/ImageGrid';
import InfoButtons from '../Components/Restaurant/InfoButtons';
import RestaurantInfo from '../Components/Restaurant/RestaurantInfo';
import Tabs from '../Components/Restaurant/Tabs';
import CartContainer from '../Components/Cart/CartContainer';

//icons
import { TiStarOutline } from "react-icons/ti";
import { RiDirectionLine, RiShareForwardLine } from "react-icons/ri";
import { BiBookmarkPlus } from "react-icons/bi";

// Redux
import { getSpecificRestaurant } from "../Redux/Reducer/restaurant/restaurant.action";
import { getImage } from "../Redux/Reducer/Image/image.action";
import { getCart } from "../Redux/Reducer/Cart/cart.action";


function RestaurantLayout({children}) {
    // const [restaurant, setRestaurant] = useState({
    //     images: [
    //         "https://images.lifestyleasia.com/wp-content/uploads/sites/7/2021/11/19153558/Interior-Shot-3.jpg",
    //         "https://www.cookwithmanali.com/wp-content/uploads/2019/03/Creamy-Tomato-Basil-Pasta-Instant-Pot-500x500.jpg",
    //         "https://www.cookwithmanali.com/wp-content/uploads/2019/03/Creamy-Tomato-Basil-Pasta-Instant-Pot-500x500.jpg",
    //         "https://www.cookwithmanali.com/wp-content/uploads/2019/03/Creamy-Tomato-Basil-Pasta-Instant-Pot-500x500.jpg",
    //         "https://www.cookwithmanali.com/wp-content/uploads/2019/03/Creamy-Tomato-Basil-Pasta-Instant-Pot-500x500.jpg"
    //     ],
    //     name: "Chowman",
    //     cuisine: ["Chinese", "Asian"],
    //     address: "Behala,Kolkata",
    //     restaurantRating: "4.3",
    //     deliveryRating: "4.2"
    //   });
  const { id } = useParams();
  const dispatch = useDispatch();
  const [restaurant, setRestaurant] = useState({
    images: [],
    name: "",
    cuisine: "",
    address: "",
  });

  useEffect(() => {
    dispatch(getSpecificRestaurant(id)).then((data) => {
      setRestaurant((prev) => ({
        ...prev,
        ...data.payload.restaurant,
      }));

      dispatch(getImage(data.payload.restaurant.photos)).then((data) => {
        setRestaurant((prev) => ({
          ...prev,
          ...data.payload.image,
        }));
      });
    });

    dispatch(getCart());
  }, []);
  return (
    <>
    <RestaurantNavbar />
      <div className="container mx-auto px-4 py-4 lg:px-20 pb-10 mb-10">
        <ImageGrid images={restaurant.images} />
        <RestaurantInfo
          name={restaurant?.name}
          restaurantRating={restaurant?.restaurantRating || 0}
          deliveryRating={restaurant?.deliveryRating || 0}
          cuisine={restaurant?.cuisine}
          address={restaurant?.address}
        />
        <div className="my-4 flex flex-wrap gap-3">
          <InfoButtons isActive>
            <TiStarOutline /> Add Review
          </InfoButtons>
          <InfoButtons>
            <RiDirectionLine /> Direction
          </InfoButtons>
          <InfoButtons>
            <BiBookmarkPlus /> Bookmark
          </InfoButtons>
          <InfoButtons>
            <RiShareForwardLine /> Share
          </InfoButtons>
        </div>
        <div className="my-10">
          <Tabs />
        </div>
        {children}
      </div>
      <CartContainer />
    </>
  )
}

export default RestaurantLayout;