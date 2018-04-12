import React from "react";

class WithMouse extends React.Component {
    state = {
        x: 0,
        y: 0,
    };

    handleMouseMove = event => {
        const x = event.clientX;
        const y = event.clientY;

        this.setState({
            x,
            y,
        });
    };

    render() {
        const { x, y } = this.state;

        return (
            <div onMouseMove={this.handleMouseMove}>
                {this.props.render({ x, y })}
            </div>
        );
    }
}

export default WithMouse;
