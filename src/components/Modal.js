// src/components/Modal.js
import React from 'react';
import '../style/Modal.css'; // 필요한 경우 CSS 스타일 추가

const Modal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null; // 모달이 열려 있지 않으면 아무 것도 렌더링하지 않음

  return (
    <div className="modal-overlay">    
      <div className="modal-content">
        <h3>회원탈퇴</h3>
        <p>가입된 회원정보와 작성한 프로젝트는 모두 삭제됩니다.<br />
        탈퇴 후 같은 계정으로 재가입 시 기존 데이터는 복원되지 않습니다.<br />
        회원 탈퇴를 진행하시겠습니까?</p>
        <div className='modal-buttons'>
        <button onClick={onClose} className='Roommodalclose'>취소</button>
        <button onClick={onConfirm} className='Roommodalfirm'>탈퇴하기</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
