import React from "react";

const measureTime = Component => {
    return class ModifiedComponent extends React.Component {
        constructor(props) {
            super(props);

            this.measureTime = this.measureTime.bind(this);

            this.interval = null;

            this.state = {
                secondsPassed: 0,
            };
        }

        componentDidMount() {
            this.interval = this.measureTime();
        }

        componentWillUnmount() {
            clearInterval(this.interval);
        }

        measureTime() {
            setInterval(() => {
                this.setState({
                    secondsPassed: this.state.secondsPassed + 1,
                });
            }, 1000);
        }

        render() {
            return (
                <div>
                    <Component
                        {...this.props}
                        secondsPassed={this.state.secondsPassed}
                    />
                </div>
            );
        }
    };
};

export default measureTime;
