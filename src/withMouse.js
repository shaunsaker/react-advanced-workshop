import React from "react";

const withMouse = Component => {
    return class ModifiedComponent extends React.Component {
        constructor(props) {
            super(props);

            this.handleMouseMove = this.handleMouseMove.bind(this);

            this.state = {
                x: 0,
                y: 0,
            };
        }

        handleMouseMove(event) {
            const x = event.clientX;
            const y = event.clientY;

            this.setState({
                x,
                y,
            });
        }

        render() {
            return (
                <div onMouseMove={this.handleMouseMove}>
                    <Component
                        {...this.props}
                        x={this.state.x}
                        y={this.state.y}
                    />
                </div>
            );
        }
    };
};

export default withMouse;
