import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "../src/Home";
import "../src/index.css";
import Services from "../src/Services";
import About from "../src/About";
import Contact from "../src/Contact";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {Routes,Route} from 'react-router-dom';
let App =()=>{
    return(
<>
<Navbar/>
<Routes>
    <Route exact path="/"element={<Home/>}/>
    <Route exact path="/about"element={<About/>}/>
    <Route exact path="/services"element={<Services/>}/>
    <Route exact path="/contact"element={<Contact/>}/>

</Routes>
<Footer/>
</>

    )
}
export default App;