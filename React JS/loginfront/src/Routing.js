import React, { Component } from 'react'
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DbEleven from "./PLDV";


class Routing extends Component {
    render() {
        return (
            <div>
                <Router>
                <>
                <Switch>
                 <Route path="/PLDV" component={PLDV}/>
                 <Route path="/UploadData" component={UploadData}/>
                </Switch>
                </>
              </Router>
                
            </div>
        )
    }
}

export default Routing;
