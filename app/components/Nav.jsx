import React from "react";
import {Link, IndexLink} from "react-router";

var Nav = React.createClass({
    render: function() {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">React Timer</li>
                        <li><IndexLink to="/" activeClassName="active">Timer</IndexLink></li>
                        <li><Link to="/countdown" activeClassName="active">Countdown</Link></li>
                    </ul>
                </div>
                <div className="top-bar-right">
                        <ul className="menu">
                            <li className="menu-text">Created By: <a href="https://github.com/quigleyjacob" target="_blank">Jacob Quigley</a></li>
                        </ul>
                </div>
            </div>
        )
    }
});

module.exports = Nav;
