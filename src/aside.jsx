import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class Aside extends Component {
  render() {
    return (
      <aside>
        <div id="sidebar" class={this.props.showAside ? 'nav-collapse' : 'nav-collapse hide-left-bar'}>
          <div class="leftside-navigation">
            <ul class="sidebar-menu" id="nav-accordion">
              <li class="sub-menu">
                <NavLink activeClassName="active" to="/admin" exact={true}>
                  <i class="fa fa-th"></i>
                  <span>Посетители сегодня</span>
                </NavLink>
              </li>
              <li class="sub-menu">
                <NavLink activeClassName="active" to="/admin/yesterday">
                  <i class="fa fa-th"></i>
                  <span>Посетители вчера</span>
                </NavLink>
              </li>
              <li class="sub-menu">
                <NavLink activeClassName="active" to="/admin/requests">
                  <i class="fa fa-tasks"></i>
                  <span>Заявки</span>
                </NavLink>
              </li>
              <li class="sub-menu">
                <NavLink activeClassName="active" to="/admin/emails">
                  <i class="fa fa-envelope"></i>
                  <span>Почта</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    );
  }
}