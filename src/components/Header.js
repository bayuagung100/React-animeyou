import React, { Component } from "react";
import "./header.css";

class Header extends Component {
    render() {
        return (
            <div className="nav-container">
                <a href="">
                    <img className="logo" src="../logo.png" />
                    <span className="brand">Animeyou</span>
                </a>

                <form className="nav-search-container">
                    <input type="text" placeholder="Search ...."></input>
                    <i className="icon-search fa fa-search"></i>
                </form>

                <ul className="nav-menu">
                    <li className="home"><a href="">Home</a></li>
                    <li className="daftar-anime"><a href="">Daftar Anime</a></li>
                    <li className="jadwal"><a href="">Jadwal Rilis</a></li>
                    <li className="genre"><a href="">Genre</a></li>
                    <li className="movie"><a href="">Movie</a></li>
                    <li className="live-action"><a href="">Live Action</a></li>
                </ul>

                    {/* mobile */}
                    <ul className="nav-menu-mobile">
                        <li className="menu-home">
                            <a href=""><div className="home"><i className="fa fa-home"></i><br />Home</div></a>
                        </li>
                        <li className="menu-search">
                            <a href=""><div className="search"><i className="fa fa-search"></i><br />Search</div></a>
                        </li>
                        <li className="menu-collection">
                            <a href=""><div className="collection"><i className="fa fa-th-list"></i><br />Collection</div></a>
                        </li>
                    </ul>
            </div>

                )
            }
        }
        
export default Header;