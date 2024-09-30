import React from "react";
import Interiormenu from "./interiormenu";
import UploadImage from '../../assets/이미지/upload.png';
import TextImage from '../../assets/이미지/textbox.png';
import '../../style/interior.css';
import {Link} from 'react-router-dom';

function Interior() {
    return (
        <div className="interiorbox">
            <Interiormenu />
            
            <div className="Mycont">
                <div className="MakeMypro">
                    <Link to='/startpropic' className="startpropic">
                        <img src={UploadImage} className="Myproupload" alt="Upload" />
                    </Link>
                </div>
                <div className="Myproline"></div>
                <div className="Myprointro">
                    <h3>새로운 프로젝트</h3>
                    사진을 업로드하여 나만의 공간을 만들어보세요.
                </div>
            </div>

            <div className="Mycont2">
                <div className="MakeMypro">
                    <Link to='/startprotext' className="startprotext">
                        <img src={TextImage} className="Myprotext" alt="Text" />
                    </Link>
                </div>
                <div className="Myproline2"></div>
                <div className="Textprointro">
                    <h3>새로운 프로젝트</h3>
                    텍스트로 간편하게 나만의 공간을 만들어보세요.
                </div>
            </div>
        </div>
    );
}

export default Interior;
