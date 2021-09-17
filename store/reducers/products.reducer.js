import { Products } from "../../data/products";
import { SELECTED_PRODUCT, FILTER_PRODUCTS } from "../actions/products.action";

const initialState = ({
    list: Products,
    filteredProducts: [],
    selectedID: null,
});

const ProductsReducer = (state = initialState, action)=>{
    switch (action.type) {
       case SELECTED_PRODUCT:
            return {
                ...state,
                selectedID: action.productID,
            };
        case FILTER_PRODUCTS:
            return {
                ...state,
                filteredProducts: state.list.filter(item => item.category === action.categoryID)
            }
        default:
          return state;
    }
    
}

export default ProductsReducer;