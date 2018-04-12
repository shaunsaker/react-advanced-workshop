import React from "react";

class KeyLogger extends React.Component {
    state = {
        typedText: null,
        lastKeyStroke: null,
    };

    handleInput = event => {
        const { key } = event;
        const blockedKeys = ["Backspace", "Enter", "Escape"];

        this.setState({
            typedText: !blockedKeys.includes(key)
                ? this.state.typedText ? this.state.typedText + key : key
                : this.state.typedText,
            lastKeyStroke: key,
        });
    };

    render() {
        const { typedText, lastKeyStroke } = this.state;

        return (
            <div
                ref={ref => ref && ref.focus()}
                onKeyDown={this.handleInput}
                tabIndex={0}>
                {this.props.render({ typedText, lastKeyStroke })}
            </div>
        );
    }
}

export default KeyLogger;
