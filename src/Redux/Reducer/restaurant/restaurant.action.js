import axios from "axios";

// Redux Reducer Types
import { GET_RESTAURANT, GET_SPECIFIC_RESTAURANT } from "./restaurant.type";

export const getRestaurant = () => async (dispatch) => {
  try {
    const restaurantList = await axios({
      method: "GET",
      url: "https://yummely-server.herokuapp.com/restaurant/?city=Kolkata",
    });
    console.log(restaurantList)
    return dispatch({ type: GET_RESTAURANT, payload: restaurantList.data });
  } catch (error) {
    return console.log("Error[15]",error);
  }
};




export const getSpecificRestaurant = (_id) => async (dispatch) => {
  try {
    const restaurant = await axios({
      method: "GET",
      url: `https://yummely-server.herokuapp.com/restaurant/${_id}`,
    });

    return dispatch({
      type: GET_SPECIFIC_RESTAURANT,
      payload: restaurant.data,
    });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};