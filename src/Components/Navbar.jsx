import "./Navbar.css";

import { IoMdSpeedometer } from "react-icons/io";
import { BsBrightnessHigh } from "react-icons/bs";
import { MdOutlineDarkMode } from "react-icons/md";



function Navbar(props)
{
    return <div className={props.dabba? "dark-navbar" : "navbar"} >
    
                <h1><IoMdSpeedometer />SpeedoTypen</h1>
                <div className="nav-right">
                       <p className="best-text">Best WPM : <span className="best-score">{props.best}</span></p> 
                     <button className="theme-toggle" onClick={props.changeTheme}>{props.dabba? <BsBrightnessHigh/> : <MdOutlineDarkMode/>}</button> 

                </div>    
    </div> 
}

export default Navbar;