import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from "react-dom";
import React from "react";
import { AppLayout} from "./layout";
import { Provider} from "react-redux";

import store from "./store"

ReactDOM.render(
    <Provider store={store}>
        <AppLayout />
    </Provider>, 
    document.getElementById('root')
);