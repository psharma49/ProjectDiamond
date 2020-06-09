import React, { Component } from "react";

class PortfolioView extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
        <div className="ProductView2">
        <table>
          <tr>
            <td className="portfolioviewtable">
              <ul class="comm">
                <li class="header">
                  <strong>Commercial</strong>
                </li>
              </ul>
            </td>
            <td className="portfolioviewtable">
              <ul class="mark">
                <li class="header header-green">
                  <strong>Market</strong>
                </li>
              </ul>
            </td>
            <td className="portfolioviewtable">
              <ul class="effi">
                <li class="header">
                  <strong>Efficiency</strong>
                </li>
              </ul>
            </td>
            <td className="portfolioviewtable">
              <ul class="cust">
                <li class="header">
                  <strong>Customer</strong>
                </li>
              </ul>
            </td>
            <td className="portfolioviewtable">
              <ul class="futu">
                <li class="header">
                  <strong>Future</strong>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="portfolioviewtable">
              <ul class="comm">
                {this.props.PortfolioHeaderDataForRep.map((item) =>
                  item.kpi_name === "Commercial" ? (
                    <li className="MRKPI">
                      <strong>
                        {item.sum.toFixed(2)} {item.unit_of_measurement}{" "}
                        {item.timeline}
                      </strong>
                      <br/>{item.display_name}
                    </li>
                  ) : (
                    " "
                  )
                )}
              </ul>
            </td>
            <td className="portfolioviewtable">
              <ul class="mark">
                {this.props.PortfolioHeaderDataForRep.map((item) =>
                  item.kpi_name === "Market" ? (
                    <li className="MRKPI">
                      <strong>
                        {item.avg.toFixed(2)} {item.unit_of_measurement}{" "}
                        {item.timeline}
                      </strong>
                      <br/>{item.display_name}
                    </li>
                  ) : (
                    " "
                  )
                )}
              </ul>
            </td>
            <td className="portfolioviewtable">
              <ul class="effi">
                {this.props.PortfolioHeaderDataForRep.map((item) =>
                  item.kpi_name === "Efficiency" ? (
                    <li className="MRKPI">
                      <strong>
                        {item.avg.toFixed(2)} {item.unit_of_measurement}{" "}
                        {item.timeline}
                      </strong>
                      <br/>{item.display_name}
                    </li>
                  ) : (
                    " "
                  )
                )}
              </ul>
            </td>
            <td className="portfolioviewtable">
              <ul class="cust">
                {this.props.PortfolioHeaderDataForRep.map((item) =>
                  item.kpi_name === "Customer Value" ? (
                    <li className="MRKPI">
                      <strong>
                        {item.avg.toFixed(2)} {item.unit_of_measurement}{" "}
                        {item.timeline}
                      </strong>
                      <br/>{item.display_name}
                    </li>
                  ) : (
                    " "
                  )
                )}
              </ul>
            </td>
            <td className="portfolioviewtable">
              <ul class="futu">
                {this.props.PortfolioHeaderDataForRep.map((item) =>
                  item.kpi_name === "Future Trends" ? (
                    <li className="MRKPI">
                      <strong>
                        {item.avg.toFixed(2)} {item.unit_of_measurement}{" "}
                        {item.timeline}
                      </strong>
                      <br/>{item.display_name}
                    </li>
                  ) : (
                    " "
                  )
                )}
              </ul>
            </td>
          </tr>
          </table>
          </div>
    );
  }
}

export default PortfolioView;
