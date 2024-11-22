import React from "react";
import './FrontPage.css';



const CustomerFrontend =()=>{

    const handleClose = () => {
        window.close()
      };

    return(  
        <div className="Background-Body">
            <div className="Content-Container">
                <div className="Content1">
                    <h3>Welcome To: </h3>
                    <h1>The Cocktail Hub</h1>
                </div>
                <div className="Content2">
                    <a href="/Shop"><button id="Button1" onClick={handleClose}>About Cocktail Hub</button></a>
                    <a href="/CocktailShop"><button id="Button2">Go To Shop</button></a>
                </div>
            </div>                 
        </div>
    )
}




export default CustomerFrontend;