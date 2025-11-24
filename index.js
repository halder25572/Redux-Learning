const { createStore } = require('redux');


// defining constants
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD_USER = "ADD_USER";

// state
const initialCounterState = {
    count: 0
}

const initialUserState = {
    users: [{ name: "Nayan Halder" }]
}

// action - Object- type, payload
// increment
const incrementCounter = () => {
    return {
        type: INCREMENT
    }
}
// decrement
const decrementCounter = () => {
    return {
        type: DECREMENT
    }
}
// user add
const addUser = () => {
    return {
        type: ADD_USER,
        payload: { name: "Shakill" }
    }
}

// create reducer for counter
const counterReducer = (state = initialCounterState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }

        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }

        default:
            state;
    }
}

// create store
const store = createStore(counterReducer);
store.subscribe(() => {
    console.log(store.getState());
})

// dispatch action
store.dispatch(incrementCounter());