import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';


class Dropnav extends Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div className="nav-container">
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto">TIMBERGROVE</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">Dashboard1</NavLink>
              </NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">Dashboard2</NavLink>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">Dashboard3</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">Dashboard4</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Dropnav;