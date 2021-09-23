import { images } from '../../data/dataImages';
import { PRODUCT_SELECT } from '../actions/images.action';

const initialState = {
    list : images,
    imgID: null,
}

const imageReducer = (state = initialState, action)=> {
    switch(action.type){
        case PRODUCT_SELECT:
            return{
                ...state,
                imgID: action.imgID,
            }
        default:
        return state;
    } 
};

export default imageReducer;