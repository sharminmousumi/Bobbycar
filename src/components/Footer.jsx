import React from 'react';
import './Footer.css';
import img from '../images/fb.png';

const Footer=()=>{




    return(
        
            
        <div className="footer">
            <div className="text">
               <p>Address</p> 
               <p>Pontusgatan 1</p>
               <p>Göteborg 44812</p>
            </div>
            <div>
                <p>Kontakt</p>
                <p>email: bobbybuilder@gmail.com</p>
                <p>Telefon: 0708 12 34 56</p>
            </div>
            
            <div>
                <p>Följ oss på sociala medier!</p>
                <img className="socialmediaimg" src={img} alt="uh"/>
            </div>
            
            
            
            

        </div>
    )
}
export default Footer;