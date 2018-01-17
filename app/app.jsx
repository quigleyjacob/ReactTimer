import React from "react";
import ReactDOM from "react-dom";
import Main from "Main";
import {Route, Router, IndexRoute, hashHistory} from "react-router";
import Timer from "Timer";
import Countdown from "Countdown"

//Load foundation
$(document).foundation();

//app.css
require("style!css!sass!ApplicationStyle");

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Timer}></IndexRoute>
            <Route path="/countdown" component={Countdown}></Route>
        </Route>
    </Router>,
    document.getElementById("app")
);
