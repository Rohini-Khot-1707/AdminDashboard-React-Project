import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { completedProjects, projectFormatter } from './webUsageStats2';

export default function PieActiveArc() {
  return (
    <PieChart
      series={[
        {
          data: completedProjects,
          highlightScope: { fade: 'global', highlight: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
          projectFormatter,
        },
      ]}
      height={250}
      width={400}
    />
  );
}
