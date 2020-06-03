import React, { Component } from "react";
import DataService from "./DataService";

class ProductView1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      years: [],
      LOBs: [],
      Portfolios: [],
      Products: [],
      FinalDataForRep: [],
      errorMsg: "",
      selectedYear: "",
      selectedQuarter: "",
      selectedLOB: "",
      selectedPortfolio: "",
      selectedProduct: "",
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
    this.OnSubmit = this.OnSubmit.bind(this);
  }

  componentDidMount() {
    this.CallYears();
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

  //   OnSubmit(selectedLOB, selectedPortfolio, selectedProduct,selectedYear) {
  //     DataService.Onsubmitting(selectedLOB,selectedPortfolio,selectedProduct,selectedYear)
  //       .then((response) => {
  //         console.log(response);
  //         this.setState({ FinalDataForRep: response.data });
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //         this.setState({ errorMsg: "Error retrieving Final Data" });
  //       });
  //       this.context.history.push('/PLDV2')
  //   }

  OnSubmit(selectedLOB, selectedPortfolio, selectedProduct) {
    this.props.history.push(
      `/ProductView2/${selectedLOB}/${selectedPortfolio}/${selectedProduct}/yearid`
    );
  }
  OntoFeatureView(
    selectedLOB,
    selectedPortfolio,
    selectedProduct,
    selectedYear
  ) {
    this.props.history.push(
      `/FeatureView/${selectedLOB}/${selectedPortfolio}/${selectedProduct}/${selectedYear}`
    );
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
        <fieldset>

        <div className="viewby">
          View By
          <select
            className="year"
            name="Select Year"
            onChange={this.handleYearChange}
            onClick={this.LOB}
          >
            <option selected disabled>
              {"  "}
              Year{"  "}
            </option>
            {this.state.years.map((item) => (
              <option value={item.year_id}>{item.year_number}</option>
            ))}
          </select>
          <select
            className="quarter"
            name="Select Quarter"
            value={this.state.value}
            onChange={this.handleQuarterChange}
          >
            <option selected disabled>
              {"  "}
              Quarter{"  "}
            </option>
            <option value="Quarter 1">Quarter 1</option>
            <option value="Quarter 2">Quarter 2</option>
            <option value="Quarter 3">Quarter 3</option>
            <option value="Quarter 4">Quarter 4</option>
          </select>
        </div>

        <div className="LOBs">
          Select LOB
          <select
            className="LOB"
            name="Select LOB"
            onChange={this.handleLOBChange}
          >
            <option selected disabled>
              {"   "}
              LOB{"    "}
            </option>
            {this.state.LOBs.map((item) => (
              <option value={item.lob_id}>{item.lob_name}</option>
            ))}
          </select>
        </div>

        <div className="Portfolios">
          Select Portfolio
          <select
            className="portfolio"
            name="Select Portfolio"
            onChange={this.handlePortfolioChange}
          >
            <option selected disabled>
              {" "}
              Porfolio{" "}
            </option>
            {this.state.Portfolios.map((item) => (
              <option value={item.portfolio_id}>{item.portfolio_name}</option>
            ))}
          </select>
        </div>

        <div className="Products">
          Select Product
          <select
            className="product"
            name="Select Products"
            onChange={this.handleProductChange}
          >
            <option selected disabled>
              {" "}
              Product{" "}
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
            onClick={() =>
              this.OnSubmit(
                this.state.selectedLOB,
                this.state.selectedPortfolio,
                this.state.selectedProduct,
              )
            }
          >
            Submit
          </button>
        </div>
        </fieldset>
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
              )
            }
          >
            Aggregate
          </button>
          <button
            name="Feature"
            className="FeatureLevel"
            onClick={() => this.OntoFeatureView()}
            name="Feature Level"
          >
            Feature level
          </button>
        </div>
      </div>
    );
  }
}

export default ProductView1;
