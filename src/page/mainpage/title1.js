import React from "react";
import '../../style/title1.css';

function Title1(){
    return(
      <div className="titlecont">
        <h3>Welcome to RoomGenius</h3><br/>
        새로운 보금자리 인테리어 하기 어려우셨나요?<br/>
        RoomGenius에서 손 쉽게 인테리어에 도전해 보세요!!


            <div className="titlepic">
                <img src={require('../../assets/이미지/자취intro2.png')} className="intro2" />
                <img src={require('../../assets/이미지/자취intro.png')} className="intro1" />
                <img src={require('../../assets/이미지/333.jpg')} className="intro3" />
            </div>
      </div>

    );
}

export default Title1;