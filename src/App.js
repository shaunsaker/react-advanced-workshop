import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { compose } from "recompose";

import measureTime from "./measureTime";
import fetchData from "./fetchData";
import withMouse from "./withMouse";

class App extends Component {
    render() {
        const { data, secondsPassed, x, y } = this.props;

        return (
            <div className="App">
                <div>Time passed: {secondsPassed}</div>
                {data && <div>Fetched data: {JSON.stringify(data)}</div>}
                <div style={{ height: "100vh" }}>
                    Mouse is at ({x}, {y})
                </div>
            </div>
        );
    }
}

export default compose(
    fetchData("https://swapi.co/api/people/2"),
    measureTime,
    withMouse,
)(App);
