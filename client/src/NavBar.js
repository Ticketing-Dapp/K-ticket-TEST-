import React, {Component} from 'react';
import './App.css'
import { Navbar, Nav, Form, FormControl, Button, Card, CardGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class NavBar extends Component{
    onClickTransaction=()=>{
        
    }
    render() {
      return (
        <div className="NavBar">
          <Navbar bg="dark" variant="dark">
            <Button variant="dark">K-Cookie</Button>{' '}
            <Button style={{
              position: "absolute",
              top: "8px",
              left: "200px",
            }}variant="dark">Home</Button>{' '}
            <Button style={{
              position: "absolute",
              top: "8px",
              left: "400px",
            }}variant="dark">Concert</Button>{' '}
            <Button style={{
              position: "absolute",
              top: "8px",
              left: "600px",
            }}variant="dark" onClick={this.onClickTransaction}>양도거래</Button>{' '}
            <Button style={{
                position: "absolute",
                top: "8px",
                left: "800px",
              }}variant="dark" >My page</Button>{' '}
            <input style={{
              position: "absolute",
              top: "12px",
              left: "1010px",
            }}type="text" placeholder="Search" />
            <Button style={{
              position: "absolute",
              top: "8px",
              right: "35px",
              height: "37px",
            }}variant="dark">🔍</Button>
  
          </Navbar>
        </div>
      );
    }
  }
  export default NavBar;