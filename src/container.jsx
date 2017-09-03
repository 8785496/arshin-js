import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';

import Header from "./header.jsx";
import Aside from "./aside.jsx";
import Footer from "./footer.jsx";
import VisitorTable from './visitor-table.jsx';
import EmailTable from "./email-table.jsx";
import RequestTable from "./request-table.jsx";

@connect(store => ({showAside: store.UISettings.showAside}))
export default class Container extends Component {
  constructor(props) {
    super(props);
    this.toggleAside = this.toggleAside.bind(this);
  }

  toggleAside() {
    this.props.toggleAside();
  }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Aside showAside={this.props.showAside} />
          <section id="main-content" class={this.props.showAside ? '' : 'merge-left'}>
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