import React, { Component } from "react";
import "./footer.css";

class Footer extends Component {
    render() {
        return (
            <div className="footer-container">
                <div className="copyright">
                    copyright 2020, Animeyou.net. all rights reserved
                </div>
                <div className="text-center">
                <a href="/">
                    <span className="brand">Animeyou.net</span>
                </a>
                </div>
            </div>
                );
    }
}

export default Footer;