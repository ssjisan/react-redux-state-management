import { ActionTypes } from "../Constants/Action-Types";
const initialState = {
  products: [],
};
export const ProductReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ALL_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const SelectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCTS:
      return { ...state, ...payload };
    default:
        return state;
  }
};
