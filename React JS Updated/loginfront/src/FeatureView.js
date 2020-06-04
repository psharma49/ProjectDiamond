import React, { Component } from "react";
import DataService from "./DataService";
import ProductView1 from "./ProductView1";

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

  render() {
    return (
      <div>
        <ProductView1 />
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
            <td className="tabledata">{(item.commercial===0) ? "NA" : item.commercial} {item.um_com}</td>
            <td className="tabledata">{(item.market===0) ? "NA" : item.market} {item.um_markrt}</td>
            <td className="tabledata">{(item.efficiency===0) ? "NA" : item.efficiency} {item.um_eff}</td>
            <td className="tabledata">{(item.customer_value===0) ? "NA" : item.customer_value} {item.um_cv}</td>
            <td className="tabledata">{(item.future_trends===0) ? "NA" : item.future_trends} {item.um_ft}</td>
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
              this.OnSubmit(
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
              this.OntoFeatureView(
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
              <li className="itemvel">{item.vel}</li>
            ))}
          </ul>
        </div>
        <div className="Ttv">
          <ul>
            <li className="ttvheader">
              <strong>Avg TTV</strong>
            </li>
            {this.state.AvgTtvDataForRep.map((item) => (
              <li className="itemttv">{item.ttv}</li>
            ))}
          </ul>
        </div>
        {/* {this.state.FeatureDataForRep.forEach(function(item){
    if(this.state.Features.length===0)
    {
      this.setState({Features: (item.feature_name)});
      <tr>
        <td>
         {this.state.Features[this.state.Features.length-1].feature_name}
        </td>
        {this.state.FeatureDataForRep.forEach(function(it){
          if(it.feature_name===this.state.Features[this.state.Features.length-1])
          {
            if(it.feature_name==='Commercial')
            {
             <td>
               {it.business_value} - {it.unit_of_measurement}
             </td>
            }
            else
            {
              <td>
               NA
             </td>
            }
            if(it.feature_name==='Market')
            {
             <td>
               {it.business_value} - {it.unit_of_measurement}
             </td>
            }
            else
            {
              <td>
               NA
             </td>
            }
            if(it.feature_name==='Efficiency')
            {
             <td>
               {it.business_value} - {it.unit_of_measurement}
             </td>
            }
            else
            {
              <td>
               NA
             </td>
            }
            if(it.feature_name==='Customer Value')
            {
             <td>
               {it.business_value} - {it.unit_of_measurement}
             </td>
            }
            else
            {
              <td>
               NA
             </td>
            }
            if(it.feature_name==='Future Trends')
            {
             <td>
               {it.business_value} - {it.unit_of_measurement}
             </td>
            }
            else
            {
              <td>
               NA
             </td>
            }
          }
        }
        )}
      </tr>
    }
    else if(this.state.Features[this.state.Features.length-1]!=item.feature_name)
    {
      this.setState({Features: this.state.Features.push(item.feature_name)});
      <tr>
        <td>
         {this.state.Features[this.state.Features.length-1].feature_name}
        </td>
        {this.state.FeatureDataForRep.forEach(function(it){
          if(it.feature_name===this.state.Features[this.state.Features.length-1])
          {
            if(it.feature_name==='Commercial')
            {
             <td>
               {it.business_value} - {it.unit_of_measurement}
             </td>
            }
            else
            {
              <td>
               NA
             </td>
            }
            if(it.feature_name==='Market')
            {
             <td>
               {it.business_value} - {it.unit_of_measurement}
             </td>
            }
            else
            {
              <td>
               NA
             </td>
            }
            if(it.feature_name==='Efficiency')
            {
             <td>
               {it.business_value} - {it.unit_of_measurement}
             </td>
            }
            else
            {
              <td>
               NA
             </td>
            }
            if(it.feature_name==='Customer Value')
            {
             <td>
               {it.business_value} - {it.unit_of_measurement}
             </td>
            }
            else
            {
              <td>
               NA
             </td>
            }
            if(it.feature_name==='Future Trends')
            {
             <td>
               {it.business_value} - {it.unit_of_measurement}
             </td>
            }
            else
            {
              <td>
               NA
             </td>
            }
          }
        }
        )}
      </tr>
    }
    


    

  })} */}

        {/* <div class="colm">
          <ul class="feature">
            <li class="header">Features</li>
            <li>
              <strong>Feature 1</strong>{" "}
            </li>
            <li>
              <strong>Feature 2</strong>
            </li>
            <li>
              <strong>Feature 3</strong>{" "}
            </li>
            <li>
              <strong>Feature 4</strong>{" "}
            </li>
          </ul>
        </div>

        <div class="colm">
          <ul class="common">
            <li class="header">Commercial</li>
            <li>
              <strong>$ 5.99</strong> / Month
            </li>
            <li>
              <strong>20GB</strong> Disk{" "}
            </li>
            <li>
              <strong>10GB</strong> Data
            </li>
            <li>
              <strong>2</strong> Domains
            </li>
          </ul>
        </div>

        <div class="colm">
          <ul class="common">
            <li class="header">Market</li>
            <li>
              <strong>$ 15.99</strong> / Month
            </li>
            <li>
              <strong>75GB</strong> Disk{" "}
            </li>
            <li>
              <strong>50GB</strong> Data{" "}
            </li>
            <li>
              <strong>10</strong> Domains
            </li>
          </ul>
        </div>

        <div class="colm">
          <ul class="common">
            <li class="header">Efficiency</li>
            <li>
              <strong>$ 25.99</strong> / Month
            </li>
            <li>
              <strong>120GB</strong> Disk
            </li>
            <li>
              <strong>100GB</strong> Data{" "}
            </li>
            <li>
              <strong>Unlimited</strong> D
            </li>
          </ul>
        </div>

        <div class="colm">
          <ul class="common">
            <li class="header">Customer</li>
            <li>
              <strong>$ 5.99</strong> / Month
            </li>
            <li>
              <strong>20GB</strong> Disk{" "}
            </li>
            <li>
              <strong>10GB</strong> Data
            </li>
            <li>
              <strong>2</strong> Domains
            </li>
          </ul>
        </div>

        <div class="colm">
          <ul class="common">
            <li class="header">Future</li>
            <li>
              <strong>$ 15.99</strong> / Month
            </li>
            <li>
              <strong>75GB</strong> Disk{" "}
            </li>
            <li>
              <strong>50GB</strong> Data{" "}
            </li>
            <li>
              <strong>10</strong> Domains
            </li>
          </ul>
        </div> */}
      </div>
    );
  }
}

export default FeatureView;
