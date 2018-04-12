import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { compose } from "recompose";

import MeasureTime from "./components/MeasureTime";
import FetchData from "./components/FetchData";
import WithMouse from "./components/WithMouse";

class App extends Component {
    render() {
        const { data, secondsPassed, x, y } = this.props;

        return (
            <div className="App" style={{ height: "100vh" }}>
                <MeasureTime
                    render={({ secondsPassed }) => (
                        <div>Time passed: {secondsPassed}</div>
                    )}
                />
                <FetchData
                    url="https://swapi.co/api/people/2"
                    render={({ data }) =>
                        data && <div>Fetched data: {JSON.stringify(data)}</div>
                    }
                />
                <WithMouse
                    render={({ x, y }) => (
                        <div>
                            Mouse is at ({x}, {y})
                        </div>
                    )}
                />
            </div>
        );
    }
}

export default App;
