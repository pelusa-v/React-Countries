import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Country from '../pages/Country';
import Layout from './Layout';
import Countries from '../pages/Countries';

class App extends React.Component {

    state = {
        data: [],
    }

    setData = (dataFromHome) => {
        console.log('Set App data from Hom')
        this.setState({
            data: dataFromHome[0],
        })
    }

    render() {
        return (
            <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" render={(props) => (
                            <Home {...props} setParentData={this.setData} />
                        )} 
                    />
                    <Route exact path="/country" render={(props) => (
                            <Country {...props} country={this.state.data} />
                        )}
                    />
                    <Route exact path="/countries" component={Countries} />
                </Switch>
            </Layout>
            </BrowserRouter>
        );
    }
}

export default App;