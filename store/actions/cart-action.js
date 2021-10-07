export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const CONFIRM_ITEM = 'CONFIRM_ITEM';

const addItem = (item)=>({
    type: ADD_ITEM,
    item
});

export const removeItem = (id)=>({
    type: REMOVE_ITEM,
    id
});

export default addItem;