import React from "react";

class MeasureTime extends React.Component {
    state = {
        secondsPassed: 0,
    };

    componentDidMount() {
        this.interval = this.measureTime();
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    measureTime = () => {
        setInterval(() => {
            this.setState({
                secondsPassed: this.state.secondsPassed + 1,
            });
        }, 1000);
    };

    render() {
        const { secondsPassed } = this.state;

        return this.props.render({ secondsPassed });
    }
}

export default MeasureTime;
