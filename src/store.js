import {createStore,combineReducers,applyMiddleware} from "redux";
import postReducer from "./reducers/post-reducer";
import postDetailsReducer from "./reducers/post-details-reducer";

import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
const store = createStore(
    combineReducers({postPageData:postReducer,postDetailsData:postDetailsReducer}),
    {},
    applyMiddleware(logger(),thunk,promise())
);

export default store;