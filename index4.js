// async actions - api calling
// api url - https://jsonplaceholder.typicode.com/todos
// middleware - redux-thunk
// axios api
const { createStore, applyMiddleware } = require("redux");
const axios = require("axios");
const thunk = require("redux-thunk").thunk;  // <-- FIXED: correct middleware export

// constants
const GET_TODOS_REQUEST = 'GET_TODOS_REQUEST';
const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS';
const GET_TODOS_FAILED = 'GET_TODOS_FAILED';

const API_URL = 'https://jsonplaceholder.typicode.com/todos';

// initial state
const initialTodosState = {
    todos: [],
    isLoading: false,
    error: null
};

// actions
const getTodosRequest = () => ({
    type: GET_TODOS_REQUEST
});

const getTodosSuccess = (todos) => ({
    type: GET_TODOS_SUCCESS,
    payload: todos
});

const getTodosFailed = (error) => ({
    type: GET_TODOS_FAILED,
    payload: error
});

// reducer
const todoReducer = (state = initialTodosState, action) => {
    switch (action.type) {
        case GET_TODOS_REQUEST:
            return { ...state,
                 isLoading: true };

        case GET_TODOS_SUCCESS:
            return { ...state,
                 isLoading: false,
                 todos: action.payload };

        case GET_TODOS_FAILED:
            return { ...state,
                 isLoading: false,
                  error: action.payload };

        default:
            return state;
    }
};

// async action creator
const fetchData = () => {
    return (dispatch) => {

        dispatch(getTodosRequest());

        axios.get(API_URL)
            .then(res => {
                // dispatch(getTodosSuccess(res.data));
                const todos = res.data;
                const titles = todos.map(todo => todo.title);
                dispatch(getTodosSuccess(titles))
            })
            .catch(error => {
                const errorMessage = error.message;
                dispatch(getTodosFailed(errorMessage));
            });
    };
};

// store
const store = createStore(todoReducer, applyMiddleware(thunk));

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(fetchData());