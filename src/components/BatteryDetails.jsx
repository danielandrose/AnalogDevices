import * as React from 'react';

export default function BatteryDetails() {const [seriesNb, setSeriesNb] = React.useState(1);
    const [itemNb, setItemNb] = React.useState(5);
  
    const handleItemNbChange = (event, newValue) => {
      if (typeof newValue !== 'number') {
        return;
      }
      setItemNb(newValue);
    };
  
    return (
      <Box sx={{ width: '100%' }}>
        <BarChart
          height={300}
          series={series
            .slice(0, seriesNb)
            .map((s) => ({ ...s, data: s.data.slice(0, itemNb) }))}
        />
        <Typography id="input-item-number" gutterBottom>
          Number of items
        </Typography>
        <Slider
          value={itemNb}
          onChange={handleItemNbChange}
          valueLabelDisplay="auto"
          min={1}
          max={20}
          aria-labelledby="input-item-number"
        />
      </Box>
    );
  }
  
  const highlightScope = {
    highlight: 'Battery Percentge History',
    fade: 'global',
  };
  
  const series = [
    {
      label: 'Battery Percentge History',
      data: [
        56,89,45,91,45,89,96,
      ],
    }
  ].map((s) => ({ ...s, highlightScope }));