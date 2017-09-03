import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'

import Header from "./header.jsx";
import Aside from "./aside.jsx";
import Footer from "./footer.jsx";
import VisitorTable from './visitor-table.jsx';
import EmailTable from "./email-table.jsx";
import RequestTable from "./request-table.jsx";

import toggleAside from './actions/ui-actions';

@connect(
  store => {
    return {
      showAside: store.UISettings.showAside
    }
  },
  dispatch => {
    return {
      toggleAside: bindActionCreators(toggleAside, dispatch)
    }
  }
)
export default class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAside: true
    }
    //this.toggleAside = this.toggleAside.bind(this);
  }

  toggleAside() {
    //
    debugger
    this.props.toggleAside();
  }

  render() {
    return (
      <Router>
        <div>
          <Header toggleAside={this.toggleAside.bind(this)}/>
          <Aside showAside={this.state.showAside}/>
          <section id="main-content" class={this.state.showAside ? '' : 'merge-left'}>
            <section class="wrapper">
              <Route exact path="/admin/emails" component={EmailTable}/>
              <Route exact path="/admin/requests" component={RequestTable}/>
              <Route exact path="/admin/yesterday" component={() => (<div>Not implement</div>)}/>
              <Route exact path="/admin" component={VisitorTable}/>
            </section>
            <Footer/>
          </section>
        </div>
      </Router>
    )
  }
}