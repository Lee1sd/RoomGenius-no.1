import React from "react";
import '../../assets/이미지/ss.jpg';
import '../../style/intro.css';

function Intro(){
   return(
     <div className="introContainer">
        <div className="contour"></div>

        <div className="introRoom">
            <h3>Room<br/>Genius</h3> 
        </div>
        <div className="introinner">
            당신의 보금자리가<br/>
            더욱 아름답게 빛날 수 있도록
        </div>
     </div>

   );

}

export default Intro;
