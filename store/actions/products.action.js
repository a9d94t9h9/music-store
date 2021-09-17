export const SELECTED_PRODUCT = 'SELECTED_PRODUCT';
export const FILTER_PRODUCTS = 'FILTER_PRODUCTS';

export const selectedProduct = (id) => ({
    type: SELECTED_PRODUCT,
    productID: id,
});

export const filterProducts = (categoryID) => ({
    type: FILTER_PRODUCTS,
    categoryID,
});