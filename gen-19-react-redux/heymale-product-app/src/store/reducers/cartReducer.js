import { ADD_TO_CART } from "../types";

const initialState = {
  dataCo: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingItemIndex = state.dataCo.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingItemIndex !== -1) {
        const updatedDataCo = [...state.dataCo];
        updatedDataCo[existingItemIndex].qty += action.payload.qty;
        return {
          ...state,
          dataCo: updatedDataCo,
        };
      } else {
        return {
          ...state,
          dataCo: [...state.dataCo, action.payload],
        };
      }
    default:
      return state;
  }
};

export default cartReducer;
