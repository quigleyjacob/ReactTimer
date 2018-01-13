import React from "react";
import ReactDOM from "react-dom";
import Main from "Main";
import {Route, Router, IndexRoute, hashHistory} from "react-router";

//Load foundation
require("style!css!foundation-sites/dist/foundation.min.css");
$(document).foundation();

//app.css
require("style!css!sass!ApplicationStyle");

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>

        </Route>
    </Router>,
    document.getElementById("app")
);
