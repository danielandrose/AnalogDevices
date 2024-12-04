import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import { BarChart } from '@mui/x-charts/BarChart';
import { Footer } from "./Footer";
import { useSelector } from 'react-redux';

export default function BatteryDetails() {
  const batteryData = useSelector((state) => state.BatteryPercentages || []);
  
  const formattedData = batteryData.map((item) => ({
    value: item.value,  // battery percentage
  }));

  console.log('Formatted Battery Data:', formattedData); // Log the formatted data

  const [itemNb, setItemNb] = React.useState(Math.min(7, formattedData.length)); // Ensure it doesn’t exceed available data

  console.log('Items to display:', itemNb); // Log how many items will be displayed

  const handleItemNbChange = (event, newValue) => {
    if (typeof newValue === 'number') {
      setItemNb(newValue);
    }
  };

  return (
    <div className="box">
      <h2>Battery Percentage Analysis</h2>
      <Box sx={{ width: '100%' }}>
        <BarChart
          height={350}
          series={[
            {
              label: 'Battery Percentage History',
              data: formattedData.slice(0, itemNb).map((item) => item.value), // Only battery percentage values for y-axis
            },
          ]}
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
          max={Math.min(20, formattedData.length)}
          aria-labelledby="input-item-number"
        />
      </Box>
      <Footer />
    </div>
  );
}
