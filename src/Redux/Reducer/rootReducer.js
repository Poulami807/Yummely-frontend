import { combineReducers } from "redux";

//reducers
import restaurant from "./restaurant/restaurant.reducer";
import image from "./Image/image.reducer";
import review from "./Reviews/review.reducer";
import user from "./User/user.reducer";
import food from "./Food/food.reducer";
import auth from "./Auth/auth.reducer";
import cart from "./Cart/cart.reducer";
import order from "./Order/order.reducer";


const rootReducer = combineReducers({
    restaurant,
    image,
    review,
    user,
    food,
    auth,
    cart,
    order,
  });
  
  export default rootReducer;