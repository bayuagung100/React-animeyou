import React from 'react';
import {BrowserRouter, Route, Link} from "react-router-dom"; 
import App from './components/App';

const Router = () => (
    <BrowserRouter>
            <Route path="/" exact component={App} />
    </BrowserRouter>
);

export default Router ;