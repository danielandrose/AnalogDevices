import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import { BarChart } from '@mui/x-charts/BarChart';
import { Footer } from './Footer';
import { useSelector } from 'react-redux';

export default function BatteryDetails() {
  const [toggle,setToggle]=useState(0);

  const toggleButtonStyle={
    backgroundColor:"gray"
  }

  const batteryData = useSelector((state) => state.BatteryPercentages || []);
  
  const flattenedData = batteryData.flat();
  console.log("Flattened Battery Data:", flattenedData);

  // Format the data (dates and values)
  const formattedData = flattenedData.map((item) => ({
    date: new Date(item.recordedAt),
    value: item.value,
  }));

  const groupDataByPeriod = (period) => {
    let groupedData = {};
  
    formattedData.forEach((item) => {
      let groupKey;
  
      if (period === 'day') {
        groupKey = item.date.toDateString();
      } else if (period === 'month') {
        groupKey = item.date.getMonth() + 1;
      } else if (period === 'hour') {
        // Include date and hour for unique grouping
        groupKey = `${item.date.toDateString()} ${item.date.getHours()}:00`;
      }
  
      if (!groupedData[groupKey]) {
        groupedData[groupKey] = { sum: 0, count: 0 };
      }
      groupedData[groupKey].sum += item.value;
      groupedData[groupKey].count += 1;
    });
  
    const averagedData = Object.keys(groupedData).map((key) => ({
      label: key, // Use the full group key as the label
      value: groupedData[key].sum / groupedData[key].count,
    }));
  
    return averagedData;
  };
  

  // States to control data for each period
  const [selectedPeriod, setSelectedPeriod] = React.useState('day'); // Default to 'day'
  const [itemNb, setItemNb] = React.useState(7); // Limit to 7 items for now

  // Handle the period change (day, month, hour)
  const handlePeriodChange = (newPeriod) => {
    if(newPeriod==='day'){
      setToggle(0)
    }
    else if(newPeriod==='month'){
      setToggle(1)
    }
    else if(newPeriod==='hour'){
      setToggle(2)
    }
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
      <div className='toggle'>
        <button 
          style={toggle==0?toggleButtonStyle:null} 
          onClick={() => handlePeriodChange('day')}>
            Day
        </button>
        <button 
          style={toggle==1?toggleButtonStyle:null} 
          onClick={() => handlePeriodChange('month')}>
            Month
        </button>
        <button 
          style={toggle==2?toggleButtonStyle:null} 
          onClick={() => handlePeriodChange('hour')}>
            Hour
        </button>
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
              data: groupedData.slice(0, itemNb).map((item) => item.label), // Include full date and hour
              label: "Date & Hour",
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
