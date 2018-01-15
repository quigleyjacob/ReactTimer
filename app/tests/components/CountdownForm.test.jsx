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
});
