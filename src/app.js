import "jquery"
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