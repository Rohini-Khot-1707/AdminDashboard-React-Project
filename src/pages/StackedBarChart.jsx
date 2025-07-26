import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490,2000, 2780, 1890, 2390, 3000];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300,2400, 1398, 9800, 3908, 4800];
const xLabels = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'June',
  'July',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export default function StackedBarChart() {
  return (
    <BarChart
      height={300}
      series={[
        { data: pData, label: 'Developers', id: 'pvId', stack: 'total' },
        { data: uData, label: 'Testers', id: 'uvId', stack: 'total' },
      ]}
      xAxis={[{ data: xLabels }]}
      yAxis={[{ width: 50 }]}
       slotProps={{
    bar: {
      barWidth: 2, 
    },
  }}
    />
  );
}
