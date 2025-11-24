const { createStore, combineReducers } = require("@reduxjs/toolkit");

// products constants
const GET_PRODUCTS = 'GET_PRODUCTS';
const ADD_PRODUCT = 'ADD_PRODUCT';

// cart constants
const GET_CART_ITEMS = 'GET_CART_ITEMS';
const ADD_CART_ITEM = 'ADD_CART_ITEM';

// cart states
const initialCartState = {
    carts: ['Salt'],
    numberofCards: 1,
}
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

// cart action
const getCart = () => {
    return {
        type: GET_CART_ITEMS
    }
}
// cart action
const addCart = () => {
    return {
        type: ADD_CART_ITEM
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
// cartReducer
const cartReducer = (state = initialCartState, action) => {
    switch (action.type) {
        case GET_CART_ITEMS:
            return {
                ...state
            }
        case ADD_CART_ITEM:
            return {
                carts: [...state.carts, action.payload],
                numberofCards: state.numberofCards + 1
            }

        default:
            return state;
    }
}

const rootReducer = combineReducers({
    productR: productReducer,
    cardR: cartReducer
})

// store for product
const store = createStore(rootReducer);

// for product
store.subscribe(() => {
    console.log(store.getState());
});

// store.dispatch(addProduct('Apple'));
store.dispatch(getCart());