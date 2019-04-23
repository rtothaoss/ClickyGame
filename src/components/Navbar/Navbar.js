import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid jumbotronNav">

                <div class='row'>
                    <div class='col'>
                        <h1 className="display-4 text-center">Memory Game</h1>
                    </div>
                    <div class='col'>
                        <h1 className="display-4 text-center">Click an image to begin!</h1>
                    </div>
                    <div class='col'>
                        <h1 className="display-4 text-center">Score={this.props.score}</h1>
                    </div>
                </div>

            </div>

        )
    }
}

export default Navbar;