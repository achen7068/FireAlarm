import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Login from './components/login/Login';
import Home from './components/home/Home';
import Devices from './components/devices/Devices';

export default class App extends React.Component {

	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path="/login" component={Login}/>
					<Route exact path="/home" component={Home}/>
					<Route exact path="/devices" component={Devices}/>
					<Route path="/">
						<Redirect to="/login"/>
					</Route>
				</Switch>
			</BrowserRouter>
		)
	}
}