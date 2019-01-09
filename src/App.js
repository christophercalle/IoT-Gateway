import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Button} from 'reactstrap';
import { render } from "react-dom";
import { faChartArea, faMap, faTachometerAlt, faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Icons from '../src/components/icons';
import Dropnav from '../src/components/dropnav';
import {Chart1} from './components/chart1';
import {Chart2} from './components/chart2';



class App extends Component {
  
  render() {
    return (
      <div>
        <Dropnav />
        {/* <Chart1 /> */}
        {/* <Chart2 /> */}
        {/* <Chart3 /> */}
        {/* <Chart4 /> */}
        <Icons />
      </div>
    )
  }
}

export default App;







