import React from "react";
import Images from "../src/Images/NV2.jpg";
import {NavLink} from "react-router-dom";
import "./index.css";
import Common from "./Common";
let Home =()=>{
return(
<>
<Common 
name="Welcome To Gondia with"
imgsrc={Images}
visit="/service"
btname="Get Started"

/>
</>


)
}
export default Home;