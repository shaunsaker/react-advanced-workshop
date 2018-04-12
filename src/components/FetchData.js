import React from "react";

class FetchData extends React.Component {
    state = {
        data: null,
    };

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        // TODO: Use async await

        const self = this;

        // Fetch data using url
        fetch(this.props.url)
            .then(response => {
                response.json().then(function(data) {
                    self.setState({
                        data,
                    });
                });
            })
            .catch(error => {
                // Handle error
            });
    };

    render() {
        const { data } = this.state;

        return this.props.render({ data });
    }
}

export default FetchData;
