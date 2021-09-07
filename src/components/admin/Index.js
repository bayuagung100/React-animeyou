import React, { Component } from 'react';
import "./index.css";
import {
    Switch,
    Route,
    Redirect,
    Link,
    withRouter
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faEye, faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2'

class Index extends Component {
    constructor(props) {
        super(props);
        let token = localStorage.getItem('token');
        let login = true;
        if (token == null) {
            login = false
        }
        this.state = {
            login,
            path: this.props.history.location.pathname,

        }

        this.logout = this.logout.bind(this);
        this.active = this.active.bind(this);
    }

    logout(){
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes!',
            allowOutsideClick: false
        }).then((result) => {
            if (result.value) {
                localStorage.removeItem("token");
                this.setState({
                    login: false
                })
            }
        })
    }

    active(){
        this.setState((state, props) => {
            return {
                path: this.props.history.location.pathname,
            };
        })
    }

    componentDidMount() {
        // console.log(this.state.login);
    }

    render() {
        if (this.state.login === false) {
            return (<Redirect to="/auth" />)
        }
        const match = this.props.match.path;
        return (
            <div className="sidebar-mini layout-fixed layout-navbar-fixed">
                <div className="wrapper">
                    {/* Navbar */}
                    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="#" className="nav-link" data-widget="pushmenu" ><FontAwesomeIcon icon={faBars}/></Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link" target="_blank"><FontAwesomeIcon icon={faEye}/> Website</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="#" className="nav-link" onClick={this.logout}><FontAwesomeIcon icon={faSignOutAlt}/> Logout</Link>
                            </li>
                        </ul>
                    </nav>


                    {/* Main Sidebar Container */}
                    <aside className="main-sidebar sidebar-dark-primary elevation-4">
                        <Link className="brand-link" to="/admin" onClick={this.active}>
                            <span className="brand-text font-weight-light">Administrator</span>
                        </Link>

                        {/* Sidebar */}
                        <div className="sidebar">
                            {/* Sidebar Menu */}
                            <nav className="mt-2">
                                <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                                    {/* {
                                        MenuSide.map((value, index) => {
                                            return(
                                                <li key={index} className="nav-item">
                                                    <Link to={`${this.props.match.path}`+value.url} onClick={this.active} className={"nav-link "+(this.state.path===value.active ? 'active':'')}>
                                                        {value.fa}
                                                        <p>
                                                            {value.title}
                                                        </p>
                                                    </Link>
                                                </li>
                                            );
                                        })
                                    } */}
                                    
                                </ul>
                            </nav>
                        </div>
                    </aside>


                    {/* Content Wrapper. Contains page content */}
                    <div className="content-wrapper">

                        <Switch>
                            <Route path={`${match}/:pageContent`}>
                                {/* <PageContent/> */}
                            </Route>
                            <Route path={match}>
                                {/* <Dashboard/> */}
                            </Route>
                        </Switch>

                    </div>

                    {/* Content footer */}
                    <footer className="main-footer">
                        <strong>Copyright &copy; 2020 <a href="http://adminlte.io">Admin Online Store</a>.</strong>
                        All rights reserved.
                        <div className="float-right d-none d-sm-inline-block">
                        <b>Version</b> 1.0
                        </div>
                    </footer>
                </div>
            </div>
        );
    }
}

export default withRouter(Index);