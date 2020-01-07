import React, { Component } from "react";
import "./collection.css";
import Header from "../Header";
import Sidebar from "../Sidebar";
import Footer from "../Footer";

class Collection extends Component {
    render() {
        return (
            <div>
                <Header collectionclass="active" />
                <div className="main-content">
                    <div className="main-content-container">
                        <div className="main-container-collection">
                            <div className="main-navigation-container-collection">
                                <div className="main-navigation-title">Collection</div>
                            </div>
                            <div className="main-body">
                                <ul>
                                    <li>
                                        Daftar Anime
                                    </li>
                                    <li>
                                        Jadwal Rilis
                                    </li>
                                    <li>
                                        Genre
                                    </li>
                                    <li>
                                        Movie
                                    </li>
                                    <li>
                                        Live Action
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <Sidebar/>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
export default Collection;