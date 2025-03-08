import React from "preact/compat";
import './VedioElevate.css'

export const ElevateManagementComponent = () => {
    return(
        <>
            <div className="elevate-container">
                <h2>Elevate your video strategy</h2>
                <h1>Seamless Video Management</h1>
                <p>Transform how you engage with your audience using Media+</p>
            </div>
            <div class="time-box-container">
                <div>
                    <h1>2.5X</h1>
                    <h2>Lead <br /> Generation</h2>
                    <p>Boost watch time and drive more leads</p>
                </div>
                <div>
                    <h1>3X</h1>
                    <h2>Publish Content <br /> Faster with AI</h2>
                    <p>Tailor made to get more view</p>
                </div>
                <div>
                    <h1>30min</h1>
                    <h2>Setup</h2>
                    <p>Set up your video CMS in less than 30 minutes</p>
                </div>

            </div>
            <button class="demo-btn3">Request a Demo</button>
        </>
    )
}