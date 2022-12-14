import React from "react"
import { useState } from "react";
import {Link} from 'react-router-dom'
import logo from '../adam-logo.png'
import "./NavBarStyles.css";
const NavBar = ()=>{
   
    
    const [isClicked, setIsClicked] = useState(false)
    const barClicked = () => {
        if(isClicked){
            setIsClicked(false);
        } else {
            setIsClicked(true);
        }
    }
    return (
        <>
         <nav>
            <Link to="/"><img src={logo} alt="logo"/></Link>
            <div id="name">Adam Moynihan</div>
            <div>
                <ul id="navbar" className={isClicked ? "#navbar active" :"#navbar"}>
                    <li><Link className="active" to="/">Home</Link></li>
                    <li><Link to="/games">Games</Link></li>
                    <li><Link to="/github">Github</Link></li>
                    <li><Link to="/about">About</Link></li>

                </ul>
            </div>
            <div id="mobile">
                <i id="bar" onClick={barClicked} className={isClicked ? 'fas fa-times': 'fas fa-bars' }></i>
            </div>

         </nav>
       
         
        </>
    )

}
export default NavBar