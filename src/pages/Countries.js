import React from 'react';
import axios from 'axios';

import CountryItem from '../components/CountryItem';

class Countries extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            error: null,
            data: [],
        }
    }

    fetchData = (url) => {
        axios
            .get(url)
            .then( (response) => {
                const data = response.data
                this.setState({ loading: false, error: null, data: data })
            })
            .catch( (error) => {
                this.setState({ loading: false, error: error })
            });
    }

    componentDidMount() {
        const url = 'https://restcountries.eu/rest/v2/all';
        this.fetchData(url);
    }

    render() {

        if (this.state.loading === true) { 
            return 'Loading...';
        }

        return (
            <React.Fragment>
                <ul>
                    {this.state.data.map( (country) => {
                        return (
                            <CountryItem country={country}/>
                        );
                    })}
                </ul>
            </React.Fragment>
        );
    }
}

export default Countries;