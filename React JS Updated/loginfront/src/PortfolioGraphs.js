import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";
import 'chartjs-plugin-datalabels';

let chartData;
class PortfolioGraphs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    chartData = {  
      labels: this.props.productNameLabel,
      datasets: [
        {
          label: this.props.productNameLabel,
          backgroundColor: "rgba(75,192,192,1)",
          borderColor: "rgba(0,0,0,1)",
          borderWidth: 2,
          data: this.props.productData,
        },
      ],
    };
    
  }
  componentDidMount() {}

  render() {
    chartData = {
        
      type: 'horizontalBar',
      labels: this.props.productNameLabel,
      fontSize: 20,
      datasets: [
        {
          label: "",
          backgroundColor: [
            "rgba(232,119,34,1)",
            "rgba(85,86,90,1)",
            "rgba(234,170,0,1)",
            "rgba(59,0,131,1)",
            "rgba(99,102,106,1)",
            "rgba(208,208,206,1)",
            "rgba(234,170,0,1)",
            "rgba(99,102,106,1)",
            "rgba(162,43,56,1)",
            "rgba(59,0,131,1)",
          ],
          offset: true,
          borderColor: " #FFFFFF",
          borderWidth: 0,
          barPercentage: 0.8,
          barThickness: 80,
          maxBarThickness: 85,
          minBarLength: 2,
          categoryPercentage: 1.0,
          barPercentage: 0.5,
          hoverBorderWidth: 3,
          maxBarLength: 6,
          hoverBorderColor: 'rgba(0,0,0,1)',
          data: this.props.productData,
        },
      ],
    };
    return (
      <div>
        <div>
          <Bar 
            data={chartData}
            options={{
              scales: {
                yAxes: [{
                  label: 'Product names',
                  ticks: {
                    beginAtZero: true,
                    min: 0
                  }    
                }]
              },
              plugins:{
                  datalabels:{color:"white",
                  anchor: 'center',
                  align: 'center',
                  clamp: true,
                  font: 20,
                  labels: this.props.productNameLabel
              }
              },
              barPercentage: 0.5,
              title: {
                display: true,
                text: `${this.props.displayName} (${this.props.unit_of_measurement} ${this.props.timeline})`,
                fontSize: 25,
              },
              legend: {
                label: this.props.productNameLabel,
                display: false,
                position: "right",
                
              },
              layout:{
                  padding: {
                      left: 50,
                      right:0,
                      bottom: 0,
                      top: 10
                  }
                  
              }
            }}
          />
        </div>
      </div>
    );
  }
}

export default PortfolioGraphs;
