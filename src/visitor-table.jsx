import React from 'react';
import axios from 'axios';

export default class VisitorTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visitors: []
        };
    }

    componentWillMount() {
        axios.get('/api/visitors').then((response) => {
            const visitors = response.data.map((visitor) => <tr key={visitor.id}>
                <td>{visitor.id}</td>
                <td>{visitor.ip}</td>
                <td>{visitor.uri}</td>
                <td>{visitor.agent}</td>
                <td>{visitor.referer}</td>
                <td>{visitor.time}</td>
                <td>{visitor.location}</td>
            </tr>);
            this.setState({visitors});
        });
    }

    render() {
        return(
            <section class="wrapper">
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
                                    {this.state.visitors}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        );
    };
}