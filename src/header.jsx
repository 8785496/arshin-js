import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {toggleAside} from './actions';

@connect()
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.toggleAside = bindActionCreators(toggleAside, this.props.dispatch)
  }

  render() {
    return (
      <header class="header fixed-top clearfix">
        <div class="brand">
          <a href="index.html" class="logo">
            ARSHIN
          </a>
          <div class="sidebar-toggle-box">
            <div class="fa fa-bars" onClick={this.toggleAside}></div>
          </div>
        </div>
        <div class="nav notify-row" id="top_menu">
          <ul class="nav top-menu">
            <li class="dropdown">
              <Link data-toggle="dropdown" class="dropdown-toggle" to="/admin/requests">
                <i class="fa fa-tasks"></i>
                <span class="badge bg-success">8</span>
              </Link>
            </li>
            <li id="header_inbox_bar" class="dropdown">
              <Link data-toggle="dropdown" class="dropdown-toggle" to="/admin/emails">
                <i class="fa fa-envelope-o"></i>
                <span class="badge bg-important">4</span>
              </Link>
            </li>
          </ul>
        </div>
        <div class="top-nav clearfix">
          <ul class="nav pull-right top-menu">
            <li class="dropdown">
              <a data-toggle="dropdown" class="dropdown-toggle" href="#">
                <span class="username">John Doe</span>
                <b class="caret"></b>
              </a>
              <ul class="dropdown-menu extended logout">
                <li><a href="#"><i class=" fa fa-suitcase"></i>Profile</a></li>
                <li><a href="#"><i class="fa fa-cog"></i> Settings</a></li>
                <li><a href="login.html"><i class="fa fa-key"></i> Log Out</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </header>
    );
  };
}