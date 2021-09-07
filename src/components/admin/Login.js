import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";

const uAPIlocal = 'http://'+window.location.hostname+':8080';

class Login extends Component {
    constructor(props) {
        super(props);
        let token = localStorage.getItem('token');
        let login = true;
        if (token == null) {
            login = false
        }
        this.state = {
            username: '',
            password: '',
            login
        };
        this.onChange = this.onChange.bind(this);
        // this.inputChange = this.inputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault();
        axios.post(uAPIlocal+'/api/v1/auth',{
            username: this.state.username,
            password: this.state.password
        })
        .then(response => {
            return response.data;
            
        })
        .then(JsonData => {
            const status = JsonData.status;
            if (status !== 200) {
                this.setState({
                    message: JsonData.results
                })
            } else {
                console.log(JsonData)
                localStorage.setItem("token", JsonData.token)
                this.setState({
                    login: true
                })
            }

        })
        .catch(function (error) {
            console.log(error);
        });
        
    }

    // inputChange(e) {
    //     let newauth = { ...this.state.auth };
    //     newauth[e.target.name] = e.target.value;
    //     this.setState({
    //         auth: newauth
    //     }, () => console.log(this.state.auth));
    // }

    componentDidMount() {
        // console.log(this.state.login);
    }

    render() {

        if (this.state.login === true) {
            return (<Redirect to={'/admin'} login="true"/>)
        }
        return (
            <div className="hold-transition login-page">
                <div className="login-box">
                    <div className="card">
                        <div className="card-body login-card-body">
                        <p className="login-box-msg">Sign in to start your session</p>
                        {this.state.message ? (<div className="alert alert-danger alert-dismissible">{this.state.message}</div>):(<div></div>)}
                        <form onSubmit={this.onSubmit}>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" name="username" value={this.state.username} placeholder="Username" onChange={this.onChange} required />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <FontAwesomeIcon icon={faEnvelope}  />
                                    </div>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input type="password" className="form-control" name="password" value={this.state.password} placeholder="Password" onChange={this.onChange} required />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <FontAwesomeIcon icon={faLock}  />
                                    </div>
                                </div>
                            </div>

                            <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;