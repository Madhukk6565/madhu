import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../components/home.css"
import Carousel from './Carousel';






 export function Homepage(){
    return(
        
    <div >
        
        
        <nav>
            <label class="logo">NUTRITIONIST </label>
            <ul>
                <li><Link class="all" to="/H">Home</Link></li>
                <li><Link  class="all" to="/N">Nutrition</Link></li>
                <li><Link  class="all" to="/Fav">Favourite food </Link></li>
                <li><Link  class="all" to="/R">Recommended food</Link></li>
                <li><Link class="all"  to="/M">Meal</Link></li>
                <li ><Link class='all' to="/">Logout</Link></li> 
                
            </ul>
        </nav> 
        
         
    </div>
    )
 }


 export default Homepage;
 