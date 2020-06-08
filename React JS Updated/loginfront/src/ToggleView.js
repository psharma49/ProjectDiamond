import React, { Component } from "react";
import Dashboard from "./Dashboard";

class ToggleView extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

render() {
    return (
      <div>
        <div className="ToggleView">
          <strong>Toggle View</strong>
          <button
            className="Aggr"
            name="Aggregate"
            onClick={this.props.onSubmit}
          >
            Aggregate
          </button>
          <button
            name="Feature"
            className="FeatureLevel"
            onClick={() =>
              this.OnFeatureView(
                this.state.selectedLOB,
                this.state.selectedPortfolio,
                this.state.selectedProduct,
                this.state.selectedYear,
                this.state.selectedQuarter,
                this.state.AvgTtvDataForRep
              )
            }
          >
            Feature level
          </button>
        </div>
        <div className="avgttvviews">
          <div className="Vel">
            <ul>
              <li className="velocityheader">
                <strong>Avg Velocity</strong>
              </li>
              {this.props.AvgTtvDataForRep.map((item) => (
                <li className="itemvel">{item.vel.toFixed(2)}</li>
              ))}
            </ul>
          </div>
          <div className="Ttv">
            <ul>
              <li className="ttvheader">
                <strong>Avg TTV</strong>
              </li>
              {this.props.AvgTtvDataForRep.map((item) => (
                <li className="itemttv">{item.ttv.toFixed(2)}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default ToggleView;
