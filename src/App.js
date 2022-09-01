import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'; 

// import Pizza from './containers/Pizza';
import Users from './containers/Users';

import asyncComponent from './hoc/asyncComponents';

const AsyncPizza = asyncComponent(() => {
    return import('./containers/Pizza.js');
})
class User extends Component{
    render(){
        return(
            <div>
                <div>
                    <Link to="/">Users</Link>
                    <Link to="/pizza">Pizza</Link>
                </div>
                <div>
                    <Route path='/' exact component={Users} />
                    <Route path='/pizza' component={AsyncPizza} />
                </div>
            </div>
        );
    }
}
export default User;