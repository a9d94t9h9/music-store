import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
// Reducers
import CategoryReducer from "./reducers/category-reducer";
import ProductsReducer from "./reducers/products.reducer";
import imageReducer from "./reducers/images.reducer";

const RootReducer = combineReducers({
    categories: CategoryReducer,
    products: ProductsReducer,
    images: imageReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk));