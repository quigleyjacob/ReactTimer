import React from "react";
import Clock from "Clock";
import Controls from "Controls";

var Timer = React.createClass({
    getInitialState: function() {
        return {
            count: 0,
            timerStatus: "stopped"
        }
    },
    componentDidUpdate: function(prevProps, prevState) {
        if (this.state.timerStatus !== prevState.timerStatus) {
            switch (this.state.timerStatus) {
                case "started":
                    this.startTimer();
                    break;
                case "stopped":
                    this.setState({count: 0});
                case "paused":
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
            }
        }
    },
    handleStatusChange: function(newStatus) {
        this.setState({timerStatus: newStatus});
    },
    startTimer: function() {
        this.timer = setInterval(() => {
            var newCount = this.state.count + 1;
            this.setState({count: newCount});
        }, 1000);
    },
    componentWillUnmount: function() {
        clearInterval(this.timer);
        this.timer = undefined;
    },
    render: function() {
        var {count, timerStatus} = this.state;
        return (
            <div>
                <h1 className="page-title">Timer App</h1>
                <Clock totalSeconds={count}/>
                <Controls status={timerStatus} onStatusChange={this.handleStatusChange}/>
            </div>
        )
    }
});

module.exports = Timer;
