import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import App from './components/App';
// import Recent from './components/pages/NaviRecent';
// import Movie from './components/pages/NaviMovie';
// import La from './components/pages/NaviLa';
import Search from './components/pages/Search';
import Collection from './components/pages/Collection';

import Login from './admin/Login';
import Dashboard from "./admin/Index";

import Scroll from 'react-scroll';
var scroll = Scroll.animateScroll;



class Router extends Component {
    scrollToTop = () => {
        scroll.scrollToTop();
    }
    render() {
        return (
            <BrowserRouter>
                <div id="rocketmeluncur" className="showrocket" onClick={this.scrollToTop} title="Go to top"></div>
                <Route path="/" exact component={App} />

                {/* <Route path="/" component={App} /> */}
                {/* <Redirect from="/tab-recent" to="/" /> */}
                <Route path="/tab-movie" component={App} />
                {/* <Redirect from="/tab-movie" to="/" /> */}
                <Route path="/tab-liveaction" component={App} />
                {/* <Redirect from="/tab-liveaction" to="/" /> */}

                <Route path="/search" component={Search} />
                <Route path="/collection" component={Collection} />

                <Route path="/auth" component={Login} />
                <Route path="/admin" component={Dashboard} />
            </BrowserRouter>
        );
    }
}

export default Router;
