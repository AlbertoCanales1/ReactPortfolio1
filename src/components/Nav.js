import React from "react";

const header= {
    style: "padding-top: 15px margin-right: 20px; float: right; font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;font-size: 20px;"
}

function Nav(){
    return(
    <div>
 <nav class="header"/> 
        <h1>Alberto Canales</h1>
        <nav>
            <ul>
                <li>
                    <a href="#search-engine-optimization">About me</a>
                </li>
                <li>
                    <a href="#online-reputation-management">Works</a>
                </li>
                <li>
                    <a href="#footer">Contact me</a>
                </li>
                <li>
                    <a href="https://docs.google.com/document/d/1XDNfLyUS9N60RoTXVM35RKgHnX3luS3dEBPyGbhwCb8/edit">Resume</a>
                </li>
            </ul>
        </nav>

    </div>
    )
}
export default Nav;