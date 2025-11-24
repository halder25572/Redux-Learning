// const { createStore,  } = require("@reduxjs/toolkit");

const {createStore, applyMiddleware} = require("redux");
const { default: logger } = require("redux-logger");

// products constants
const GET_PRODUCTS = 'GET_PRODUCTS';
const ADD_PRODUCT = 'ADD_PRODUCT';

// products states
const initialProductState = {
    products: ['Sugar', 'Salt'],
    numberofProducts: 2,
}

// product action
const getProduct = () => {
    return {
        type: GET_PRODUCTS
    }
}
// product action
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

// store for product
const store = createStore(productReducer, applyMiddleware(logger));

// for product
store.subscribe(() => {
    console.log(store.getState());
});

// store.dispatch(addProduct('Apple'));
store.dispatch(getCart());