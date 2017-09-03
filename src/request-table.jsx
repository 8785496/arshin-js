import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {fetchRequest} from './actions';

@connect(
  store => ({
    requests: store.requests.list
  }),
  dispatch => ({
    fetchRequest: bindActionCreators(fetchRequest, dispatch)
  })
)
export default class RequestTable extends React.Component {
  constructor(props) {
    super(props);
    this.props.fetchRequest();
  }

  render() {
    return (
      <div class="table-agile-info">
        <div class="panel panel-default">
          <div class="panel-heading">
            Заявки
          </div>
          <div>
            <table class="table">
              <thead>
              <tr>
                <th>ID</th>
                <th>Дата</th>
                <th>Цель</th>
                <th>Имя</th>
                <th>Телефон</th>
                <th>Тип объекта</th>
                <th>Тип работ</th>
              </tr>
              </thead>
              <tbody>
              {this.props.requests.map(request =>
                  <tr key={request.id}>
                    <td>{request.id}</td>
                    <td>{new Date(request.time).toLocaleString()}</td>
                    <td>{request.target}</td>
                    <td>{request.name}</td>
                    <td>{request.phone}</td>
                    <td>{request.type_object}</td>
                    <td>{request.type_work}</td>
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
