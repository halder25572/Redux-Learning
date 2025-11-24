// state -- count: 0
// action - increment, decrement, reset
// reducer
// store
const { createStore } = require("@reduxjs/toolkit");

// CONSTANTS
const ADD_USER = 'ADD_USER';

// প্রথমে তোমার অ্যাপে থাকবে— (মানে প্রথমে গ্রামের স্টেট-ব্যাংকে একজন মানুষই আছে— "Nayan")

const initialState = {
    users: ['Nayan'],
    count: 1
}

// যখন তুমি কাউকে অ্যাপে যোগ করতে চাও, তুমি এই "চিঠি" পাঠাবে। 
// When you want to add someone to the app, you send this "letter".
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
           return state;
    }
}

// store
const store = createStore(userReducer);

store.subscribe(() => {
    console.log(store.getState());
});

// store.dispatch(incrementCounterAction());
store.dispatch(addUser("Robi Thakur"));
store.dispatch(addUser("Nayan Thakur"));