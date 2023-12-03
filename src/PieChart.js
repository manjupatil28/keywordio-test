import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Paper } from '@material-ui/core';
import { Chart, ArcElement, CategoryScale, Legend, Title } from 'chart.js';

// Register the elements
Chart.register(ArcElement, CategoryScale, Legend, Title); 

const PieChart = ({ data, column }) => {
    const chartData = {
        labels: data.filter(item => item.group !== 'Total').map(item => item.group),
        datasets: [{
          data: data.filter(item => item.group !== 'Total').map(item => item[column]),
          backgroundColor: ['orange', 'blue', 'black'],
        }]
    };
  
    return (
        <Paper style={{ height: '400px',width:'670px',border:'none'}}>
            <Doughnut 
                data={chartData} 
                options={{
                    responsive: true,
                    cutout:'70%',
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: true,
                            position: 'right',
                        },
                    },
                }}
            />
        </Paper>
    );
};

export default PieChart;