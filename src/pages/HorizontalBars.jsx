import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { dataset, valueFormatter } from './weather.js';

const chartSetting = {
  xAxis: [
    {
      label: 'Working Hours',
    },
  ],
  height: 400,
};

export default function HorizontalBars() {
  return (
    <BarChart
      dataset={dataset}
      yAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[{ dataKey: 'seoul', label: 'Punch-in/Punch-out', valueFormatter }]}
      layout="horizontal"
      {...chartSetting}
    />
  );
}
