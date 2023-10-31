import BootstrapTable from 'react-bootstrap-table-next';

import Chart from "chart.js/auto";

import { CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend  } from "chart.js";

import { Bar } from "react-chartjs-2";
import React, { useState } from 'react';

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
    const [barData, setBarData] = useState({
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
    });
      
    const onTableChange = (type, newState) => {
        console.log(type);
        console.log(newState);
        const sortField = newState.sortField;
        console.log(sortField);
        if (newState.sortOrder === 'asc') {
            newState.data.sort((a, b) => {
                const fieldA = a[sortField];
                const fieldB = b[sortField];
    
                if (fieldA === null && fieldB === null) {
                    return 0; // Treat both null values as equal
                } else if (fieldA === null) {
                    return 1; // Move null to the end
                } else if (fieldB === null) {
                    return -1; // Move null to the end
                } else if (typeof fieldA === 'number' && typeof fieldB === 'number') {
                    return fieldA - fieldB;
                } else {
                    return fieldA.toString().localeCompare(fieldB.toString());
                }
            });
        } else {
            newState.data.sort((a, b) => {
                const fieldA = a[sortField];
                const fieldB = b[sortField];
    
                if (fieldA === null && fieldB === null) {
                    return 0; // Treat both null values as equal
                } else if (fieldA === null) {
                    return -1; // Move null to the beginning
                } else if (fieldB === null) {
                    return 1; // Move null to the beginning
                } else if (typeof fieldA === 'number' && typeof fieldB === 'number') {
                    return fieldB - fieldA;
                } else {
                    return fieldB.toString().localeCompare(fieldA.toString());
                }
            });
        }
        // Update the bar_data object using setBarData
        setBarData((prevData) => ({
            ...prevData,
            labels: newState.data.map((row) => row.id),
            datasets: [
                {
                    ...prevData.datasets[0],
                    data: newState.data.map((row) => row.RMSE),
                },
                {
                    ...prevData.datasets[1],
                    data: newState.data.map((row) => row.corr),
                },
            ],
        }));
        }

    const remote= {
        filter: false,
        pagination: false,
        sort: true,
        cellEdit: false
    }

    const styles = {
        chartAndTableContainer: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center', // Optional, for centering text within elements
        }
      };
      
    console.log(data);
    return (
        <div style={styles.chartAndTableContainer}>
         
            <Bar data={barData} options={options} />

            <p style={{ paddingTop: 40 }} />
            
            <BootstrapTable bootstrap4 keyField='id' remote={remote} data={data} columns={makeColumns()} onTableChange={onTableChange} />
        </div>
    );
}