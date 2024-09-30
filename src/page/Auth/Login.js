import React, {useContext} from "react";
import '../../style/Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Auth/Auths';

//제가 만들 때 로그인이랑 회원가입이랑 바꿔가지고ㅠㅠ 여기가 Login페이지 맞아여

function Signup(){
    const navigate = useNavigate(); // useNavigate 훅 사용
    const { login } = useContext(AuthContext);

    const handleLogin = () => {
        // 로그인 버튼 클릭 시 메인 페이지로 이동
        login();
        navigate("/");
    };

    return(
        <div className="Sign">
            <div className="S-under">
                <div className="Signupline"></div>
                <input type="text" className="Signupid" placeholder="아이디" />
                <input type="text" className="Signuppass" placeholder="비밀번호" />
            </div>

            <div className="SignCheck">
                <div className="CheckboxWrapper">
                    <input type="checkbox" id="login" name="login" />
                    <label htmlFor="login">로그인 상태 유지</label>
                </div>
                <button className="Signlogin" onClick={handleLogin}>로그인</button>
                <Link to="/Signup" className="LinkSign">회원가입</Link>
            </div>


        
            <div className="Signupline2"></div>

            <div className="Signfooter">
            상호명 :  RoomGenius<br/>
            대표자 :  HaHaHa<br/>
            사업장주소: 한림대학길 1길<br/>
            전화번호: 010-2388-1921<br/>
            문의: @hallym
            </div>
        </div>
    );
}

export default Signup;
