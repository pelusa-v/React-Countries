import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import searchLogo from './images/purzen-Globe.svg';
import './styles/Home.css';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            country_name: '',
            loading: false,
            error: null,
        }
    }


    handleSubmit = (e) => {

        e.preventDefault();
        const url = 'https://restcountries.eu/rest/v2/name/' + this.state.country_name;
        this.setState({ loading: true });

        axios
            .get(url)
            .then( (response) => {
                console.log(response.data);
                this.setState({ loading: false, error: null });
                this.props.setParentData(response.data);
                this.props.history.push('/country');
            })
            .catch( (error) => {
                console.log(error);
                this.setState({ loading:false, error: error })
            });
    }


    handleChange = (e) => {
        this.setState({
            country_name: e.target.value,
        })
    }
    
    render() {
        if (this.state.loading === true) { 
            return 'Loading...';
        }
        
        return (
            <React.Fragment>
                <div className="Home__container">
                    <div>
                        <img className="Home__searchLogo" src={searchLogo} alt="searchLogo"/>
                        <h2>Find countries here!</h2>
                        <form onSubmit={this.handleSubmit} className="d-flex">
                            <input onChange={this.handleChange} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button type="submit" className="btn btn-outline-primary" type="submit">Search</button>
                        </form>
                        <div class="Home__all">
                            <h4>or</h4>
                            <Link to="/countries" class="Home__allLink">See all countries here!!!</Link>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Home;