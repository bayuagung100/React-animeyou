import React, { Component } from "react";
import { BallClipRotateMultiple } from 'react-pure-loaders';
import "./search.css";
import "../body.css";
import Header from "../Header";
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
                        <div className="main-container">
                            <div className="main-navigation-container">
                                <div className="result-for">Search result for: {this.state.value}</div>
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
                                                this.state.meals.map((meal, index) => (<div key={index}>
                                                    <h1>{meal.strMeal}</h1>
                                                    <img src={meal.strMealThumb} alt="meal-thumbnail" />
                                                </div>))
                                            }
                                        </div>
                                    ) : (
                                            <div className="not-found">
                                                <h3>No posts found. Try a different search?</h3>
                                            </div>
                                        )
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />

            </div>
        )
    }
}
export default Search;