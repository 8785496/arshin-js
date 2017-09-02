import React, {Component} from 'react';
import axios from 'axios';

export default class EmailTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emails: []
    };
  }

  componentWillMount() {
    axios.get('/api/emails').then((response) => {
      const emails = response.data.map(email => {
        let d = new Date(email.time);
        let time = d.toLocaleString();
        return(
          <tr key={email.id}>
            <td>{email.id}</td>
            <td>{time}</td>
            <td>{email.email}</td>
            <td>{email.name}</td>
            <td>{email.body}</td>
          </tr>
        );
      });
      this.setState({emails});
    });
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
                {this.state.emails}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };
}