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
          <table>
            <tr>
              <td className="productviewtable">
                <ul class="comm">
                  <li class="header">
                    <strong>Commercial</strong>
                  </li>
                </ul>
              </td>
              <td className="productviewtable">
                <ul class="mark">
                  <li class="header header-green">
                    <strong>Market</strong>
                  </li>
                </ul>
              </td>
              <td className="productviewtable">
                <ul class="effi">
                  <li class="header">
                    <strong>Efficiency</strong>
                  </li>
                </ul>
              </td>
              <td className="productviewtable">
                <ul class="cust">
                  <li class="header">
                    <strong>Customer</strong>
                  </li>
                </ul>
              </td>
              <td className="productviewtable">
                <ul class="futu">
                  <li class="header">
                    <strong>Future</strong>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td className="productviewtable">
                <ul class="comm">
                  {this.props.HeaderDataForRep.map((item) =>
                    item.kpi_name === "Commercial" &&
                    (item.unit_of_measurement === "%" ||
                      item.unit_of_measurement === "Points") ? (
                      <li className="MRKPI">
                        <strong>
                          {item.avg.toFixed(2)} {item.unit_of_measurement}{" "}
                          {item.timeline}
                        </strong>
                        <br />
                        {item.display_name}
                      </li>
                    ) : (
                      " "
                    )
                  )}
                  {this.props.HeaderDataForRep.map((item) =>
                    item.kpi_name === "Commercial" &&
                    item.unit_of_measurement !== "%" &&
                    item.unit_of_measurement !== "Points" ? (
                      <li className="MRKPI">
                        <strong>
                          {item.sum.toFixed(2)} {item.unit_of_measurement}{" "}
                          {item.timeline}
                        </strong>
                        <br />
                        {item.display_name}
                      </li>
                    ) : (
                      " "
                    )
                  )}
                </ul>
              </td>
              <td className="productviewtable">
                <ul class="mark">
                  {this.props.HeaderDataForRep.map((item) =>
                    item.kpi_name === "Market" &&
                    (item.unit_of_measurement === "%" ||
                      item.unit_of_measurement === "Points") ? (
                      <li className="MRKPI">
                        <strong>
                          {item.avg.toFixed(2)} {item.unit_of_measurement}{" "}
                          {item.timeline}
                        </strong>
                        <br />
                        {item.display_name}
                      </li>
                    ) : (
                      " "
                    )
                  )}
                  {this.props.HeaderDataForRep.map((item) =>
                    item.kpi_name === "Market" &&
                    item.unit_of_measurement !== "%" &&
                    item.unit_of_measurement !== "Points" ? (
                      <li className="MRKPI">
                        <strong>
                          {item.sum.toFixed(2)} {item.unit_of_measurement}{" "}
                          {item.timeline}
                        </strong>
                        <br />
                        {item.display_name}
                      </li>
                    ) : (
                      " "
                    )
                  )}
                </ul>
              </td>
              <td className="productviewtable">
                <ul class="effi">
                  {this.props.HeaderDataForRep.map((item) =>
                    item.kpi_name === "Efficiency" &&
                    (item.unit_of_measurement === "%" ||
                      item.unit_of_measurement === "Points") ? (
                      <li className="MRKPI">
                        <strong>
                          {item.avg.toFixed(2)} {item.unit_of_measurement}{" "}
                          {item.timeline}
                        </strong>
                        <br />
                        {item.display_name}
                      </li>
                    ) : (
                      " "
                    )
                  )}
                  {this.props.HeaderDataForRep.map((item) =>
                    item.kpi_name === "Efficiency" &&
                   ( item.unit_of_measurement !== "%" &&
                    item.unit_of_measurement !== "Points") ? (
                      <li className="MRKPI">
                        <strong>
                          {item.sum.toFixed(2)} {item.unit_of_measurement}{" "}
                          {item.timeline}
                        </strong>
                        <br />
                        {item.display_name}
                      </li>
                    ) : (
                      " "
                    )
                  )}
                </ul>
              </td>
              <td className="productviewtable">
                <ul class="cust">
                  {this.props.HeaderDataForRep.map((item) =>
                    item.kpi_name === "Customer Value" &&
                    (item.unit_of_measurement === "%" ||
                      item.unit_of_measurement === "Points") ? (
                      <li className="MRKPI">
                        <strong>
                          {item.avg.toFixed(2)} {item.unit_of_measurement}{" "}
                          {item.timeline}
                        </strong>
                        <br />
                        {item.display_name}
                      </li>
                    ) : (
                      " "
                    )
                  )}

                  {this.props.HeaderDataForRep.map((item) =>
                    item.kpi_name === "Customer Value" &&
                    (item.unit_of_measurement !== "%" &&
                    item.unit_of_measurement !== "Points") ? (
                      <li className="MRKPI">
                        <strong>
                          {item.sum.toFixed(2)} {item.unit_of_measurement}{" "}
                          {item.timeline}
                        </strong>
                        <br />
                        {item.display_name}
                      </li>
                    ) : (
                      " "
                    )
                  )}
                </ul>
              </td>
              <td className="productviewtable">
                <ul class="futu">
                  {this.props.HeaderDataForRep.map((item) =>
                    item.kpi_name === "Future Trends"  &&
                    (item.unit_of_measurement === "%" ||
                      item.unit_of_measurement === "Points") ? (
                      <li className="MRKPI">
                        <strong>
                          {item.avg.toFixed(2)} {item.unit_of_measurement}{" "}
                          {item.timeline}
                        </strong>
                        <br />
                        {item.display_name}
                      </li>
                    ) : (
                      " "
                    )
                  )}
                  {this.props.HeaderDataForRep.map((item) =>
                    item.kpi_name === "Future Trends" &&
                    (item.unit_of_measurement !== "%" &&
                    item.unit_of_measurement !== "Points") ? (
                      <li className="MRKPI">
                        <strong>
                          {item.sum.toFixed(2)} {item.unit_of_measurement}{" "}
                          {item.timeline}
                        </strong>
                        <br />
                        {item.display_name}
                      </li>
                    ) : (
                      " "
                    )
                  )}


                </ul>
              </td>
            </tr>

            <tr>
              <td className="productviewtable">
                <ul class="comm">
                  {this.props.FinalDataForRep.map((item) =>
                    item.kpi_name === "Commercial" &&
                    (item.unit_of_measurement === "%" ||
                      item.unit_of_measurement === "Points") ? (
                      <li>
                        {item.kpi_subcategory_name} - $ {item.avg.toFixed(2)}
                        {item.unit_of_measurement} / year{" "}
                      </li>
                    ) : (
                      ""
                    )
                  )}
                  {this.props.FinalDataForRep.map((item) =>
                    item.kpi_name === "Commercial" &&
                    item.unit_of_measurement !== "%" &&
                    item.unit_of_measurement !== "Points" ? (
                      <li>
                        {item.kpi_subcategory_name} - {item.sum.toFixed(2)}{" "}
                        {item.unit_of_measurement}
                      </li>
                    ) : (
                      ""
                    )
                  )}
                </ul>
              </td>
              <td className="productviewtable">
                <ul class="mark">
                  {this.props.FinalDataForRep.map((item) =>
                    item.kpi_name === "Market" &&
                    (item.unit_of_measurement === "%" ||
                      item.unit_of_measurement === "Points") ? (
                      <li>
                        {item.kpi_subcategory_name} - {item.avg.toFixed(2)}{" "}
                        {item.unit_of_measurement}
                      </li>
                    ) : (
                      ""
                    )
                  )}

                  {this.props.FinalDataForRep.map((item) =>
                    item.kpi_name === "Market" &&
                    item.unit_of_measurement !== "%" &&
                    item.unit_of_measurement !== "Points" ? (
                      <li>
                        {item.kpi_subcategory_name} - {item.sum.toFixed(2)}{" "}
                        {item.unit_of_measurement}
                      </li>
                    ) : (
                      ""
                    )
                  )}
                </ul>
              </td>
              <td className="productviewtable">
                <ul class="effi">
                  {this.props.FinalDataForRep.map((item) =>
                    item.kpi_name === "Efficiency" &&
                    (item.unit_of_measurement === "%" ||
                      item.unit_of_measurement === "Points") ? (
                      <li>
                        {item.kpi_subcategory_name} - {item.avg.toFixed(2)}
                        {item.unit_of_measurement} / year{" "}
                      </li>
                    ) : (
                      ""
                    )
                  )}

                  {this.props.FinalDataForRep.map((item) =>
                    item.kpi_name === "Efficiency" &&
                    item.unit_of_measurement !== "%" &&
                    item.unit_of_measurement !== "Points" ? (
                      <li>
                        {item.kpi_subcategory_name} - {item.sum.toFixed(2)}{" "}
                        {item.unit_of_measurement}
                      </li>
                    ) : (
                      ""
                    )
                  )}
                </ul>
              </td>
              <td className="productviewtable">
                <ul class="cust">
                  {this.props.FinalDataForRep.map((item) =>
                    item.kpi_name === "Customer Value" &&
                    (item.unit_of_measurement === "%" ||
                      item.unit_of_measurement === "Points") ? (
                      <li>
                        {item.kpi_subcategory_name} - {item.avg.toFixed(2)}{" "}
                        {item.unit_of_measurement} / year{" "}
                      </li>
                    ) : (
                      ""
                    )
                  )}

                  {this.props.FinalDataForRep.map((item) =>
                    item.kpi_name === "Customer Value" &&
                    item.unit_of_measurement !== "%" &&
                    item.unit_of_measurement !== "Points" ? (
                      <li>
                        {item.kpi_subcategory_name} - {item.sum.toFixed(2)}{" "}
                        {item.unit_of_measurement}
                      </li>
                    ) : (
                      ""
                    )
                  )}
                </ul>
              </td>
              <td className="productviewtable">
                <ul class="futu">
                  {this.props.FinalDataForRep.map((item) =>
                    item.kpi_name === "Future Trends" &&
                    (item.unit_of_measurement === "%" ||
                      item.unit_of_measurement === "Points") ? (
                      <li>
                        {item.kpi_subcategory_name} - {item.avg.toFixed(2)}{" "}
                        {item.unit_of_measurement} /year{" "}
                      </li>
                    ) : (
                      ""
                    )
                  )}
                  {this.props.FinalDataForRep.map((item) =>
                    item.kpi_name === "Future Trends" &&
                    item.unit_of_measurement !== "%" &&
                    item.unit_of_measurement !== "Points" ? (
                      <li>
                        {item.kpi_subcategory_name} - {item.sum.toFixed(2)}{" "}
                        {item.unit_of_measurement}
                      </li>
                    ) : (
                      ""
                    )
                  )}
                </ul>
              </td>
            </tr>
          </table>
          {/* <div class="col">
            <ul class="comm">
              <li class="header">
                <strong>Commercial</strong>
              </li>
              {this.props.HeaderDataForRep.map((item) =>
                item.kpi_name === "Commercial" ? (
                  <li className="MRKPI">
                    <strong>
                      {item.sum.toFixed(2)} {item.unit_of_measurement}{" "}
                      {item.timeline}
                    </strong>
                    - {item.display_name}
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
          </div> */}
        </div>
      </div>
    );
  }
}
export default ProductView;
