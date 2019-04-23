import React, { Component } from 'react';
import './Jumbo.css';

class Jumbo extends Component {
    render() {
        return(
            <div className="jumbotron jumbotron-fluid jumbotronJumbo">
            <div className = 'jumboOpaque'>
  <div className="container">
    <h1 className="display-4 text-center">Star Wars Themed Memory Game</h1>
    <p className="lead text-center">Click on an image to earn points, but don't click on any more than once!</p>
  </div>
  <p className="text-center scoreText">Score={this.props.score}</p>
</div>
</div>
        )
    }
}

export default Jumbo;