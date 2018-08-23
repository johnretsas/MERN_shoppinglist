import React, { Component } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
}
    from 'reactstrap';

export class AppNavBar extends Component {
    state = {
        isOpen: false
    }
    componentDidMount() {
        console.log(this.props)
    }

    toggle = () => {
            this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (
            <div>
                <Navbar color= "dark" dark expand="sm" className="mb-5">
                <Container>
                    <NavbarBrand href="/"> Shopping List </NavbarBrand>
                    <NavbarToggler onClick= {this.toggle} />
                    <Collapse isOpen = {this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="https://github.com/johnretsas" >
                            Github
                            </NavLink>
                        </NavItem>
                    </Nav>
                    </Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default AppNavBar
