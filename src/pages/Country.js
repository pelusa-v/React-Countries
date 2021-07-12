import React from 'react';
import { Link } from 'react-router-dom';

import CountryInfo from '../components/CountryInfo';
import Map from '../components/CountryMap';

class Country extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: this.props.country,
        };
    }

    componentDidMount() {
        console.log(this.props.country.name);
    }

    render() {

        return (
            <React.Fragment>
                    <CountryInfo country={this.state.data} />
                    <Map countryId={this.state.data.alpha2Code} />
            </React.Fragment>
        );
    }
}

export default Country;