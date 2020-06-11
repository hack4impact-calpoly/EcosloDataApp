
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import Home from './Pages/Home';
import AddEvent from './Pages/AddEvent';
import Update from './Pages/Update';
import View from './Pages/View';
import Login from './Pages/Login';
import AlterTable from './Pages/AlterTable'; 
import Footer from './Components/footer';
import { Provider } from "react-redux";
import store from "./redux/reducers/store";
import APIWrapper from "./APIs/APIWrapper";
import {
    Route,
    BrowserRouter as Router,
    Switch
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './styles/stickyFooter.css';
import Header from "./Components/header.js";


const apiWrapper = new APIWrapper(store);

const routing = (
    <div className = "Site" style={{backgroundColor: '#f4f8fa'}}>
    <Provider store={store}>
        <Router>
            <Header />
            <div className="Site-content">
            <Switch >
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/register">
                    <App />
                </Route>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/add">
                    <AddEvent apiWrapper={apiWrapper} />
                </Route>
                <Route path="/view">
                    <View apiWrapper={apiWrapper} />
                </Route>
                <Route path="/update">
                    <Update apiWrapper={apiWrapper} />
                </Route>
                <Route path="/alter">
                    <AlterTable apiWrapper={apiWrapper}/>
                </Route>
            </Switch>
            </ div>
            <Footer />
        </Router>  
    </Provider>
    </div>
);

ReactDOM.render(routing, document.getElementById('root'));
