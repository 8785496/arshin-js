import React from 'react';
import axios from 'axios';

export default class RequestTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      requests: []
    };
  }

  componentWillMount() {
    axios.get('/api/requests').then((response) => {
      const requests = response.data.map(request => {
        // let d = new Date(request.time);
        let time = new Date(request.time).toLocaleString();
        return(
          <tr key={request.id}>
            <td>{request.id}</td>
            <td>{time}</td>
            <td>{request.target}</td>
            <td>{request.name}</td>
            <td>{request.phone}</td>
            <td>{request.type_object}</td>
            <td>{request.type_work}</td>
          </tr>
        );
      });
      this.setState({requests});
    });
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
                {this.state.requests}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };
}
