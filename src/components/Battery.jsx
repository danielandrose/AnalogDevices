import React,{useState,useEffect} from 'react'
import { API_URL } from '../constants/URL'
import axios from 'axios'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useNavigate } from 'react-router-dom';
import { addBatteryPercentage } from '../slices/batterySlice';
import { useDispatch } from 'react-redux';

function Battery(){
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const [percentages,setPercentages]=useState([])
    const [percent,setPercent]=useState(0)
    function BatteryDetails(){
      navigate("battery-details")
    }
    const callGetApi=async()=>{
        try {
            const response = await axios.get(`${API_URL}batteryPercentage`);
            const data = response.data;
      
            if (Array.isArray(data) && data.length > 0) {
              setPercentages(data);
              dispatch(addBatteryPercentage(percentages))
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
    })
    return (
        <div className="battery">
            <h3>Battery Percentage</h3>
            <CircularProgressbar className="progress-bar" value={percent} text={`${percent}%`} />
            <button 
              className="detailsButton"
              onClick={()=>{
                BatteryDetails()
              }}
            >View Details</button>
        </div>
    )
}

export default Battery