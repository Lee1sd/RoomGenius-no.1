import React from "react";
import '../../style/main.css';
import Intro from './intro';
import Title1 from "./title1";
import Title2 from "./title2";
import Make from "./make";
import Footer from "../../components/footer";
import { useLocation } from "react-router";


function Main(){
    const roomStyle = {paddingTop: '80px'};
    const location = useLocation
    
    return(
        <div className="RoomMain" >
            <Intro  style={roomStyle}></Intro>
            <Title1 style={roomStyle}/>
            <Title2 style={roomStyle}/>
            <Make style={roomStyle}/>
            <Footer style={roomStyle}/>
        </div>
    );
}
export default Main;