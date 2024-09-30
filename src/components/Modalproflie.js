import React from "react";
import '../style/Modalprofile.css';

const Modalprofile = ({ isOpen, onClose }) => {
    if (!isOpen) return null; // 모달이 열려 있지 않으면 아무 것도 렌더링하지 않음

    return (
        <div className="changeinfocont">
        </div>
    );
};

export default Modalprofile;
