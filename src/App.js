import React, { Component } from 'react';
import './assets/css/App.css';
import Header from './components/Header'
import Home from './views/Home';
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import SearchPage from "./views/SearchPage"


class App extends Component {
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
                            <Home />  
                        </Route>
                    </Switch>
                    <Footer />
                </Router>
            </div>
        );
    }
}

export default App
