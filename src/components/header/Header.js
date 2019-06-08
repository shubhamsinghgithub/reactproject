/*import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Card, Container, Row, Col } from "react-bootstrap";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  OverlayTrigger,
  Dropdown
} from "react-bootstrap";

class Header extends React.Component {
  render() {
    return (
      <Router>
      <div>
        <Row >
          <Col md="12">
            <Navbar bg="dark" variant="dark" >
              <ul>
                <Navbar.Brand href="#home"><b>SHOPPING</b></Navbar.Brand>
              </ul>
              <Nav className="mr-auto">
              <Nav.Link href="#Men">MEN</Nav.Link>
              <Nav.Link href="#women">WOMEN</Nav.Link>
              <Nav.Link href="#girls">GIRLS</Nav.Link>
              <Nav.Link href="#accessories">ACCESSORIES</Nav.Link>
              <Nav.Link href="#plus+curve">PLUS+CURVE</Nav.Link>
              <Nav.Link href="#sale">SALE</Nav.Link>
            </Nav>

              <Nav className="mr-auto" />
              <Nav>

                <Form inline className="justify-content-end">
                  <FormControl
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2" />
                    <Link to="/rot.js">
                  <Button variant="outline-info">Search</Button>
                  </Link>
                </Form>

                <Dropdown>
                  <Dropdown.Toggle variant="info" id="dropdown-basic">
                    <i class="w3-dropdown-click w3-button w3-bar-item topnav-icons fa fa-menu"></i>
                  </Dropdown.Toggle>

                  <Dropdown.Menu alignRight>
                    <Dropdown.Item href="#/action-1">About Us</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Contact Us</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Login</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav>
            </Navbar>
          </Col>
        </Row>
      </div>
      </Router>
    );
  }
}
export default Header;*/


import React from "react";
import Modal from 'react-modal';
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
//import { Modal } from "mdbreact";


class Header extends React.Component {
  constructor() {
    super()
      this.state = {
        isActive : false
      }
    
  }

  // componentWillMount() {
  //   Modal.setAppElement('body');
  // }

  toggleModal = () => {
    this.setState({
      isActive:!this.state.isActive
    })

  }

  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark" expand="lg">
          <div style={{ margin: "0 auto" }}>
            <Navbar.Brand href="#home"><b> SHOPPING  </b></Navbar.Brand>
            
            <Button
            href="/second"
              variant="link"
              style={{ textDecoration: "none", color: "#FFFFFF" }}
              size="sm">
              WOMEN
            </Button>

            <Button
            href="/second"
              variant="link"
              style={{ textDecoration: "none", color: "#FFFFFF" }}
              size="sm" >
              ACCESSORIES
            </Button>

            <Button
            href="/second"
              variant="link"
              style={{ textDecoration: "none", color: "#FFFFFF" }}
              size="sm"  >
              PLUS+CURVE
            </Button>

            <Button
            href="/second"
              variant="link"
              style={{ textDecoration: "none", color: "#FFFFFF" }}
              size="sm" >
              MEN
            </Button>

            <Button
            href="/second"
              variant="link"
              style={{ textDecoration: "none", color: "#FFFFFF" }}
              size="sm">
              GIRLS
            </Button>

            <Button
            href="/second"
              variant="link"
              style={{ textDecoration: "none", color: "#FFFFFF" }}
              size="sm" >
              SALE
            </Button>

            <div style={{ display: "inline-block" }}>
              <Nav>
                <Form inline className="justify-content-end"
                style={{ paddingLeft:"195px" }} >
                  <FormControl
                    style={{
                      borderRadius: "100px"
                      
                    }}
                    type="text"
                    placeholder="Search Products"
                    className="mr-sm-2" />
                    

                
                  <Button
                  href="/second"
                    
                    style={{
                      borderRadius: "100px",
                      marginLeft: "-50px"
                    }}
                    variant="warning" >
                    <i style={{ verticalAlign: "middle" }}
                      class="material-icons" > search </i>
                  </Button>
                

                </Form>
                <Button
                  variant="link"
                  style={{ textDecoration: "none", color: "#FFFFFF" }} >
                  <i class="material-icons">perm_identity</i>
                </Button>

                <Button
                  variant="link"
                  style={{ textDecoration: "none", color: "#FFFFFF" }} >
                  <i class="material-icons">favorite_border</i>
                </Button>

                <Button
                variant="link"
                style={{ textDecoration: "none", color: "#FFFFFF" }} >
                <i class="material-icons">work_outline</i>
              </Button>

              <Button
              variant="link"
              style={{ textDecoration: "none", color: "#FFFFFF" }} >
              <i class="material-icons">shopping_cart</i>
            </Button>

            <Button
              onClick={this.toggleModal}
              variant="link"
              style={{ textDecoration: "none", color: "#FFFFFF" }} >
              <i class="material-icons">notes</i>
            </Button>
            <Modal isOpen={this.state.isActive} onRequestClose={this.toggleModal}>
            <button onClick={this.toggleModal}><i class="material-icons">cancel</i></button>

            <form action="/action_page.php">
            <div class="container">
            <h1>Register</h1>
            <p>Please fill in this form to create an account.</p>
            <hr/>

           



           
            <input class="input-field" type="text" placeholder="Username" name="usrnm" />
                     <hr></hr>
            <input class="input-field" type="text" placeholder="Email" name="email" />
                    <hr></hr>
            <input class="input-field" type="password" placeholder="Password" name="psw" />
                    <hr></hr>
            <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

            <button type="submit" class="registerbtn">Register</button>
           
                    
           </div>
  
           <div class="container signin">
           <p>Already have an account? <a href="#">Sign in</a>.</p>
           </div>
           
           </form>
            </Modal>

              </Nav>
            </div>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default Header;