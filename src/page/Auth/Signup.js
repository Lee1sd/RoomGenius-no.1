import React,{useContext} from "react";
import '../../style/Signup.css';
import{ Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Auth/Auths';

function Login(){
    const navigate = useNavigate();
    const { sign } = useContext(AuthContext);

    const hadleSign = () => {

        sign();
        navigate("/");
    }

    return(
        <div className="H-under">
            <div className="Loginline"></div>
            <img src={require('../../assets/이미지/user.png')} className="Roomuser"></img>
            <input type="text" className="Roomid" placeholder="아이디"/>
            <input type="text" className="RoomPass"placeholder="비밀번호"/>
            <input type="text" className="PassCheck" placeholder="비밀번호 확인"/>
            <input type="text" className="Roomname" placeholder="이름을 입력하세요"/>

            <button className="Roomjoin" onClick={hadleSign}> 가입하기 </button>
            
            <div className="Loginline2"></div>

            <div className="Loginfooter">
            상호명 :  RoomGenius<br/>
            대표자 :  HaHaHa<br/>
            사업장주소: 한림대학길 1길<br/>
            전화번호: 010-2388-1921<br/>
            문의: @hallym
            </div>
        

        </div>
    );
}

export default Login;