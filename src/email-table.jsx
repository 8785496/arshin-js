import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {fetchEmails} from './actions';

@connect(
  store => ({
    emails: store.emails
  }),
  dispatch => ({
    fetchEmails: bindActionCreators(fetchEmails, dispatch)
  })
)
export default class EmailTable extends Component {
  constructor(props) {
    super(props);
    this.props.fetchEmails();
  }

  render() {
    return(
      <div class="table-agile-info">
        <div class="panel panel-default">
          <div class="panel-heading">
            Письма
          </div>
          <div>
            <table class="table">
              <thead>
              <tr>
                <th>ID</th>
                <th>Дата</th>
                <th>E-mail</th>
                <th>Имя</th>
                <th>Сообщение</th>
              </tr>
              </thead>
              <tbody>
              {this.props.emails.map(email =>
                <tr key={email.id}>
                  <td>{email.id}</td>
                  <td>{new Date(email.time).toLocaleString()}</td>
                  <td>{email.email}</td>
                  <td>{email.name}</td>
                  <td>{email.body}</td>
                </tr>
              )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };
}