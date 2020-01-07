import React, { Component } from "react";
import { BallClipRotateMultiple } from 'react-pure-loaders';
import "./search.css";
import "../body.css";
import Header from "../Header";
import Sidebar from "../Sidebar";
import Footer from "../Footer";

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            loading: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.makeApiCall = this.makeApiCall.bind(this);
    }

    makeApiCall(values) {
        var searchUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${values}`;
        this.setState({
            loading: true
        });
        fetch(searchUrl)
            .then(response => {

                return response.json();
            })
            .then(jsonData => {
                console.log(jsonData.meals);
                this.setState({
                    loading: false,
                    meals: jsonData.meals
                });
            });
    };
    handleChange(e) {
        e.preventDefault();
        this.setState({
            value: e.target.value
        });
        console.log(this.state.value);
    };
    handleSearch(e) {
        e.preventDefault();
        this.makeApiCall(this.state.value);
        console.log(this.state.value);
    }

    render() {
        return (
            <div>
                <Header searchclass="active" />
                <div className="main-content">
                    <div className="main-content-container">
                        <div className="search-container-box">
                            <form onSubmit={e => this.handleSearch(e)}>
                                <input className="search-box" name="text" type="text" placeholder="Cari anime disini ..." title="Cari anime disini ..." value={this.state.value} onChange={e => this.handleChange(e)} />
                            </form>
                        </div>
                        <div className="main-container-search">
                            <div className="main-navigation-container-search">
                                <div className="result-for">Search for: {this.state.value}</div>
                            </div>
                            <div className="result">
                                {
                                    this.state.loading ? (
                                        <div className="loading">
                                            <BallClipRotateMultiple
                                                color={'#000'}
                                                loading={this.state.loading}
                                            />
                                        </div>
                                    ) : (
                                            <div></div>
                                        )
                                }
                                {
                                    this.state.meals ? (
                                        <div>
                                            {
                                                this.state.meals.map((meal, index) => (
                                                    <div key={index} className="main-body">
                                                        <div className="card">
                                                            {/* <div className="card-header">
                                                                <a href="/">
                                                                    <img src={meal.strMealThumb}alt="sao" />
                                                                    <div className="block-title">
                                                                        <h3>{meal.strMeal}</h3>
                                                                    </div>
                                                                </a>
                                                            </div> */}
                                                            <div className="card-body">
                                                                <a href="/">
                                                                    <img src={meal.strMealThumb} alt="sao" />
                                                                </a>
                                                                <div className="block-eps"><h3>Live Action</h3></div>
                                                                
                                                                <div className="block-view">
                                                                    <h4>100 Views</h4>
                                                                </div>
                                                                <a href="/">
                                                                    <div className="block-title">
                                                                        <h3>{meal.strMeal}</h3>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    ) : (
                                            <div className="not-found">
                                                <h3>Tidak ada anime yang ditemukan. Coba cari yang lain?</h3>
                                            </div>
                                        )
                                }
                            </div>
                        </div>

                        <Sidebar />
                    </div>
                </div>
                <Footer />

            </div>
        )
    }
}
export default Search;