import React,{useState,useEffect} from 'react'
import { API_URL } from '../constants/URL'
import axios from 'axios'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


function TyrePressure(){
    const [percentages,setPercentages]=useState([])
    const [percent,setPercent]=useState(0)
    const callGetApi=async()=>{
        try {
            const response = await axios.get(`${API_URL}tyre-pressure`);
            const data = response.data;
      
            if (Array.isArray(data) && data.length > 0) {
              setPercentages(data);
              setPercent(data[data.length - 1].value); 
            } else {
              console.error("Unexpected data format: ", data);
            }
          } catch (error) {
            console.error("Error fetching data: ", error);
          }
    }
    useEffect(()=>{
        callGetApi()
    },[])
    return (
        <div className="battery">
            <h3>Tyre Pressure Percentage</h3>
            <CircularProgressbar className="progress-bar" value={percent} text={`${percent}%`} />
            <button className="detailsButton">View Details</button>
        </div>
    )
}

export default TyrePressure