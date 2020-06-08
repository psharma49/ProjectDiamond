import React, { Component } from "react";
import DataService from "./DataService";
import ProductView1 from "./ProductView1";
import Imagess from "./imagess";

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
      HeaderDataForRep: [],
    };
    this.getDataForRep = this.getDataForRep.bind(this);
    this.OnSubmit = this.OnSubmit.bind(this);
    this.OntoFeatureView = this.OntoFeatureView.bind(this);
    this.getDataForAvgVelTtv = this.getDataForAvgVelTtv.bind(this);
    this.getDataForHeader = this.getDataForHeader.bind(this);
  }

  componentDidMount() {
    this.getDataForRep();
    this.getDataForAvgVelTtv();
    this.getDataForHeader();
  }
  getDataForHeader() {
    DataService.HeaderData(
      this.state.selectedLOB,
      this.state.selectedPortfolio,
      this.state.selectedProduct,
      this.state.selectedYear,
      this.state.selectedQuarter
    )
     .then((response) => {
      this.setState({ HeaderDataForRep: response.data });
      console.log(this.state.HeaderDataForRep);
    })
    .catch((error) => {
      console.log(error);
      this.setState({ errorMsg: "Error retrieving Final Data" });
    });

  }

  getDataForRep() {
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
  getDataForAvgVelTtv() {
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
  OnSubmit(
    selectedLOB,
    selectedPortfolio,
    selectedProduct,
    selectedYear,
    selectedQuarter
  ) {
    this.props.history.push(
      `/ProductView2/${selectedLOB}/${selectedPortfolio}/${selectedProduct}/${selectedYear}/${selectedQuarter}`
    );
  }
  OntoFeatureView(
    selectedLOB,
    selectedPortfolio,
    selectedProduct,
    selectedYear,
    selectedQuarter
  ) {
    this.props.history.push(
      `/FeatureView/${selectedLOB}/${selectedPortfolio}/${selectedProduct}/${selectedYear}/${selectedQuarter}`
    );
  }

  render() {
    return (
      <div>
        <ProductView1/>;
        <Imagess/>;
        <div className="ProductView2">
          <div class="col">
            <ul class="comm">
              <li class="header">
                <strong>Commercial</strong>
              </li>
              {this.state.HeaderDataForRep.map((item)=>
                 item.kpi_name==="Commercial" ? (
                  <li className="MRKPI">
                  sda
                  </li>
                 ) : (" "))}
              {this.state.FinalDataForRep.map((item) =>
                item.kpi_name === "Commercial" ? (
                  <li>
                    {item.kpi_subcategory_name} - $ {item.sum}
                    {item.unit_of_measurement} / year{" "}
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
              {this.state.HeaderDataForRep.map((item)=>
                 item.kpi_name==="Market" ? (
                  <li className="MRKPI">
                  sda
                  </li>
                 ) : (" "))}
              {this.state.FinalDataForRep.map((item) =>
                item.kpi_name === "Market" &&
                  item.unit_of_measurement === "%" ? (
                    <li>
                      {item.kpi_subcategory_name} - {item.avg}% / year
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
              {this.state.HeaderDataForRep.map((item)=>
                 item.kpi_name==="Efficiency" ? (
                  <li className="MRKPI">
                  sda
                  </li>
                 ) : (" "))}
              {this.state.FinalDataForRep.map((item) =>
                item.kpi_name === "Efficiency" ? (
                  <li>
                    {item.kpi_subcategory_name} - {item.sum}
                    {item.unit_of_measurement} / year{" "}
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
              {this.state.HeaderDataForRep.map((item)=>
                 item.kpi_name==="Customer Value" ? (
                  <li className="MRKPI">
                  sda
                  </li>
                 ) : (" "))}
              {this.state.FinalDataForRep.map((item) =>
                item.kpi_name === "Customer Value" ? (
                  <li>
                    {item.kpi_subcategory_name} - {item.avg}  {item.unit_of_measurement} / year{" "}
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
              {this.state.HeaderDataForRep.map((item)=>
                 item.kpi_name==="Future Trends" ? (
                  <li className="MRKPI">
                  sda
                  </li>
                 ) : (" "))}
              {this.state.FinalDataForRep.map((item) =>
                item.kpi_name === "Future Trends" ? (
                  <li>
                    {item.kpi_subcategory_name} - {item.avg}  {item.unit_of_measurement} /year{" "}
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
          <strong>Toggle View</strong>
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
                this.state.selectedQuarter
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
              {this.state.AvgTtvDataForRep.map((item) =>
                item.vel != null ? (
                  <li className="itemvel">{item.vel.toFixed(2)}</li>
                ) : (
                    ""
                  )
              )}
            </ul>
          </div>
          <div className="Ttv">
            <ul>
              <li className="ttvheader">
                <strong>Avg TTV</strong>
              </li>
              {this.state.AvgTtvDataForRep.map((item) =>
                item.ttv != null ? (
                  <li className="itemttv">{item.ttv.toFixed(2)}</li>
                ) : (
                    ""
                  )
              )}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default ProductView2;
