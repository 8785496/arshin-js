import React, {Component} from 'react';

import VisitorTable from './visitor-table.jsx';
import Header from "./header.jsx";
import Aside from "./aside.jsx";
import Footer from "./footer.jsx";

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
        return(
            <div>
                <Header toggleAside={this.toggleAside.bind(this)} />
                <Aside showAside={this.state.showAside}/>
                <section id="main-content" class={this.state.showAside ? '' : 'merge-left'}>
                    <VisitorTable />
                    <Footer />
                </section>
            </div>
        )
    }
}