import React, { Component } from 'react';
import "./app.css";
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

class App extends Component {
  render() {
    const { path } = this.props.match;
    console.log("app:" + path);
    return (
      <div>
        <Header homeclass="active" />
        <Body path={path} />
        <Footer />
      </div>
    );
  }
}

export default App;
