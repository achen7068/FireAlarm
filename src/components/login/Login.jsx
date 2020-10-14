import React from 'react';
import firebase from '../../firebase';
import { Redirect } from 'react-router';
import styles from './Login.module.css';

export default class Login extends React.Component {

    state = {
        email: "",
        password: ""
    }

    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.signup = this.signup.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    

    async login(e) {
        e.preventDefault();
        try {
            const user = await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            if(user) {
                this.setState({user});
            }
        }
        catch(err) {
            console.error(err);
        }
    }

    async signup(e){
        e.preventDefault();
        try {
            const user = await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password);
            if(user) {
                this.setState({user});
            }
        }
        catch(err) {
            console.error(err);
        }
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

	render() {
        if(this.state.user) {
            return <Redirect to="/home"/>
        }
		return (
			<>
                <div className={styles.container}>
                    <div className={styles.row}>
                        <label >Email address</label>
                        <input value={this.state.email} onChange={this.handleChange} type="email" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className={styles.row}>
                        <label>Password</label>
                        <input value={this.state.password} onChange={this.handleChange} type="password" name="password" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div>
                        <button type="submit" onClick={this.login} class="btn btn-primary">Login</button>
                    <button onClick={this.signup} style={{marginLeft: '25px'}} className="btn btn-success">Signup</button>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <img src="/FMS_Logo.svg"/>
                </div>
            </>
		)
	}
}