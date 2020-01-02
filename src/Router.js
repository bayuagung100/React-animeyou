import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { Redirect } from "react-router";
import App from './components/App';
import Recent from './components/pages/NaviRecent';
import Movie from './components/pages/NaviMovie';
import La from './components/pages/NaviLa';
import Search from './components/pages/Search';
import Collection from './components/pages/Collection';
const Router = () => (
    <BrowserRouter>
        <Route path="/" exact component={App} />

        <Route path="/tab-recent" component={Recent} />
        <Redirect from="/tab-recent" to="/" />
        <Route path="/tab-movie" component={Movie} />
        <Redirect from="/tab-movie" to="/" />
        <Route path="/tab-liveaction" component={La} />
        <Redirect from="/tab-liveaction" to="/" />

        <Route path="/search" component={Search} />
        <Route path="/collection" component={Collection} />
    </BrowserRouter>
);

export default Router;
