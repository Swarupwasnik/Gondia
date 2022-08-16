import React from "react";
import Images from "../src/Images/NV2.jpg";
import {NavLink} from "react-router-dom";
import "./index.css";
let Common =(props)=>{
return(
<>
<section id="header" className="">
<div className="container-fluid-nav_bg">
<div className="row">
    <div className="col-10 mx-auto">
        <div className="row"> 
      <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
        <h1 className="home">{props.name}<br/><strong className="brand-name">Gondia Tourism</strong></h1>
        <h6 className="my-3">
        We are Here for Best Hospitality Services
        </h6>
        <div className="mt-3">
            <NavLink to={props.visit} className="btn-gtn-started">{props.btname}</NavLink>
        </div>
        </div>
        <div className="col-lg-6 order-1 order-lg-2 header-img">
<img  src={props.imgsrc} className="img-fluid-animated" alt="home img"/>

        </div>
</div>
    </div>
</div>

</div>

</section>
</>


)
}
export default Common;