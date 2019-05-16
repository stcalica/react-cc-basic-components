import React, { Component } from 'react'
import './BasicNavBar.css'
import 'font-awesome/css/font-awesome.min.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

export class NavBar extends Component {
  constructor(props) {
      super(props);
      this.state = {
        hidden: false
      };
  }

 toggleNav = (e) => {
    e.preventDefault();
    this.setState({
      hidden: !this.state.hidden
    });
  };

  render(){
    console.log(this.props.links)
    return(
      <nav className="navbar">
          <span className="nav-bar-toggle" id="js-navbar-toggle" onClick={this.toggleNav} >
            <span className="nav-bar-toggle" id="js-navbar-toggle">
              <i className="fa fa-bars"></i>
            </span>
          </span>
          {
            this.props.logo ?  <a href="#" className="logo"><img src={ this.props.logo } alt="logo" /></a>  : <a href="#"></a>
          }
            <ul id="main-nav" className={ this.state.hidden ? 'active' : 'hidden' }>
          { this.props.links ? (
            Object.keys(this.props.links).map(key =>
                 <li className={ this.state.hidden ? 'active' : 'hidden' }><Link to={ this.props.links[key] } className="nav-links">{ key }</Link></li>
              )
          ) : (
              <li></li>
            )
          }
            </ul>
      </nav>

    )
  }
}
