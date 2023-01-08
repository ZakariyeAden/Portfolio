import { Component } from "react";
import { Nav } from "react-bootstrap";
export default class Links extends Component {
render(){
    
    return (
        <>
  <Nav.Link href={this.props.href} className={this.props.className}>{this.props.children}</Nav.Link>
        </>
    );
}
}   