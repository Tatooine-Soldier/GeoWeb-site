import React from 'react'

export default function Home() {
    

    return (
        <div className="main">
            <section className="first-section-home">
                <div>
                    <b>GEOWEB</b>
                </div>
                <div>
                    <canvas id="canvas"></canvas>
                    <span id="hide-map">
                        <img id="img" src="data:image/png;base64,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"
                        />
                    </span>
                </div>
            </section>
            <section className="second-section-home">
                <p>GeoWeb is a non-profit geographical organisation. We do various tasks, such as landscape surveying, metal detection and cartography.
                This website explores some of our services and explains our origins as an organisation.</p>
                <p>If you want t avail of these services, please click <a href="Contact">Here</a> to contact us. We are always pleased to serve new customers.</p>
            </section>
            {window.onload = function(){
            let canvas = document.getElementById('canvas');
            let ctx = canvas.getContext('2d');
            let img = document.getElementById('img');
            ctx.drawImage(img, 0,0);
            }}
        </div>
    )
    
}
