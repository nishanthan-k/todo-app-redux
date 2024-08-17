import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './reducers/todo.reducer';

const store = configureStore({
  reducer: {
    todo: todoReducer,
  }
})

export default store;

// Define RootState type for use in selectors and other places
export type RootState = ReturnType<typeof store.getState>;

// Define AppDispatch type for use with useDispatch
export type AppDispatch = typeof store.dispatch;