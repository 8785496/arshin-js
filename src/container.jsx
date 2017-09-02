import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from "./header.jsx";
import Aside from "./aside.jsx";
import Footer from "./footer.jsx";
import VisitorTable from './visitor-table.jsx';
import EmailTable from "./email-table.jsx";
import RequestTable from "./request-table.jsx";

export default class Container extends Component {
  constructor() {
    super();
    this.state = {
      showAside: true
    }
  }

  toggleAside() {
    let showAside = !this.state.showAside;
    this.setState({showAside});
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