import { GET_IMAGE } from "./image.type";

const initialState = {
  Image: [],
};

const ImageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_IMAGE:
      return {
        ...state,
        Image: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default ImageReducer;