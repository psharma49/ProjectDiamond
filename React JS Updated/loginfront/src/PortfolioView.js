import React, { Component } from "react";
import DataService from "./DataService";
import PortfolioGraphs from "./PortfolioGraphs";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import Imagess from "./imagess";
import PropTypes from 'prop-types';

import scrollIntoView from 'scroll-into-view-if-needed';

class PortfolioView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      PortfolioGraph: [],
      displayName: [],
      unit_of_measurement: [],
      timeline: [],
      productNameLabel: [],
      productData: [],
      isGraphDisplay: false,
      errorMsg: ''
    };
    this.getDataForPortfolioGraph = this.getDataForPortfolioGraph.bind(this);
}
  //   loadPortfolioGraphs() {
  //     if (this.state.displayPortFolioGraphs === true) {
  //       return (
  //         <div>
  //           <PortfolioGraphs
  //             DataForPortfolioGraph={this.state.DataForPortfolioGraph}
  //             displayName={this.state.displayName}
  //             unit_of_measurement={this.state.unit_of_measurement}
  //             timeline={this.state.timeline}
  //           />
  //         </div>
  //       );
  //     }
  //   }


//   


async getDataForPortfolioGraph(displayName, unit_of_measurement, timeline) {
    await DataService.PortfolioGraphData(
      this.props.selectedLOB,
      this.props.selectedPortfolio,
      displayName,
      this.props.selectedYear,
      this.props.selectedQuarter
    )
      .then((response) => {
        this.setState({ PortfolioGraph: response.data });
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMsg: "Error retrieving Final Data" });
      });
    let temp = this.state.PortfolioGraph.map((item) => item.product_name);
    let temp2;
    if (unit_of_measurement === "%" || unit_of_measurement === "Points") {
      temp2 = this.state.PortfolioGraph.map((item) => item.avg);
    } else {
      temp2 = this.state.PortfolioGraph.map((item) => item.sum);
    }
    this.setState({
      productNameLabel: temp,
      productData: temp2,
      displayName: displayName,
      unit_of_measurement: unit_of_measurement,
      timeline: timeline,
      isGraphDisplay: true,
    });

    let elmnt = document.getElementById("portgraphs");
    scrollIntoView(elmnt, { block: 'center', inline: 'center' });
}

render() {
    return (
      <div>
        <Imagess />
        <div className="PortfolioView">
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
                    item.kpi_name === "Commercial"  ? (
                      <li className="MRKPI">
                        <strong>
                          {item.sum.toFixed(2)} {item.unit_of_measurement}{" "}
                          {item.timeline}
                        </strong>
                        <br />
                        <Link
                          onClick={() =>
                            this.getDataForPortfolioGraph(
                              item.display_name,
                              item.unit_of_measurement,
                              item.timeline
                            )
                          }
                        >
                          {item.display_name}
                        </Link>
                      </li>
                    ) : (
                      " "
                    )
                  )}
                  {/* {this.props.PortfolioHeaderDataForRep.map((item) =>
                    item.kpi_name === "Commercial" &&
                    item.unit_of_measurement !== "%" &&
                    item.unit_of_measurement !== "Points" ? (
                      <li className="MRKPI">
                        <strong>
                          {item.sum.toFixed(2)} {item.unit_of_measurement}{" "}
                          {item.timeline}
                        </strong>
                        <br />
                        <Link
                          onClick={() =>
                            this.getDataForPortfolioGraph(
                              item.display_name,
                              item.unit_of_measurement,
                              item.timeline
                            )
                          }
                        >
                          {item.display_name}
                        </Link>
                      </li>
                    ) : (
                      " "
                    )
                  )} */}

                  {/* {this.props.PortfolioHeaderDataForRep.map((item) =>
                    item.kpi_name === "Commercial" ? (
                      <li className="MRKPI">
                        <strong>
                          {item.sum.toFixed(2)} {item.unit_of_measurement}{" "}
                          {item.timeline}
                        </strong>
                        <br />
                        <Link
                          onClick={() =>
                            this.getDataForPortfolioGraph(
                              item.display_name,
                              item.unit_of_measurement,
                              item.timeline
                            )
                          }
                        >
                          {item.display_name}
                        </Link>
                      </li>
                    ) : (
                      " "
                    )
                  )} */}
                </ul>
              </td>
              <td className="portfolioviewtable">
                <ul class="mark">

                {this.props.PortfolioHeaderDataForRep.map((item) =>
                    item.kpi_name === "Market"  ? (
                      <li className="MRKPI">
                        <strong>
                          {item.sum.toFixed(2)} {item.unit_of_measurement}{" "}
                          {item.timeline}
                        </strong>
                        <br />
                        <Link
                          onClick={() =>
                            this.getDataForPortfolioGraph(
                              item.display_name,
                              item.unit_of_measurement,
                              item.timeline
                            )
                          }
                        >
                          {item.display_name}
                        </Link>
                      </li>
                    ) : (
                      " "
                    )
                  )}
                  {/* {this.props.PortfolioHeaderDataForRep.map((item) =>
                    item.kpi_name === "Market" &&
                    item.unit_of_measurement !== "%" &&
                    item.unit_of_measurement !== "Points" ? (
                      <li className="MRKPI">
                        <strong>
                          {item.sum.toFixed(2)} {item.unit_of_measurement}{" "}
                          {item.timeline}
                        </strong>
                        <br />
                        <Link
                          onClick={() =>
                            this.getDataForPortfolioGraph(
                              item.display_name,
                              item.unit_of_measurement,
                              item.timeline
                            )
                          }
                        >
                          {item.display_name}
                        </Link>
                      </li>
                    ) : (
                      " "
                    )
                  )} */}




                  {/* {this.props.PortfolioHeaderDataForRep.map((item) =>
                    item.kpi_name === "Market" ? (
                      <li className="MRKPI">
                        <strong>
                          {item.avg.toFixed(2)} {item.unit_of_measurement}{" "}
                          {item.timeline}
                        </strong>
                        <br/>
                        <Link
                          onClick={() =>
                            this.getDataForPortfolioGraph(
                              item.display_name,
                              item.unit_of_measurement,
                              item.timeline
                            )
                          }
                        >
                          {item.display_name}
                        </Link>
                      </li>
                    ) : (
                      " "
                    )
                  )} */}
                </ul>
              </td>
              <td className="portfolioviewtable">
                <ul class="effi">


                {this.props.PortfolioHeaderDataForRep.map((item) =>
                    item.kpi_name === "Efficiency" ? (
                      <li className="MRKPI">
                        <strong>
                          {item.sum.toFixed(2)} {item.unit_of_measurement}{" "}
                          {item.timeline}
                        </strong>
                        <br />
                        <Link
                          onClick={() =>
                            this.getDataForPortfolioGraph(
                              item.display_name,
                              item.unit_of_measurement,
                              item.timeline
                            )
                          }
                        >
                          {item.display_name}
                        </Link>
                      </li>
                    ) : (
                      " "
                    )
                  )}
                  {/* {this.props.PortfolioHeaderDataForRep.map((item) =>
                    item.kpi_name === "Efficiency" &&
                   ( item.unit_of_measurement !== "%" &&
                    item.unit_of_measurement !== "Points") ? (
                      <li className="MRKPI">
                        <strong>
                          {item.sum.toFixed(2)} {item.unit_of_measurement}{" "}
                          {item.timeline}
                        </strong>
                        <br />
                        <Link
                          onClick={() =>
                            this.getDataForPortfolioGraph(
                              item.display_name,
                              item.unit_of_measurement,
                              item.timeline
                            )
                          }
                        >
                          {item.display_name}
                        </Link>
                      </li>
                    ) : (
                      " "
                    )
                  )} */}





                  {/* {this.props.PortfolioHeaderDataForRep.map((item) =>
                    item.kpi_name === "Efficiency" ? (
                      <li className="MRKPI">
                        <strong>
                          {item.avg.toFixed(2)} {item.unit_of_measurement}{" "}
                          {item.timeline}
                        </strong>
                        <br />
                        <Link
                          onClick={() =>
                            this.getDataForPortfolioGraph(
                              item.display_name,
                              item.unit_of_measurement,
                              item.timeline
                            )
                          }
                        >
                          {item.display_name}
                        </Link>
                      </li>
                    ) : (
                      " "
                    )
                  )} */}
                </ul>
              </td>
              <td className="portfolioviewtable">
                <ul class="cust">

                {this.props.PortfolioHeaderDataForRep.map((item) =>
                    item.kpi_name === "Customer Value"  ? (
                      <li className="MRKPI">
                        <strong>
                          {item.sum.toFixed(2)} {item.unit_of_measurement}{" "}
                          {item.timeline}
                        </strong>
                        <br />
                        <Link
                          onClick={() =>
                            this.getDataForPortfolioGraph(
                              item.display_name,
                              item.unit_of_measurement,
                              item.timeline
                            )
                          }
                        >
                          {item.display_name}
                        </Link>
                      </li>
                    ) : (
                      " "
                    )
                  )}

                  {/* {this.props.PortfolioHeaderDataForRep.map((item) =>
                    item.kpi_name === "Customer Value" &&
                    (item.unit_of_measurement !== "%" &&
                    item.unit_of_measurement !== "Points") ? (
                      <li className="MRKPI">
                        <strong>
                          {item.sum.toFixed(2)} {item.unit_of_measurement}{" "}
                          {item.timeline}
                        </strong>
                        <br />
                        <Link
                          onClick={() =>
                            this.getDataForPortfolioGraph(
                              item.display_name,
                              item.unit_of_measurement,
                              item.timeline
                            )
                          }
                        >
                          {item.display_name}
                        </Link>
                      </li>
                    ) : (
                      " "
                    )
                  )} */}


                  {/* {this.props.PortfolioHeaderDataForRep.map((item) =>
                    item.kpi_name === "Customer Value" ? (
                      <li className="MRKPI">
                        <strong>
                          {item.avg.toFixed(2)} {item.unit_of_measurement}{" "}
                          {item.timeline}
                        </strong>
                        <br />
                        <Link
                          onClick={() =>
                            this.getDataForPortfolioGraph(
                              item.display_name,
                              item.unit_of_measurement,
                              item.timeline
                            )
                          }
                        >
                          {item.display_name}
                        </Link>
                      </li>
                    ) : (
                      " "
                    )
                  )} */}
                </ul>
              </td>
              <td className="portfolioviewtable">
                <ul class="futu">

                {this.props.PortfolioHeaderDataForRep.map((item) =>
                    item.kpi_name === "Future Trends"   ? (
                      <li className="MRKPI">
                        <strong>
                          {item.sum.toFixed(2)} {item.unit_of_measurement}{" "}
                          {item.timeline}
                        </strong>
                        <br />
                        <Link
                          onClick={() =>
                            this.getDataForPortfolioGraph(
                              item.display_name,
                              item.unit_of_measurement,
                              item.timeline
                            )
                          }
                        >
                          {item.display_name}
                        </Link>
                      </li>
                    ) : (
                      " "
                    )
                  )}
                  {/* {this.props.PortfolioHeaderDataForRep.map((item) =>
                    item.kpi_name === "Future Trends" &&
                    (item.unit_of_measurement !== "%" &&
                    item.unit_of_measurement !== "Points") ? (
                      <li className="MRKPI">
                        <strong>
                          {item.sum.toFixed(2)} {item.unit_of_measurement}{" "}
                          {item.timeline}
                        </strong>
                        <br />
                        <Link
                          onClick={() =>
                            this.getDataForPortfolioGraph(
                              item.display_name,
                              item.unit_of_measurement,
                              item.timeline
                            )
                          }
                        >
                          {item.display_name}
                        </Link>
                      </li>
                    ) : (
                      " "
                    )
                  )} */}


                  {/* {this.props.PortfolioHeaderDataForRep.map((item) =>
                    item.kpi_name === "Future Trends" ? (
                      <li className="MRKPI">
                        <strong>
                          {item.avg.toFixed(2)} {item.unit_of_measurement}{" "}
                          {item.timeline}
                        </strong>
                        <br />
                        <Link
                          onClick={() =>
                            this.getDataForPortfolioGraph(
                              item.display_name,
                              item.unit_of_measurement,
                              item.timeline
                            )
                          }
                        >
                          {item.display_name}
                        </Link>
                      </li>
                    ) : (
                      " "
                    )
                  )} */}
                </ul>
              </td>
            </tr>
          </table>

        </div>
        <div id="portgraphs">
        {this.state.isGraphDisplay &&  <PortfolioGraphs
            productData={this.state.productData}
            productNameLabel={this.state.productNameLabel}
            displayName={this.state.displayName}
            timeline={this.state.timeline}
            unit_of_measurement={this.state.unit_of_measurement}
          />}
        </div>
      </div>
    );
  }
}

export default PortfolioView;
