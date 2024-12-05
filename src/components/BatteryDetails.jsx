import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import { BarChart } from '@mui/x-charts/BarChart';
import { Footer } from './Footer';
import { useSelector } from 'react-redux';

export default function BatteryDetails() {
  const batteryData = useSelector((state) => state.BatteryPercentages || []);
  
  const flattenedData = batteryData.flat();
  console.log("Flattened Battery Data:", flattenedData);

  // Format the data (dates and values)
  const formattedData = flattenedData.map((item) => ({
    date: new Date(item.recordedAt),
    value: item.value,
  }));

  // Function to group data by day, month, or hour and calculate averages
  const groupDataByPeriod = (period) => {
    let groupedData = {};

    // Group data based on the selected period and calculate average
    formattedData.forEach((item) => {
      let groupKey;

      if (period === 'day') {
        groupKey = item.date.getDate(); // Use day of month as the group key
      } else if (period === 'month') {
        groupKey = item.date.getMonth() + 1; // Use month (1-12) as the group key
      } else if (period === 'hour') {
        groupKey = item.date.getHours(); // Use hour (0-23) as the group key
      }

      // Calculate the sum of values for the group and count occurrences
      if (!groupedData[groupKey]) {
        groupedData[groupKey] = { sum: 0, count: 0 };
      }
      groupedData[groupKey].sum += item.value;
      groupedData[groupKey].count += 1;
    });

    // Calculate averages for each group
    const averagedData = Object.keys(groupedData).map((key) => ({
      label: parseInt(key, 10), // Convert key back to integer
      value: groupedData[key].sum / groupedData[key].count, // Average value
    }));

    // Reverse the order of data (most recent first)
    return averagedData.reverse(); // Reversing to show the most recent data first
  };

  // States to control data for each period
  const [selectedPeriod, setSelectedPeriod] = React.useState('day'); // Default to 'day'
  const [itemNb, setItemNb] = React.useState(7); // Limit to 7 items for now

  // Handle the period change (day, month, hour)
  const handlePeriodChange = (newPeriod) => {
    setSelectedPeriod(newPeriod);
    setItemNb(7); // Reset item count when period changes
  };

  // Get the grouped and averaged data for the selected period
  const groupedData = groupDataByPeriod(selectedPeriod);

  // Handle the number of items to display
  const handleItemNbChange = (event, newValue) => {
    if (typeof newValue === "number") {
      setItemNb(newValue);
    }
  };

  return (
    <div className="box">
      <h2>Battery Percentage Analysis</h2>
      {/* Buttons to toggle between day, month, and hour */}
      <div>
        <button onClick={() => handlePeriodChange('day')}>Day</button>
        <button onClick={() => handlePeriodChange('month')}>Month</button>
        <button onClick={() => handlePeriodChange('hour')}>Hour</button>
      </div>

      <Box sx={{ width: "100%" }}>
        <BarChart
          height={350}
          series={[
            {
              label: "Battery Percentages",
              data: groupedData.slice(0, itemNb).map((item) => item.value),
            },
          ]}
          xAxis={[
            {
              scaleType: 'band',
              data: groupedData.slice(0, itemNb).map((item) => {
                return item.label; // For months, this will be numbers 1-12
              }),
              label: selectedPeriod.charAt(0).toUpperCase() + selectedPeriod.slice(1), // X-axis label for period (Day, Month, Hour)
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
          max={Math.min(20, groupedData.length)}
          aria-labelledby="input-item-number"
        />
      </Box>
      <Footer />
    </div>
  );
}
