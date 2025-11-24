const { createStore } = require("@reduxjs/toolkit");

// products constants
const GET_PRODUCTS = 'GET_PRODUCTS';
const ADD_PRODUCT = 'ADD_PRODUCT';

const initialProductState = {
    products: ['Sugar', 'Salt'],
    numberofProducts: 2,
}

const getProduct = () => {
    return {
        type: GET_PRODUCTS
    }
}
const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product
    }
}

// productReducer
const productReducer = (state = initialProductState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state
            }
        case ADD_PRODUCT:
            return {
                products: [...state.products, action.payload],
                numberofProducts: state.numberofProducts + 1
            }

        default:
            return state;
    }
}

// store
const store = createStore(productReducer);

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(addProduct('Apple'));