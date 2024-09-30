import React from "react";
import '../../style/interiormenu.css';
import FolderImage from '../../assets/이미지/folder.png';
import ShareImage from '../../assets/이미지/share.png';
import DelImage from '../../assets/이미지/delete.png';
import { Link } from "react-router-dom";


function Interiormenu(){
    return(
        <div className="Interiorcont">
            <div className="interiorline"></div>
            <div className="projects">

            <div className="inteProject">
                <Link to="/interior" className="Links">
                <div className="Probox">
                <img src={FolderImage} className="folder"></img>
                </div>
                내 프로젝트 </Link>
               
            </div>

            <div className="inteshare"> 
            <Link to="/sharepage" className="Links">
                <div className="sharebox">
                    <img src={ShareImage} className="share"></img>
                </div>
                공유 프로젝트 </Link>
            </div>

            <div className="intedel">
            <Link to="/deletepage" className="Links"> 
                <div className="delbox">
                 <img src={DelImage} className="Del"></img>   
                </div> 
                휴지통</Link>
            </div>
            
            </div>
            <div className="interiorline2"></div>
        </div>
    );
}

export default Interiormenu;