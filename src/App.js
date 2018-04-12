import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Select from "./Select";
import Option from "./Option";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Select defaultValue="blue">
                    <Option value="blue">Blue</Option>
                    <Option value="red">Red</Option>
                    <Option value="white">White</Option>
                </Select>
            </div>
        );
    }
}

export default App;
