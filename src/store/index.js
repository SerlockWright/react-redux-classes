import { createStore, combineReducers, compose } from "redux";

// reducer
import classesReducer from "../redux/classes.reducer";

const composeEnhancers =
  process.env.NODE_ENV === "development" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const rootReducer = combineReducers({
  classes: classesReducer,
});

export const store = createStore(
  rootReducer,
  composeEnhancers()
);
