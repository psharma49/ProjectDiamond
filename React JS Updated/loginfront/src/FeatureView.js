import React, { Component } from "react";
import DataService from "./DataService";
import ProductView1 from "./ProductView1";
import ProductView2 from "./ProductView2";

class FeatureView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedLOB: this.props.match.params.selectedLOB,
      selectedPortfolio: this.props.match.params.selectedPortfolio,
      selectedProduct: this.props.match.params.selectedProduct,
      selectedYear: this.props.match.params.selectedYear,
      selectedQuarter: this.props.match.params.selectedQuarter,
      AvgTtvDataForRep: [],
      Features: [],
      FeatureDataForRep: [],
    };
  }
  componentDidMount() {
    this.loadData3();
    this.loadData4();
  }
  loadData4() {
    DataService.OnFeatureViewButton(
      this.state.selectedLOB,
      this.state.selectedPortfolio,
      this.state.selectedProduct,
      this.state.selectedYear,
      this.state.selectedQuarter
    )
      .then((response) => {
        this.setState({ FeatureDataForRep: response.data });
        console.log(this.state.FeatureDataForRep);
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMsg: "Error retrieving Feature Data" });
      });
  }
  loadData3() {
    DataService.AvgTtvData(
      this.state.selectedLOB,
      this.state.selectedPortfolio,
      this.state.selectedProduct,
      this.state.selectedYear,
      this.state.selectedQuarter
    )
      .then((response) => {
        this.setState({ AvgTtvDataForRep: response.data });
        console.log(this.state.AvgTtvDataForRep);
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMsg: "Error retrieving Final Data" });
      });
  }
  OnAggreView( 
    selectedLOB,
    selectedPortfolio,
    selectedProduct,
    selectedYear,
    selectedQuarter){
      this.props.history.push(
        `/ProductView2/${selectedLOB}/${selectedPortfolio}/${selectedProduct}/${selectedYear}/${selectedQuarter}`
      );
  }
  OnFeatureView(selectedLOB,
    selectedPortfolio,
    selectedProduct,
    selectedYear,
    selectedQuarter){
      this.props.history.push(
        `/FeatureView/${selectedLOB}/${selectedPortfolio}/${selectedProduct}/${selectedYear}/${selectedQuarter}`
      );
    }

  render() {
   
    return (
      <div>
        <ProductView1/>
        <div className="tableu">
        <table className="table">
          <thead>
            <tr>
              <th className="tableheadersgrey">Features</th>
              <th className="tableheaders">Commercial</th>
              <th className="tableheaders">Market</th>
              <th className="tableheaders">Efficiency</th>
              <th className="tableheaders">Customer</th>
              <th className="tableheaders">Future</th>
            </tr>
          </thead>
          <tbody className="scroll">
            {this.state.FeatureDataForRep.map((item) => (
              <tr>
                <td className="tablegrey">{item.feature_name}</td>
            <td className="tabledata">{(item.commercial===0) ? "NA" : <strong>{item.commercial}</strong>} {item.um_comm}</td>
            <td className="tabledata">{(item.market===0) ? "NA" :<strong>{item.market}</strong>} {item.um_markrt}</td>
            <td className="tabledata">{(item.efficiency===0) ? "NA" : <strong>{item.efficiency} </strong>}{item.um_eff}</td>
            <td className="tabledata">{(item.customer_value===0 ) ? "NA" : <strong>{item.customer_value} </strong>}{(item.customer_value===0 || item.um_cv==="Number") ? "" : `${item.um_cv}`} </td>
            <td className="tabledata">{(item.future_trends===0) ? "NA" : <strong>{item.future_trends}</strong>} {item.um_ft}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>

        <div className="ToggleView">
          Toggle View
          <button
            className="Aggr"
            name="Aggregate"
            onClick={() =>
              this.OnAggreView(
                this.state.selectedLOB,
                this.state.selectedPortfolio,
                this.state.selectedProduct,
                this.state.selectedYear,
                this.state.selectedQuarter
              )
            }
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
        <div className="Vel">
          <ul>
            <li className="velocityheader">
              <strong>Avg Velocity</strong>
            </li>
            {this.state.AvgTtvDataForRep.map((item) => (
              <li className="itemvel">{item.vel.toFixed(2)}</li>
            ))}
          </ul>
        </div>
        <div className="Ttv">
          <ul>
            <li className="ttvheader">
              <strong>Avg TTV</strong>
            </li>
            {this.state.AvgTtvDataForRep.map((item) => (
              <li className="itemttv">{item.ttv.toFixed(2)}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default FeatureView;
