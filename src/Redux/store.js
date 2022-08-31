import { configureStore } from '@reduxjs/toolkit'
import rootReducer from "./Reducer/rootReducer";
import thunk from 'redux-thunk'

const { logger } = require("redux-logger");

let middleware = [thunk];

if (process.env.NODE_ENV === "development") {
    middleware.push(logger);
}

  const store = configureStore({
    reducer: rootReducer,
    // middleware: (getDefaultMiddleware) =>{
    //     if (process.env.NODE_ENV === "development") {
    //         const { logger } = require("redux-logger");
    //         return getDefaultMiddleware().concat(logger);
    //     }
    //     return getDefaultMiddleware
    // }
    middleware: middleware
  })
  console.log(middleware);
  export default store