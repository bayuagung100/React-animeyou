import React, { Component } from 'react';
import { BrowserRouter, Redirect } from "react-router-dom";

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: `${this.props.login ? (true) : (false)}`,
        };
    }
    componentDidMount() {
        console.log(this.state.login);
    }

    render() {
        if (this.state.login === false) {
            return (<Redirect to={'/admin'} />)
        }
        return (
            <BrowserRouter>
                {
                    this.state.login === false ? (
                        <Redirect from="/admin" to="/auth" />
                    ) : (
                            <div>
                                admin
                            </div>
                        )
                }
            </BrowserRouter>

        );
    }
}

export default Index;