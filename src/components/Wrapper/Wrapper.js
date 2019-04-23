import React, { Component } from "react";
import "./Wrapper.css";

class Wrapper extends Component {


render() {
  // return (<div className="wrapper">{props.children}</div>
return (
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
   
  {this.props.children}
  </div>
</div>
  )
}
}
export default Wrapper;