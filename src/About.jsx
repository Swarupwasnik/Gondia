import React from "react";
import Images from "../src/Images/pt2.jpg";
import {NavLink} from "react-router-dom";
import "./index.css";
import Common from "./Common";
let About =()=>{
return(
<>
<Common name= "आम्ही आहोत तुमच्या करिता" imgsrc={Images} visit="/contact" btname="Contact Now"/>
</>


)
}
export default About;