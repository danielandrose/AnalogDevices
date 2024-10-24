import React from 'react';
import '../cssFiles/Monitor.css'

function Monitor() {
    return (
        <div className='main-monitor'>
            <div className="driver-awake">
                <h1>Is Driver is awake</h1>
                <h2>Yes</h2>
            </div>
            <div className="sub-monitor">
                <div>
                    <h1>Battery percentage</h1>
                    <h3>80%</h3>
                </div>
                <div>
                    <h1>Air Pressure</h1>
                    <h3>87%    <span>Safe</span></h3>
                </div>
            </div>
        </div>
    )
}

export default Monitor;