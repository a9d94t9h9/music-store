/* import { Products } from "../../data/products"; */
import { ADD_ITEM, REMOVE_ITEM } from '../actions/cart-action';

const initialState = {
    items: [],
    total: null 
}

const CartReducer = (state = initialState, action)=>{
    switch (action.type){
        case ADD_ITEM: 
            return {
                ...state,
                /* items: [...state.items, ...action.item], */
                items: state.items.concat(action.item),
            };
        

        default:
        return state;
    }
};

export default CartReducer;