import React from 'react';
import './Footer.css';
import img from '../images/fb.png';

const Footer=()=>{




    return(
        
            
            <div className="footer">
            <div className="text">
               <p>Address</p> 
               <p>phone number</p>
            </div>
            
            <div className="img">
                <img src={img} alt="uh"/>
            </div>
            
            
            
            

        </div>
    )
}
export default Footer;