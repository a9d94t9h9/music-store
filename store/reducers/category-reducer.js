import { Categories } from "../../data/data";
import { CATEGORY_SELECTED } from "../actions/category.action";

const initialState = {
    list: Categories,
    selectedID: null,
};

const CategoryReducer = (state= initialState, action) => {
    switch (action.type) {
        case CATEGORY_SELECTED:
            return {
                ...state, 
                selectedID: action.categoryID,
            }
            default: 
                return state;
    }
    
}

export default CategoryReducer;