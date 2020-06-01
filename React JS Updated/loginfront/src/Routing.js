import React, { Component } from 'react'
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PLDV from "./PLDV";
import UploadData from "./UploadData";
import PLDV2 from "./PLDV2";


class Routing extends Component {
    render() {
        return (
            <div>
                <Router>
                <Switch>
                 <Route exact path="/PLDV" component={PLDV}/>
                 <Route exact path="/UploadData" component={UploadData}/>
                 <Route exact path="/PLDV2" component={PLDV2}/>
                </Switch>
              </Router>
                
            </div>
        )
    }
}

export default Routing;
