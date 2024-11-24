import React from 'react';
import '../cssFiles/Monitor.css'
import Battery from './Battery';
import TyrePressure from './TyrePressure';

function Monitor() {
    return (
        <div className='main-monitor'>
            <div className="driver-awake">
                <h1>Is Driver is awake</h1>
                <hr/>
                <h2>Yes</h2>
            </div>
            <div className="sub-monitor">
                <Battery />
                <TyrePressure />
            </div>
        </div>
    )
}

export default Monitor;