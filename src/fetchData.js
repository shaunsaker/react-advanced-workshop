import React from "react";

const fetchData = url => Component => {
    return class ModifiedComponent extends React.Component {
        constructor(props) {
            super(props);

            this.fetchData = this.fetchData.bind(this);

            this.state = {
                data: null,
            };
        }

        componentDidMount() {
            this.fetchData();
        }

        fetchData() {
            // TODO: Use async await

            const self = this;

            // Fetch data using url
            fetch(url)
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
        }

        render() {
            return (
                <div>
                    <Component {...this.props} data={this.state.data} />
                </div>
            );
        }
    };
};

export default fetchData;
