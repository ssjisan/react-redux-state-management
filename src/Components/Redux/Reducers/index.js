import { combineReducers } from "redux";
import {ProductReducer,SelectedProductReducer} from "./ProductReducer";

const reducer = combineReducers({
    setAllProduct: ProductReducer,
    setProduct: SelectedProductReducer
})

export default reducer;