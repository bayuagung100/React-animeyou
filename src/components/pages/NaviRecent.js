import React, { Component } from "react";
import "../body.css";
class NaviRecent extends Component {
    render() {
        return (
            <div>
                <div className="item-list-container">
                    <div className="item-list">
                        <a href="/"><img src="../sao.jpg" alt="sao"/>
                            <div className="block-title"><h3>sword art online alternative gun gale online</h3></div></a>
                        <div className="block-eps"><h3>12 [END]</h3></div>
                        <div className="block-type"><h3>Tv</h3></div>
                    </div>
                </div>
                <div className="item-list-container">
                    <div className="item-list">
                        <a href="/"><img src="../sao.jpg" alt="sao"/>
                            <div className="block-title"><h3>sword art online: alternative GGO</h3></div></a>
                        <div className="block-eps"><h3>02</h3></div>
                        <div className="block-type"><h3>Tv</h3></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NaviRecent;