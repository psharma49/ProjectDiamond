import React, { Component } from "react";
import DataService from "./DataService";
import ProductView1 from "./ProductView1";

class ProductView2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedLOB: this.props.match.params.selectedLOB,
      selectedPortfolio: this.props.match.params.selectedPortfolio,
      selectedProduct: this.props.match.params.selectedProduct,
      selectedYear: this.props.match.params.selectedYear,
      selectedQuarter: this.props.match.params.selectedQuarter,
      FinalDataForRep: [],
      AvgTtvDataForRep: [],
    };
    this.loadData1 = this.loadData1.bind(this);
    this.OnSubmit = this.OnSubmit.bind(this);
    this.OntoFeatureView = this.OntoFeatureView.bind(this);
    this.loadData2 = this.loadData2.bind(this);
    this.loadData1 = this.loadData1.bind(this);
  }

  componentDidMount() {
    this.loadData1();
    this.loadData2();
  }
  loadData1() {
    DataService.Onsubmitting(
      this.state.selectedLOB,
      this.state.selectedPortfolio,
      this.state.selectedProduct,
      this.state.selectedYear,
      this.state.selectedQuarter
    )
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
  loadData2() {
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
        console.log(this.state.AvgTtvDataForRep);
        console.log(this.state.AvgTtvDataForRep);
        console.log(this.state.AvgTtvDataForRep);
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMsg: "Error retrieving Final Data" });
      });
      
  }
  OnSubmit(selectedLOB, selectedPortfolio, selectedProduct,selectedYear,selectedQuarter) {
    this.props.history.push(
      `/ProductView2/${selectedLOB}/${selectedPortfolio}/${selectedProduct}/${selectedYear}/${selectedQuarter}`
    );
  }
  OntoFeatureView(selectedLOB, selectedPortfolio, selectedProduct,selectedYear,selectedQuarter,AvgTtvDataForRep) {
    this.props.history.push(
      `/FeatureView/${selectedLOB}/${selectedPortfolio}/${selectedProduct}/${selectedYear}/${selectedQuarter}/${AvgTtvDataForRep}`
    );
  }

  render() {
    return (
      <div>
        <ProductView1 />;
        <div>
        <div class="col">
          <ul class="comm">
            <li class="header">
              <strong>Commercial</strong>
            </li>
            {this.state.FinalDataForRep.map((item) =>
              item.kpi_name === "Commercial" ? (
                <li>
                  {item.kpi_subcategory_name} - ${item.sum}
                  {item.unit_of_measurement}/years{" "}
                </li>
              ) : (
                ""
              )
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
            {this.state.FinalDataForRep.map((item) =>
              item.kpi_name === "Market" &&
              item.unit_of_measurement === "Percentage" ? (
                <li>
                  {item.kpi_subcategory_name} - {item.avg}%/year
                </li>
              ) : (
                ""
              )
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
            {this.state.FinalDataForRep.map((item) =>
              item.kpi_name === "Efficiency" ? (
                <li>
                  {item.kpi_subcategory_name} - {item.sum}
                  {item.unit_of_measurement}/years{" "}
                </li>
              ) : (
                ""
              )
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
            {this.state.FinalDataForRep.map((item) =>
              item.kpi_name === "Customer Value" 
              ? (
                <li>
                  {item.kpi_subcategory_name} - {item.avg}
                  {item.unit_of_measurement}/years{" "}
                </li>
              ) : (
                ""
              )
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
            {this.state.FinalDataForRep.map((item) =>
              item.kpi_name === "Future Trends" ? (
                <li>
                  {item.kpi_subcategory_name} - {item.avg}Hours/years{" "}
                </li>
              ) : (
                ""
              )
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
      </div>
    );
  }
}
export default ProductView2;
