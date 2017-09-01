import React, {Component} from 'react';

export default class Aside extends Component {
    render() {
        return(
            <aside>
                <div id="sidebar" class={this.props.showAside ? 'nav-collapse' : 'nav-collapse hide-left-bar'}>
                    <div class="leftside-navigation">
                        <ul class="sidebar-menu" id="nav-accordion">
                            <li class="sub-menu">
                                <a href="javascript:;">
                                    <i class="fa fa-th"></i>
                                    <span>Посетители сегодня</span>
                                </a>
                            </li>
                            <li class="sub-menu">
                                <a href="javascript:;">
                                    <i class="fa fa-th"></i>
                                    <span>Посетители вчера</span>
                                </a>
                            </li>
                            <li class="sub-menu">
                                <a href="javascript:;">
                                    <i class="fa fa-tasks"></i>
                                    <span>Заявки</span>
                                </a>
                            </li>
                            <li class="sub-menu">
                                <a href="javascript:;">
                                    <i class="fa fa-envelope"></i>
                                    <span>Почта</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </aside>
        );
    }
}