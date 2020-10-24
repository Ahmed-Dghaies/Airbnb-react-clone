import React, { Component } from 'react';
import './assets/css/App.css';
import Header from './components/Header'
import Home from './views/Home';
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import SearchPage from "./views/SearchPage"
import { createClient } from "contentful";


var client = createClient({
    space: "pq6avf9tau1w",
    accessToken: "tYA1uPufz3L_mvNfaRAju3k33iH6VdsdcdMVI4i2mPY"
});

class App extends Component {
    constructor() {
        super();
        this.state = {
          experiences: [],
          houses: []
        };
    }
    componentDidMount() {
        client.getEntries({content_type: 'booked'}).then(({ items }) => {
            console.log(items);
            this.setState({ experiences: items });
        });
        client.getEntries({content_type: 'house'}).then(({ items }) => {
            console.log(items);
            this.setState({ houses: items });
        });
    }
    render () {
        return ( 
            <div className = "app">
                <Router>
                    <Header />
                    <Switch>
                        <Route path="/search">
                            <SearchPage />
                        </Route>
                        <Route path="/">
                            <Home experiences={this.state.experiences} houses={this.state.houses}/>  
                        </Route>
                    </Switch>
                    <Footer />
                </Router>
            </div>
        );
    }
}

export default App
