import React, {Component} from 'react';

export default class Header extends Component {
    render() {
        return(
            <header class="header fixed-top clearfix">
                <div class="brand">
                    <a href="index.html" class="logo">
                        ARSHIN
                    </a>
                    <div class="sidebar-toggle-box">
                        <div class="fa fa-bars" onClick={this.props.toggleAside}></div>
                    </div>
                </div>
                <div class="nav notify-row" id="top_menu">
                    <ul class="nav top-menu">
                        <li class="dropdown">
                            <a data-toggle="dropdown" class="dropdown-toggle" href="#">
                                <i class="fa fa-tasks"></i>
                                <span class="badge bg-success">8</span>
                            </a>
                        </li>
                        <li id="header_inbox_bar" class="dropdown">
                            <a data-toggle="dropdown" class="dropdown-toggle" href="#">
                                <i class="fa fa-envelope-o"></i>
                                <span class="badge bg-important">4</span>
                            </a>
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