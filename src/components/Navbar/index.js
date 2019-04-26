import React from "react";
import "./style.css";

export default class Navbar extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light">
                <ul className="nav navbar-nav navbar-left">
                    <li className="refresh navbar-brand">
                        <a href="/">Archers Clicky Game</a>
                    </li>
                </ul>
                <span className="message" ref={this.props.propRefs.guessMsgLi}>Click an image to start!</span>
                <span className="score" ref={this.props.propRefs.topScoreLi} >Score: 0 | Top Score: 0</span>
            </nav>
        );
    }
}

