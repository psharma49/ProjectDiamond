import React, { Component } from "react";
import Imagess from "./imagess";

class ProductView extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <Imagess />;
        <div className="ProductView2">
          <div class="col">
            <ul class="comm">
              <li class="header">
                <strong>Commercial</strong>
              </li>
              {this.props.HeaderDataForRep.map((item) =>
                item.kpi_name === "Commercial" ? (
                  <li className="MRKPI">
                    {item.display_name} {item.sum.toFixed(2)}{" "}
                    {item.unit_of_measurement} / {item.timeline}
                  </li>
                ) : (
                  " "
                )
              )}
              {this.props.FinalDataForRep.map((item) =>
                item.kpi_name === "Commercial" ? (
                  <li>
                    {item.kpi_subcategory_name} - $ {item.sum.toFixed(2)}
                    {item.unit_of_measurement} / year{" "}
                  </li>
                ) : (
                  ""
                )
              )}
            </ul>
          </div>
          <div class="col">
            <ul class="mark">
              <li class="header header-green">
                <strong>Market</strong>
              </li>
              {this.props.HeaderDataForRep.map((item) =>
                item.kpi_name === "Market" ? (
                  <li className="MRKPI">
                    {item.display_name} {item.avg.toFixed(2)}{" "}
                    {item.unit_of_measurement} / {item.timeline}
                  </li>
                ) : (
                  " "
                )
              )}
              {this.props.FinalDataForRep.map((item) =>
                item.kpi_name === "Market" &&
                item.unit_of_measurement === "Percentage" ? (
                  <li>
                    {item.kpi_subcategory_name} - {item.avg.toFixed(2)}{" "}
                    {item.unit_of_measurement}
                  </li>
                ) : (
                  ""
                )
              )}
            </ul>
          </div>
          <div class="col">
            <ul class="effi">
              <li class="header">
                <strong>Efficiency</strong>
              </li>
              {this.props.HeaderDataForRep.map((item) =>
                item.kpi_name === "Efficiency" ? (
                  <li className="MRKPI">
                    {item.display_name} {item.avg.toFixed(2)}{" "}
                    {item.unit_of_measurement} / {item.timeline}
                  </li>
                ) : (
                  " "
                )
              )}
              {this.props.FinalDataForRep.map((item) =>
                item.kpi_name === "Efficiency" ? (
                  <li>
                    {item.kpi_subcategory_name} - {item.sum.toFixed(2)}
                    {item.unit_of_measurement} / year{" "}
                  </li>
                ) : (
                  ""
                )
              )}
            </ul>
          </div>
          <div class="col">
            <ul class="cust">
              <li class="header">
                <strong>Customer</strong>
              </li>
              {this.props.HeaderDataForRep.map((item) =>
                item.kpi_name === "Customer Value" ? (
                  <li className="MRKPI">
                    {item.display_name} {item.avg.toFixed(2)}{" "}
                    {item.unit_of_measurement} / {item.timeline}
                  </li>
                ) : (
                  " "
                )
              )}
              {this.props.FinalDataForRep.map((item) =>
                item.kpi_name === "Customer Value" ? (
                  <li>
                    {item.kpi_subcategory_name} - {item.avg.toFixed(2)}{" "}
                    {item.unit_of_measurement} / year{" "}
                  </li>
                ) : (
                  ""
                )
              )}
            </ul>
          </div>
          <div class="col">
            <ul class="futu">
              <li class="header header-green">
                <strong>Future</strong>
              </li>
              {this.props.HeaderDataForRep.map((item) =>
                item.kpi_name === "Future Trends" ? (
                  <li className="MRKPI">
                    {item.display_name} {item.avg.toFixed(2)}{" "}
                    {item.unit_of_measurement} / {item.timeline}
                  </li>
                ) : (
                  " "
                )
              )}
              {this.props.FinalDataForRep.map((item) =>
                item.kpi_name === "Future Trends" ? (
                  <li>
                    {item.kpi_subcategory_name} - {item.avg.toFixed(2)}{" "}
                    {item.unit_of_measurement} /year{" "}
                  </li>
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
export default ProductView;
