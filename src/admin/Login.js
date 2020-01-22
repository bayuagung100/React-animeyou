import React, { Component } from 'react';
import "./login.css";
import { BrowserRouter, Redirect } from "react-router-dom";
import axios from "axios";



class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: false,
            auth: {
                username: '',
                password: '',
            }
        };
        this.inputChange = this.inputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        axios.post('http://localhost:9000/auth',{
            username: this.state.auth.username,
            password: this.state.auth.password
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
        
    }

    inputChange(e) {
        let newauth = { ...this.state.auth };
        newauth[e.target.name] = e.target.value;
        this.setState({
            auth: newauth
        }, () => console.log(this.state.auth));
    }

    componentDidMount() {
        console.log(this.state.login);
    }

    render() {

        if (this.state.login === true) {
            return (<Redirect to={'/admin'} login="true"/>)
        }
        return (
            <BrowserRouter>
                {
                    this.state.login === true ? (
                        <Redirect from="/auth" to="/admin" />
                    ) : (
                            <div className="login-form">
                                <h1>Login Form</h1>
                                <form onSubmit={e => this.onSubmit(e)}>
                                    <input type="text" name="username" value={this.state.auth.username} placeholder="Username" onChange={this.inputChange} required />
                                    <input type="password" name="password" value={this.state.auth.password} placeholder="Password" onChange={this.inputChange} required />
                                    <input type="submit" />
                                </form>
                            </div>
                        )
                }
            </BrowserRouter>
        );
    }
}

export default Login;