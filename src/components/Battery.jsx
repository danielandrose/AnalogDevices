import React,{useState,useEffect} from 'react'
import { API_URL } from '../constants/URL'
import axios from 'axios'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


function Battery(){
    
    const [percentages,setPercentages]=useState([])
    const [percent,setPercent]=useState(0)
    const callGetApi=async()=>{
        const data=await axios.get(API_URL+"batteryPercentage")
        setPercentages(data.data)
        if (data.length > 0) {
            setPercent(data[data.length - 1].value);
        }
    }
    useEffect(()=>{
        callGetApi()
    },[])
    return (
        <div className="battery">
            <h3>Battery Percentage</h3>
            <CircularProgressbar className="progress-bar" value={percent} text={`${percent}%`} />
            <button className="detailsButton">View Details</button>
        </div>
    )
}

export default Battery