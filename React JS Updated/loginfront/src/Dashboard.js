import React, { Component } from "react";
import DataService from "./DataService";
import HeaderComponent from "./HeaderComponent";
import FeatureView from "./FeatureView";
import ProductView from "./ProductView";
import ToggleView from "./ToggleView";
import PortfolioView from "./PortfolioView";
import HomeButton from "./HomeButton";


class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      years: [],
      LOBs: [],
      Portfolios: [],
      Products: [],
      FinalDataForRep: [],
      AvgTtvDataForRep: [],
      HeaderDataForRep: [],
      Features: [],
      FeatureDataForRep: [],
      PortfolioHeaderDataForRep: [],
      errorMsg: "",
      selectedYear: "",
      selectedQuarter: "Q",
      selectedLOB: "",
      selectedPortfolio: "Select",
      selectedProduct: "Select",
      displayProductView: false,
      displayFeatureView: false,
      displayPortfolioView: false 
    };
    this.handleYearChange = this.handleYearChange.bind(this);
    this.handleQuarterChange = this.handleQuarterChange.bind(this);
    this.handleLOBChange = this.handleLOBChange.bind(this);
    this.handlePortfolioChange = this.handlePortfolioChange.bind(this);
    this.handleProductChange = this.handleProductChange.bind(this);
    this.CallYears = this.CallYears.bind(this);
    this.LOB = this.LOB.bind(this);
    this.Portfolio = this.Portfolio.bind(this);
    this.Product = this.Product.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onFeatureViewClick = this.onFeatureViewClick.bind(this);
    this.getDataForHeader = this.getDataForHeader.bind(this);
    this.getDataForAvgVelTtv = this.getDataForAvgVelTtv.bind(this);
    this.getDataForRep = this.getDataForRep.bind(this);
  }

  componentDidMount() {
    this.CallYears();
    this.LOB();
  }
  CallYears() {
    DataService.retrieveYearList()
      .then((response) => {
        this.setState({ years: response.data });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMsg: "Error retrieving years" });
      });
  }

  LOB() {
    DataService.retrieveLOBList()
      .then((response) => {
        console.log(response);
        this.setState({ LOBs: response.data });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMsg: "Error retrieving LOBs" });
      });
  }

  Portfolio(selectedLOB) {
    console.log(selectedLOB);
    DataService.retrievePortfolioList(selectedLOB)
      .then((response) => {
        console.log(response);
        this.setState({ Portfolios: response.data });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMsg: "Error retrieving Portfolios" });
      });
  }

  Product(selectedPortfolio) {
    DataService.retrieveProductList(selectedPortfolio)
      .then((response) => {
        console.log(response);
        this.setState({ Products: response.data });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMsg: "Error retrieving Products" });
      });
  }

  loadProductView() {
    if (this.state.displayProductView === true) {
      return (
        <div>
          <ProductView
            FinalDataForRep={this.state.FinalDataForRep}
            HeaderDataForRep={this.state.HeaderDataForRep}
          />
          ;
        </div>
      );
    }
  }
  loadFeatureView(){
    if(this.state.displayFeatureView === true)
    {
       return (
         <div>
           <FeatureView
           Features = {this.state.Features}
           FeatureDataForRep= {this.state.FeatureDataForRep}/>
         </div>

       );

    }
  }
  loadPortfolioView(){
    if(this.state.displayPortfolioView === true)
    {
      return (
        <div>
          <PortfolioView
          PortfolioHeaderDataForRep = {this.state.PortfolioHeaderDataForRep}
          selectedLOB = {this.state.selectedLOB}
          selectedPortfolio = {this.state.selectedPortfolio}
          selectedYear = {this.state.selectedYear}
          selectedQuarter = {this.state.selectedQuarter}/>
        </div>
      );

    }


  }

  loadToggleButtons() {
    if (this.state.displayProductView === true || this.state.displayFeatureView === true )  {
      return (
        <div>
          <div className="ToggleView">
            <strong>Toggle View</strong>
            <button
              className="Aggr"
              name="Aggregate"
              onClick={() =>
                this.onSubmit()
              }
            >
              Aggregate
            </button>
            <button
              name="Feature"
              className="FeatureLevel"
              onClick={() =>
                this.onFeatureViewClick()
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
        </div>
      );
    }
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
  getDataForPortfolio(){
    DataService.PortfolioData(
      this.state.selectedLOB,
      this.state.selectedPortfolio,
      this.state.selectedYear,
      this.state.selectedQuarter
    )
      .then((response) => {
        this.setState({ PortfolioHeaderDataForRep: response.data });
        console.log(this.state.AvgTtvDataForRep);
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMsg: "Error retrieving Final Data" });
      });

  }
  

  onSubmit() {

    if(this.state.selectedProduct==="Select" && this.state.selectedPortfolio!=="Select")
    {
        this.getDataForPortfolio();
        this.setState({
          displayProductView: false,
          displayFeatureView: false,
          displayPortfolioView: true 
        });
    }
    else
    {
        this.getDataForRep();
        this.getDataForAvgVelTtv();
        this.getDataForHeader();
        this.setState({
        displayProductView: true,
        displayFeatureView: false,
        displayPortfolioView: false,
        });
    }
  }
  onFeatureViewClick(){
    this.getAvgTtvData();
    this.getFeatureViewData();
    this.setState({
      displayProductView: false,
      displayFeatureView: true,
      displayPortfolioView: false
    });
  }
  // OntoFeatureView(
  //   selectedLOB,
  //   selectedPortfolio,
  //   selectedProduct,
  //   selectedYear,
  //   selectedQuarter
  // ) {
  //   this.props.history.push(
  //     `/FeatureView/${selectedLOB}/${selectedPortfolio}/${selectedProduct}/${selectedYear}/${selectedQuarter}`
  //   );
  // }
   
  getFeatureViewData() {
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
  getAvgTtvData() {
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
  handleYearChange(e) {
    console.log(e.target.value);
    this.setState({
      selectedYear: e.target.value,
    });
  }
  handleQuarterChange(e) {
    console.log(e.target.value);
    this.setState({
      selectedQuarter: e.target.value,
    });
  }
  handleLOBChange(e) {
    console.log(e.target.value);
    this.setState({
      selectedLOB: e.target.value,
    });
    this.Portfolio(e.target.value);
  }
  handlePortfolioChange(e) {
    console.log(e.target.value);
    this.setState({
      selectedPortfolio: e.target.value,
    });
    this.Product(e.target.value);
  }
  handleProductChange(e) {
    console.log(e.target.value);
    this.setState({
      selectedProduct: e.target.value,
    });
  }
  render() {
    return (
      <div className="dropdowns">
        <HeaderComponent/>
        <HomeButton/>
        <div className="viewby">
          <strong>View By</strong>
          <select
            className="year"
            name="Select Year"
            onChange={this.handleYearChange}
            onClick={this.LOB}
          >
            <option>
              {"  "}
              Year{"  "}
            </option>
            {this.state.years.map((item) => (
              <option value={item.year_number}>{item.year_number}</option>
            ))}
          </select>
          <select
            className="quarter"
            name="Select Quarter"
            value={this.state.value}
            onChange={this.handleQuarterChange}
          >
            <option value="Q">
              {"  "}
              Quarter{"  "}
            </option>
            <option value="Q1">Quarter 1</option>
            <option value="Q2">Quarter 2</option>
            <option value="Q3">Quarter 3</option>
            <option value="Q4">Quarter 4</option>
            <option value="YTD">YTD</option>
          </select>
        </div>
        <div className="LOBs">
          <strong>Select LOB</strong>
          <select
            className="LOB"
            name="Select LOB"
            onChange={this.handleLOBChange}
          >
            <option>
              {"   "}
              Select{"    "}
            </option>
            {this.state.LOBs.map((item) => (
              <option value={item.lob_id}>{item.lob_name}</option>
            ))}
          </select>
        </div>
        <div className="Portfolios">
          <strong>Select Portfolio</strong>
          <select
            className="portfolio"
            name="Select Portfolio"
            onChange={this.handlePortfolioChange}
          >
            <option>
              {" "}
              Select{" "}
            </option>
            {this.state.Portfolios.map((item) => (
              <option value={item.portfolio_id}>{item.portfolio_name}</option>
            ))}
          </select>
        </div>
        <div className="Products">
          <strong>Select Product</strong>
          <select
            className="product"
            name="Select Products"
            onChange={this.handleProductChange}
          >
            <option>
              {" "}
              Select{" "}
            </option>
            {this.state.Products.map((item) => (
              <option value={item.product_id}>{item.product_name}</option>
            ))}
          </select>
        </div>
        <div className="Finalsubmit">
          <button
            className="dashboardsubmit"
            name="Submit"
            onClick={() => this.onSubmit()}
          >
            Submit
          </button>
        </div>
        {this.loadPortfolioView()}
        {this.loadProductView()}
        {this.loadFeatureView()}
        {this.loadToggleButtons()}
      </div>
    );
  }
}

export default Dashboard;
