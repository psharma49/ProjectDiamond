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
      Features: [],
      FeatureDataForRep: [],
    };
  }
  componentDidMount() {
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
  render() {
    return (
      <div>
        <ProductView1/>
        <table>
  <tr>
    <th>Features</th>
    <th>Commercial</th>
    <th>Market</th>
    <th>Efficiency</th>
    <th>Customer</th>
    <th>Future</th>
  </tr>
  {this.state.FeatureDataForRep.forEach(function(item){
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
    


    

  })}
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  
</table>
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
