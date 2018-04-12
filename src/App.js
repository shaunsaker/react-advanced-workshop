import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { compose } from "recompose";

import KeyLogger from "./components/KeyLogger";
import MeasureTime from "./components/MeasureTime";
import FetchData from "./components/FetchData";
import WithMouse from "./components/WithMouse";

class App extends Component {
    render() {
        return (
            <div className="App" style={{ height: "100vh" }}>
                <KeyLogger
                    render={({ typedText, lastKeyStroke }) => (
                        <div>
                            <MeasureTime
                                render={({ secondsPassed }) => (
                                    <div>Time passed: {secondsPassed}</div>
                                )}
                            />
                            <WithMouse
                                render={({ x, y }) => (
                                    <div>
                                        Mouse is at ({x}, {y})
                                    </div>
                                )}
                            />
                            <FetchData
                                url="https://swapi.co/api/people/2"
                                render={({ data }) =>
                                    data && (
                                        <div>
                                            Fetched data: {JSON.stringify(data)}
                                        </div>
                                    )
                                }
                            />
                            <div>Last keystroke is: {lastKeyStroke}</div>
                            <div style={{ height: 40, border: "1px solid" }}>
                                The user typed: {typedText}
                            </div>
                        </div>
                    )}
                />
            </div>
        );
    }
}

export default App;
