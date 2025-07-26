import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

const SimpleLineChart = () => {
  const xLabels = ['01 Jan', '01 Feb', '01 Mar', '01 Apr', '01 May'];

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '600px',
        height: '163px', 
      }}
    >
      <LineChart
        xAxis={[
          {
            scaleType: 'point',
            data: xLabels,
            label: 'Employee status',
            labelStyle: {
              fontWeight: 'bold',
              fontSize: '15px',
            },
          },
        ]}
        yAxis={[
          {
            visible: false,
          },
        ]}
        series={[
          {
            data: [20, 35, 45, 30, 55],
          },
        ]}
        grid={{ horizontal: false }}
      />
    </div>
  );
};

export default SimpleLineChart;
