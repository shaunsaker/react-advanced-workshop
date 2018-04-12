import React from "react";

export default class Select extends React.Component {
    state = {
        opened: this.props.opened || false,
        selectedValue: this.props.selectedValue || this.props.defaultValue,
    };

    isControlled = () => {
        const { selectedValue, onSelect } = this.props;

        return selectedValue !== undefined && typeof onSelect === "function";
    };

    toggleOpened = () => {
        if (this.isControlled()) {
            this.props.onOpen();
        } else {
            this.setState({
                opened: !this.state.opened,
            });
        }
    };

    selectOption = value => {
        if (this.isControlled()) {
            this.props.onSelect(value);
        } else {
            this.setState({
                selectedValue: value,
            });

            this.toggleOpened();
        }
    };

    render() {
        const { children: options, selectedValue, opened } = this.props;

        const value = this.props.selectedValue || this.state.selectedValue;

        if (opened || this.state.opened) {
            return React.Children.map(options, option => {
                return React.cloneElement(option, {
                    active: option.props.value === value,
                    onSelect: () => this.selectOption(option.props.value),
                });
            });
        } else {
            // Find the active one and render that
            let selectedOption;

            React.Children.forEach(options, option => {
                if (option.props.value === value) {
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
