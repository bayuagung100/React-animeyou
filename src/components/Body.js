import React, { Component } from "react";
import "./body.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Sidebar from './Sidebar';
import NaviRecent from './pages/NaviRecent';
import NaviMovie from './pages/NaviMovie';
import NaviLa from './pages/NaviLa';

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recentclass: `${this.props.path === "/" ? ("active") : ("")}`,
            movieclass: `${this.props.path === "/tab-movie" ? ("active") : ("")}`,
            laclass: `${this.props.path === "/tab-liveaction" ? ("active") : ("")}`,
        };
        this.recentActive = this.recentActive.bind(this);
        this.movieActive = this.movieActive.bind(this);
        this.laActive = this.laActive.bind(this);
    }

    recentActive() {
        this.setState((state, props) => {
            return {
                recentclass: "active",
                movieclass: "",
                laclass: ""
            };
        });
    }
    movieActive() {
        this.setState((state, props) => {
            return {
                recentclass: "",
                movieclass: "active",
                laclass: ""
            };
        });
    }
    laActive() {
        this.setState((state, props) => {
            return {
                recentclass: "",
                movieclass: "",
                laclass: "active"
            };
        });
    }
    render() {
        return (
            <BrowserRouter>

                <div className="main-content">
                    <div className="main-content-container">
                        <div className="main-container">
                            <div className="main-navigation-container-mobile">
                                <div className="navigation-mobile active">Recent Update</div>
                            </div>
                            <div className="main-navigation-container">
                                {
                                    this.state.recentclass === "active" ? (
                                        <div>

                                            <div className={"navigation " + this.state.recentclass}><Link to="/" onClick={this.recentActive}>Recent Update</Link></div>
                                            <div className={"navigation " + this.state.movieclass}><Link to="/tab-movie" onClick={this.movieActive}>Movie</Link></div>
                                            <div className={"navigation " + this.state.laclass}><Link to="/tab-liveaction" onClick={this.laActive}>Live Action</Link></div>

                                        </div>

                                    ) : (
                                            <div>
                                                <div className={"navigation " + this.state.recentclass}><Link to="/" onClick={this.recentActive}>Recent Update</Link></div>
                                                <div className={"navigation " + this.state.movieclass}><Link to="/tab-movie" onClick={this.movieActive}>Movie</Link></div>
                                                <div className={"navigation " + this.state.laclass}><Link to="/tab-liveaction" onClick={this.laActive}>Live Action</Link></div>
                                            </div>
                                        )
                                }
                            </div>
                            {
                                this.state.recentclass === "active" ? (
                                    <NaviRecent />

                                ) : (
                                        <div>
                                            {/* <Route path="/" component={NaviRecent} /> */}
                                            <Route path="/tab-movie" component={NaviMovie} />
                                            <Route path="/tab-liveaction" component={NaviLa} />

                                        </div>
                                    )
                            }
                        </div>
                        <Sidebar />
                    </div>
                </div>

            </BrowserRouter>
        )
    }
}

export default Body;