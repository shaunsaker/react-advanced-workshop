import React from "react";

export default class Select extends React.Component {
    state = {
        opened: false,
        selectedValue: this.props.defaultValue,
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
        const { children: options } = this.props;

        if (this.state.opened) {
            return React.Children.map(options, option => {
                return React.cloneElement(option, {
                    active: option.props.value === this.state.selectedValue,
                    onSelect: () => this.selectOption(option.props.value),
                });
            });
        } else {
            // Find the active one and render that
            let selectedOption;

            React.Children.forEach(options, option => {
                if (option.props.value === this.state.selectedValue) {
                    selectedOption = option;
                }
            });

            return (
                <div
                    onClick={this.toggleOpened}
                    style={{
                        width: 200,
                        margin: "auto",
                        border: "1px solid red",
                    }}>
                    {selectedOption.props.children}
                </div>
            );
        }
    }
}
