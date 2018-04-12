import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Select from "./Select";
import Option from "./Option";

class App extends Component {
    state = {
        selectedValue: "blue",
        opened: false,
    };

    toggleOpened = () => {
        this.setState({
            opened: !this.state.opened,
        });
    };

    selectOption = value => {
        this.setState({
            selectedValue: value,
        });

        this.toggleOpened();
    };

    render() {
        return (
            <div className="App">
                <Select
                    selectedValue={this.state.selectedValue}
                    opened={this.state.opened}
                    onSelect={this.selectOption}
                    onOpen={this.toggleOpened}>
                    <Option value="blue">Blue</Option>
                    <Option value="red">Red</Option>
                    <Option value="white">White</Option>
                </Select>
            </div>
        );
    }
}

export default App;
