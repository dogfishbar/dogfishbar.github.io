import React from "react";
import styles from './App.css';
import { Label, Navbar, NavItem, Nav, Grid, Row, Col , Button} from "react-bootstrap";

export default class Header extends React.Component {

  constructor(props){
   super(props);
    this.state = {
      registers : this.props.registers,
    }
  }

  setRegisters(registers){
    this.setState({registers});
  }

  render(){
    return(

      <Navbar >
            <Navbar.Brand>
              CSCI 1103 Computer Science 1 Honors SVM WebApp
            </Navbar.Brand>
      </Navbar>


    )
  }
}
