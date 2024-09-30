import React, { useContext, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../page/Auth/Auths';
import { GoChevronDown } from "react-icons/go"; // 아이콘 가져오기
import '../style/Header.css';
import Modal from './Modal';
import Modalprofile from '../components/Modalproflie';
import RoomIcon from '../assets/이미지/user.png'

function Header() {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false); // 드롭다운 상태 관리
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 관리
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isProfileInfoOpen, setIsProfileInfoOpen] = useState(false);

  const handleLogout = () => {
    if (window.confirm('정말 로그아웃 하시겠습니까?')) {
      logout();
      navigate('/'); // 로그아웃 후 메인 페이지로 이동
    }
  };

  const toggleProfileInfo = (isOpen) => {
    if(isOpen || isProfileInfoOpen){
      setDropdownOpen(isOpen);
    }; // 프로필 정보 창 열고 닫기
  };

  const handleProfileClick = () => {
    navigate('/profile'); // 프로필 페이지로 이동
  };

  const toggleDropdown = (isOpen) => {
    setDropdownOpen(isOpen);
  };

  const handleSecession = async () => {
    setIsModalOpen(false); // 모달 닫기
    logout();
    navigate('/');
    // 여기에 회원 탈퇴 API 요청을 추가
    // ...
  };

  return (
    <header className='Header'>
      <Link to="/" className="RoomGenius">Room Genius</Link>
      <nav className="hader-nav">
        {isLoggedIn && (
          <div className='Roomchange-nav'>
            <Link to="/gallery" className="gallery-nav">인테리어 갤러리</Link>
            <Link to="/interior" className="intetiot-nav">AI 인테리어</Link>
          </div>
        )}
        {isLoggedIn ? (
          <div className="Room-menu" ref={dropdownRef}
            onMouseEnter={() => toggleDropdown(true)} // 마우스를 올리면 드롭다운 열림
            onMouseLeave={() => toggleDropdown(false)} // 마우스가 떠나면 드롭다운 닫힘
          >
            <div className="Roomprofile" onClick={toggleProfileInfo}>
            <img src={RoomIcon} alt="프로필" className="Roomicon" /> 
            </div>
            {dropdownOpen && (
              <div className="Room-dropdown">
                <div className='dropupload'>
                  
                <img src={RoomIcon} alt="프로필" className="dropicon" onClick={() => setIsProfileModalOpen(true)}/>
                <div className='dropname'>홍길동</div>
                </div>
                <div className='dropline'></div>
                <div className="Roomlogout" onClick={handleLogout}>로그아웃</div>
                <div className='dropline2'></div>
                <div className="Roomout" onClick={(handleSecession) => setIsModalOpen(true)}>회원탈퇴</div>
              </div>
            )}
          </div>
        ) : (
          <div className='auth-links'>
            <Link to="/login">로그인</Link>
            <Link to="/Signup">회원가입</Link>
          </div>
        )}
      </nav>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onConfirm={handleSecession} 
      />

   <Modalprofile 
        isOpen={isProfileModalOpen} 
        onClose={() => setIsProfileModalOpen(false)} 
      />
    </header>
  );
}

export default Header;
