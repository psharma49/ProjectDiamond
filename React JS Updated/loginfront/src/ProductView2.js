import React, { Component } from "react";
import DataService from "./DataService";
import ProductView1 from "./ProductView1";

class ProductView2 extends Component {
  
    constructor(props) {
        super(props)
    
        this.state = {
             selectedLOB: this.props.match.params.selectedLOB,
             selectedPortfolio: this.props.match.params.selectedPortfolio,
             selectedProduct: this.props.match.params.selectedProduct,
             FinalDataForRep: [],
        }
    }

    componentDidMount() {
             DataService.Onsubmitting(this.state.selectedLOB,this.state.selectedPortfolio,this.state.selectedProduct)
               .then((response) => {
                //  console.log(response);
                 this.setState({ FinalDataForRep: response.data });
                 console.log(this.state.FinalDataForRep);
               })
               .catch((error) => {
                 console.log(error);
                 this.setState({ errorMsg: "Error retrieving Final Data" });
               });
            }

  render() {
    return (
      <div>
        <ProductView1/>;
        <div class="col">
          <ul class="comm">
            <li class="header">
              <strong>Commercial</strong>
            </li>
            {this.state.FinalDataForRep.map(item => 
                 item.kpi_name==='Commercial'?  (<li>{item.kpi_subcategory_name}-${item.sum}/years </li>) : ''
            )}

            {/* <li class="MRKPI">
              <strong>$ 5.99</strong> / Month
            </li>
            <li>
              <strong>20GB</strong> Disk Space
            </li>
            <li>
              <strong>10GB</strong> Data Transfer
            </li>
            <li>
              <strong>2</strong> Domains
            </li> */}
          </ul>
        </div>

        <div class="col">
          <ul class="mark">
            <li class="header header-green">
              <strong>Market</strong>
            </li>
            {this.state.FinalDataForRep.map(item => 
                 item.kpi_name==='Market'&& item.unit_of_measurement==='Percent' ?(<li>{item.kpi_subcategory_name}-{item.avg}%/year</li>) : ''
    
            )}
            {/* <li class="MRKPI">
              <strong>$ 15.99</strong> / Month
            </li>
            <li>
              <strong>75GB</strong> Disk Space
            </li>
            <li>
              <strong>50GB</strong> Data Transfer
            </li>
            <li>
              <strong>10</strong> Domains
            </li> */}
          </ul>
        </div>

        <div class="col">
          <ul class="effi">
            <li class="header">
              <strong>Efficiency</strong>
            </li>
            {this.state.FinalDataForRep.map(item => 
                 item.kpi_name==='Efficiency' && item.unit_of_measurement==='Hours'?  (<li>{item.kpi_subcategory_name}-{item.sum}Hours/years </li>) : ''
            )}
            {/* <li class="MRKPI">
              <strong>$ 25.99</strong> / Month
            </li>
            <li>
              <strong>120GB</strong> Disk Space
            </li>
            <li>
              <strong>100GB</strong> Data Transfer
            </li>
            <li>
              <strong>Unlimited</strong> Domains
            </li> */}
          </ul>
        </div>

        <div class="col">
          <ul class="cust">
            <li class="header">
              <strong>Customer</strong>
            </li>
            {this.state.FinalDataForRep.map(item => 
                 item.kpi_name==='Customer' && item.unit_of_measurement==='Percent' ?  (<li>{item.kpi_subcategory_name}-{item.avg}Hours/years </li>) : ''
            )}
            {/* <li class="MRKPI">
              <strong>$ 5.99</strong> / Month
            </li>
            <li>
              <strong>20GB</strong> Disk Space
            </li>
            <li>
              <strong>10GB</strong> Data Transfer
            </li>
            <li>
              <strong>2</strong> Domains
            </li> */}
          </ul>
        </div>

        <div class="col">
          <ul class="futu">
            <li class="header header-green">
              <strong>Future</strong>
            </li>
            {this.state.FinalDataForRep.map(item => 
                 item.kpi_name==='Future' && item.unit_of_measurement==='Percent' ?  (<li>{item.kpi_subcategory_name}-{item.avg}Hours/years </li>) : ''
            )}
            {/* <li class="MRKPI">
              <strong>$ 15.99</strong> / Month
            </li>
            <li>
              <strong>75GB</strong> Disk Space
            </li>
            <li>
              <strong>50GB</strong> Data Transfer
            </li>
            <li>
              <strong>10</strong> Domains
            </li> */}
          </ul>
        </div>
      </div>
    );
  }
}
export default ProductView2;
