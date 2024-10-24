import React from 'react';
import '../cssFiles/Monitor.css'

function Monitor(){
    return (
        <div>
            <div>
                <div>
                    <h1>Is Driver is awake</h1>
                    <h2>Yes</h2>
                </div>
                <div>
                    <div>
                        <h1>Battery percentage</h1>
                        <h3>87%</h3>
                    </div>
                    <div>
                        <h1>Air Pressure</h1>
                        <h3>87%</h3>
                        <h3>Safe</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Monitor;