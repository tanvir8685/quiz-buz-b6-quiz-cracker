import React from 'react';
import { Tooltip } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { Line, LineChart,  XAxis, YAxis } from 'recharts';

const Chart = () => {
    const chartData=useLoaderData();
    const data=(chartData.data);
    console.log(data)
    return (
        <div>
            
            This is my chart
            <LineChart width={300} height={350} data={data}>
            <Line type="monotone" dataKey="total" stroke="#82ca9d" />
            <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
            </LineChart>
        </div>
    );
};

export default Chart;