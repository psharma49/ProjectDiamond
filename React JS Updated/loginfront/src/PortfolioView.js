import React, { Component } from "react";

class PortfolioView extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="ProductView2">
        <div class="col">
            <table className="tablegrey">
          <ul class="comm">
            <li class="header">
              <strong>Commercial</strong>
            </li>
            {this.props.PortfolioHeaderDataForRep.map((item) =>
              item.kpi_name === "Commercial" ? (
                <tr><td><li className="MRKPI">
                  <strong>
                    {item.sum.toFixed(2)} {item.unit_of_measurement}{" "}
                    {item.timeline}
                  </strong>
                  - {item.display_name}
                </li></td></tr>
              ) : (
                " "
              )
            )}
          </ul>
            </table>
        </div>
        <div class="col">
          <ul class="mark">
            <li class="header header-green">
              <strong>Market</strong>
            </li>
            {this.props.PortfolioHeaderDataForRep.map((item) =>
              item.kpi_name === "Market" ? (
                <li className="MRKPI">
                  <strong>
                    {item.avg.toFixed(2)} {item.unit_of_measurement}{" "}
                    {item.timeline}
                  </strong>
                  - {item.display_name}
                </li>
              ) : (
                " "
              )
            )}
          </ul>
        </div>
        <div class="col">
          <ul class="effi">
            <li class="header">
              <strong>Efficiency</strong>
            </li>
            {this.props.PortfolioHeaderDataForRep.map((item) =>
              item.kpi_name === "Efficiency" ? (
                <li className="MRKPI">
                  <strong>
                    {item.avg.toFixed(2)} {item.unit_of_measurement}{" "}
                    {item.timeline}
                  </strong>
                  - {item.display_name}
                </li>
              ) : (
                " "
              )
            )}
          </ul>
        </div>
        <div class="col">
          <ul class="cust">
            <li class="header">
              <strong>Customer</strong>
            </li>
            {this.props.PortfolioHeaderDataForRep.map((item) =>
              item.kpi_name === "Customer Value" ? (
                <li className="MRKPI">
                  <strong>
                    {item.avg.toFixed(2)} {item.unit_of_measurement}{" "}
                    {item.timeline}
                  </strong>
                  - {item.display_name}
                </li>
              ) : (
                " "
              )
            )}
          </ul>
        </div>

        <div class="col">
          <ul class="futu">
            <li class="header header-green">
              <strong>Future</strong>
            </li>
            {this.props.PortfolioHeaderDataForRep.map((item) =>
              item.kpi_name === "Future Trends" ? (
                <li className="MRKPI">
                  <strong>
                    {item.avg.toFixed(2)} {item.unit_of_measurement}{" "}
                    {item.timeline}
                  </strong>
                  - {item.display_name}
                </li>
              ) : (
                " "
              )
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default PortfolioView;
