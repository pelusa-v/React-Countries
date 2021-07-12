import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Country.css';

class CountryInfo extends React.Component {

    render() {
        return (
            <div className="Country__container">
                <h1 className="fst-italic">{this.props.country.name}</h1>
                <div className="mb-4 Country__subcontainer">
                    <img className="Country__flag" src={this.props.country.flag} alt={this.props.country.name}/>
                    <div className="Country__info">
                        <ul>
                        <li><span className="fw-ligth Country__item">Capital:</span>  {this.props.country.capital}</li>
                        <li><span className="fw-ligth Country__item">Language: </span>  {this.props.country.languages[0].nativeName}</li>
                        <li><span className="fw-ligth Country__item">Population: </span>  {this.props.country.population}</li>
                        <li><span className="fw-ligth Country__item">Currency: </span> {this.props.country.currencies[0].name}</li>
                        <li><span className="fw-ligth Country__item">Region: </span> {this.props.country.region}</li>
                        </ul>
                    </div>
                </div>
                <Link className="mt-4 btn btn-outline-primary" to="/">Look for another country</Link>
            </div>
        );
    }
}

export default CountryInfo;