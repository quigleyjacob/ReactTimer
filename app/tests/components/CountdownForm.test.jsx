import React from "react";
import ReactDOM from "react-dom";
import expect from "expect";
import $ from "jQuery";
import TestUtils from "react-addons-test-utils";
import CountdownForm from "CountdownForm";

describe("Countdown Form", () => {
    it("should exist", () => {
        expect(CountdownForm).toExist();
    });
    it("should call on set countdown if valid seconds entered", () => {
        var spy = expect.createSpy();
        var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
        var $el = $(ReactDOM.findDOMNode(countdownForm));

        countdownForm.refs.seconds.value = "109";
        TestUtils.Simulate.submit($el.find("form")[0]);

        expect(spy).toHaveBeenCalledWith(109);
    });
    it("should not call set countdown if invalid value", () => {
        var spy = expect.createSpy();
        var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
        var $el = $(ReactDOM.findDOMNode(countdownForm));

        countdownForm.refs.seconds.value = "aq";
        TestUtils.Simulate.submit($el.find("form")[0]);

        expect(spy).toNotHaveBeenCalled();
    });
});
