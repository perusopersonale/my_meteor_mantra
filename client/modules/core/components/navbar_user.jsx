import React from 'react'
import { AppLoading } from '/client/configs/components'
import {
  Nav,
  NavDropdown,
  NavItem,
  MenuItem,
} from 'react-bootstrap'

class NavbarUser extends React.Component {

  displayUser() {
    const { email, username } = this.props
    return(
      <Nav pullRight>
        <NavDropdown eventKey={1} title={ email }>
          <MenuItem eventKey={1.1} onClick={ this._logout.bind( this ) }>Log Out</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={1.2} href={ FlowRouter.path( `/user/${username}/preferences` ) }>Preferences</MenuItem>
        </NavDropdown>
      </Nav>
    )
  }

  displayGuest() {
    return(
      <Nav pullRight>
        <NavItem eventKey={1} href="/login">LOGIN</NavItem>
        <NavItem eventKey={2} href="/register">SIGN UP</NavItem>
      </Nav>
    )
  }

  displayLoading() {
    return(
      <AppLoading />
    )
  }

  render() {
    const { loggedIn, loggingIn } = this.props

    if ( loggingIn ) { return this.displayLoading() }

    if ( loggedIn ) {
      return this.displayUser()
    } else {
      return this.displayGuest()
    }

  }

  _logout( event ) {
    event.preventDefault()
    const { logout } = this.props
    logout()
  }
}

export default NavbarUser
