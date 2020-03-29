import React, {Component} from 'react';
import Navbar from "./components/Navbar";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import FakeApi from "./components/FakeApi";
import Post from "./components/Post";
import PostHome from "./components/PostHome";


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Navbar/>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/fakeapi' component={FakeApi}/>
                        <Route path='/about' component={About}/>
                        <Route path='/contact' component={Contact}/>
                        <Route path='/home/:post_id' component={PostHome}/>
                        <Route path='/:post_id' component={Post}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
