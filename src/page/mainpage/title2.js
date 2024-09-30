import React from "react";
import '../../style/title2.css';

function Title2(){
    return(
        <div className="title2cont">

            <div className="title2BE">
            <img src={require('../../assets/이미지/nonepreview.png')} className="title2" />

            <div className="title2Before">
                <h3>환상적인 인테리어, 손 끝에서 시작됩니다!</h3><br/>
                <p>사진을 찍고 간단한 요구 사항을 입력하면, 당신의<br/>
                공간이 꿈꾸던 대로 변신하는 마법 같은 경험을 선사합니다.</p>
            </div>
            </div>

            <div className="title2AF">
            

            <div className="title2After">
                <h3>어떻게 가능한가요?</h3><br/>
                <p>저희 웹사이트는 첨단 인공지능 기술을 활용하여 당신이 제공한 
                사진을 기반으로 맞춤형 인테리어 디자인을 제안합니다. 간단하게 
                몇 장의 사진과 원하는 스타일, 색상, 가구 배치에 대한 정보를 입력해보세요.</p>
            </div>

            <img src={require('../../assets/이미지/fullpreview.png')} className="titledown2" />

            </div>
        </div>

    );
}

export default Title2;