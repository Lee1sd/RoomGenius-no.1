import React from "react";


function Footer() {
    const footerinfo = {
        position: 'relative',
        display: 'flex',
        textAlign: 'center',
        lineHeight: '2em',
        top: '1800px',
        backgroundColor: '#DCCAB5',
        width: '100%',
        height: '200px',
        bottom: '0', // 화면의 하단에 고정
    } 

    const footerbox = {
        position:'relative',
        left:'45%'
    }

    return(
        <div style={footerinfo}>
            <div style={footerbox}>
            상호명 :  RoomGenius<br/>
            대표자 :  HaHaHa<br/>
            사업장주소: 한림대학길 1길<br/>
            전화번호: 010-2388-1921<br/>
            문의: @hallym
            </div>
        </div>
    );
}

export default Footer;