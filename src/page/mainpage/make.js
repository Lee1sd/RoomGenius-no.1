import React from "react";
import '../../style/make.css';
import { Link } from 'react-router-dom';


function Make(){
    

    return(
        <div className="Makebox">
            <div className="iconde" >
                <img src={require('../../assets/이미지/icon-design.png')} className="Makeicon" />
                <div className="Makeboxex">
                    <h3>당신의 공간, 당신의 스타일</h3><br/>
                    RoomGenius와 함께 시작해보세요!
                </div>

                <button className="Makebutton" >
                    <Link to='./interior'> 인테리어 하러 가기</Link>
                </button>
            </div>
        </div>
    );
}

export default Make;