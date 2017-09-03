import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {getOS, getBrowser} from './helper';
import {fetchVisitors} from "./actions/visitor";

@connect(
  store => ({
    visitors: store.visitors
  }),
  dispatch => ({
    fetchVisitors: bindActionCreators(fetchVisitors, dispatch)
  })
)
export default class VisitorTable extends Component {
  constructor(props) {
    super(props);
    this.props.fetchVisitors();
  }

  render() {
    return (
      <div class="table-agile-info">
        <div class="panel panel-default">
          <div class="panel-heading">
            Посетители сегодня
          </div>
          <div>
            <table class="table">
              <thead>
              <tr>
                <th>ID</th>
                <th>IP</th>
                <th>URL</th>
                <th>ОС, браузер</th>
                <th>Referer</th>
                <th>Время</th>
                <th>Местоположение</th>
              </tr>
              </thead>
              <tbody>
              {this.props.visitors.map(visitor => <tr key={visitor.id}>
                <td>{visitor.id}</td>
                <td>{visitor.ip}</td>
                <td>{visitor.uri}</td>
                <td>{getOS(visitor.agent) + ', ' + getBrowser(visitor.agent)}</td>
                {visitor.referer && visitor.referer.length > 40
                  ? <td title={visitor.referer}>{visitor.referer.substr(0, 37) + '...'}</td>
                  : <td>{visitor.referer}</td>}
                <td>{new Date(visitor.time).toLocaleTimeString()}</td>
                <td>{visitor.location}</td>
              </tr>)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };
}