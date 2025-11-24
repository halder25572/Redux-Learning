// state -- count: 0
// action - increment, decrement, reset
// reducer
// store
const { createStore } = require("@reduxjs/toolkit");

// CONSTANTS
const ADD_USER = 'ADD_USER';


const initialState = {
    users: ['Nayan'],
    count: 1
}

const addUser = (user) => {
    return {
        type: ADD_USER,
        payload: user
    }
}

// Creating Reducer
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                users: [...state.users, action.payload],
                count: state.count + 1
            }
        default:
            state;
    }
}

// store
const store = createStore(userReducer);

store.subscribe(() => {
    console.log(store.getState());
});

// store.dispatch(incrementCounterAction());
store.dispatch(addUser("Robi Thakur"));
store.dispatch(addUser("Riya"));