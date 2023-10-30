import BootstrapTable from 'react-bootstrap-table-next';

import Chart from "chart.js/auto";

import { CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend  } from "chart.js";

import { Bar } from "react-chartjs-2";

export const options = {
    responsive: true,
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      yRMSE: {
           type: 'linear',
           min: 24,
           position: 'left',
           title: {
            display: true,
            text: 'RMSE',
            color: 'red',
            font: {
              size: 18,
            }},
            ticks: {
              color: 'red',
            }
      },
      yCorr: {
          type: 'linear',
          position: 'right',
          max: 1.0,
          title: {
          display: true,
          text: 'Corr',
          color: 'blue',
          font: {
              size: 18,
          }},
          ticks: {
              color: 'blue',
          },
          grid: {
            drawOnChartArea: false, // only want the grid lines for one axis to show up
          },
      }
  
    }
  };
  
  
export const makeColumns = e => {
    const Formatter = (cell, row, rowIndex, extraData) => {
        return(row.paper ? <a href={row.paper}>Paper</a>: null)

    }
    return [
        {
            dataField: 'rank',
            text: 'Rank',
            sort: true
        },
        {
            dataField: 'id',
            text: 'ID',
            sort: true
        }, 
        {  
            dataField: 'paper',
            text: 'Paper',
            formatter: Formatter,
        },
        {
            dataField: 'intrusive',
            text: 'Intrusive',
            sort: true,
        },
        {
            dataField: 'RMSE',
            text: 'RMSE',
            sort: true,
        }, 
        {
            dataField: 'corr',
            text: 'Corr',
            sort: true,
        }
    ];
}

export default function ResultsDisplay({ data }) {
    const bar_data = {
        labels: data.map((row) => row.id),
        datasets: [
          {
            label: "RMSE",
            data: data.map((row) => row.RMSE),
            backgroundColor: "rgba(255, 99, 132, 0.5)",
            borderColor: "RED",
            yAxisID: 'yRMSE',
          },
          {
            label: "Corr",
            data: data.map((row) => row.corr),
            backgroundColor: "rgba(53, 162, 235, 0.5)",
            borderColor: "BLUE",
            yAxisID: 'yCorr',
          },
        ],
      };
      
    return (
        <div>
            
            <Bar data={bar_data} options={options} />

            <p style={{paddingTop: 40}} />

            <center>
            <BootstrapTable bootstrap4 keyField='id' data={ data } columns={ makeColumns() }  />
            </center>
        </div>
    );
}