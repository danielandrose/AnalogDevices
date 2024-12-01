import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import { BarChart } from '@mui/x-charts/BarChart';
import {Footer} from "./Footer"

export default function TyrePressureDetails() {
  const [seriesNb, setSeriesNb] = React.useState(1);
  const [itemNb, setItemNb] = React.useState(5);

  const handleItemNbChange = (event, newValue) => {
    if (typeof newValue !== 'number') {
      return;
    }
    setItemNb(newValue);
  };

  return (
    <div className="box">
    <h2>Tyre Pressure Analysis</h2>
    <Box sx={{ width: '100%' }}>
      <BarChart
        height={350}
        series={series
          .slice(0, seriesNb)
          .map((s) => ({ ...s, data: s.data.slice(0, itemNb) }))}
      />
      <Typography id="input-item-number" gutterBottom className="slider">
        Number of items
      </Typography>
      <Slider
        className="slider"
        value={itemNb}
        onChange={handleItemNbChange}
        valueLabelDisplay="auto"
        min={1}
        max={20}
        aria-labelledby="input-item-number"
      />
    </Box>
    <Footer /></div>
  );
}

const highlightScope = {
  highlight: 'series',
  fade: 'global',
};

const series = [
  {
    label: 'Tyre Pressure History',
    data: [
      56,89,45,91,45,89,96,
    ],
  }
].map((s) => ({ ...s, highlightScope }));