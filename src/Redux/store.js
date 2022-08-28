import { configureStore } from '@reduxjs/toolkit'
import rootReducer from "./Reducer/rootReducer";

  const store = configureStore({
    reducer: rootReducer,
     middleware: (getDefaultMiddleware) =>{
        if (process.env.NODE_ENV === "development") {
            const { logger } = require("redux-logger");
            return getDefaultMiddleware().concat(logger);
        }
        return getDefaultMiddleware
    }
  })
  
  export default store