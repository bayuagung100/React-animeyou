import React, { Component } from "react";
import "./header.css";
import { Link } from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            homeclass: this.props.homeclass,
            searchclass: this.props.searchclass,
            collectionclass: this.props.collectionclass
        };
    }
    render() {
        return (
            <div className="nav-container">
                <Link to="/">
                    <img className="logo" src="../logo.png" alt="logo"/>
                    <span className="brand">Animeyou</span>
                </Link>

                {/* <form className="nav-search-container">
                    <input type="text" placeholder="Search ...."></input>
                    <i className="icon-search fa fa-search"></i>
                </form> */}

                <ul className="nav-menu">
                    <li><Link className={this.state.collectionclass} to="/collection"><i className="fa fa-th-list"></i> Collection</Link></li>
                    <li><Link className={this.state.searchclass} to="/search"><i className="fa fa-search"></i> Search</Link></li>
                    <li><Link className={this.state.homeclass} to="/" homeclass="active"><i className="fa fa-home"></i> Home</Link></li>
                </ul>

                {/* mobile */}
                <ul className="nav-menu-mobile">
                    <li className="menu-home">
                        <Link to="/"><div className={"home " + this.state.homeclass}><i className="fa fa-home"></i><br />Home</div></Link>
                    </li>
                    <li className="menu-search">
                        <Link to="/search"><div className={"search " + this.state.searchclass} ><i className="fa fa-search"></i><br />Search</div></Link>
                    </li>
                    <li className="menu-collection">
                        <Link to="/collection"><div className={"collection " + this.state.collectionclass} ><i className="fa fa-th-list"></i><br />Collection</div></Link>
                    </li>
                </ul>
            </div>

        )
    }
}

export default Header;