import React from "react";
import { useState } from "react";

let Contact =()=>{
let [data, setData] = useState({
    fullname:'',
    mobileno:"",
    email:"",
    textarea:"",
});

let InputEvent =(event) =>{
    let{name,value}=event.target;
    setData((preVal)=>{
        return{
           ...preVal, 
           [name]:value,
        };
    })
}

let formSubmit =(e)=>{
    e.preventDefault();
    alert(` my name is ${data.fullname}. My mobile no is ${data.mobileno} & my ${data.email} my msg for team ${data.textarea}`);

}

return(
<>
<div className="my-5">
    <h1 className="text-center">Contact Us</h1>
</div>
<div className="container contact_div">
<div className="row">
<div className="col-m-6 col-10 mx-auto">
    <form onSubmit={formSubmit}>
    <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">FullName</label>
  <input type="text"
   className="form-control"
   name="fullname"
   value={data.fullname}
   onChange={InputEvent}
   id="exampleFormControlInput1" 
  placeholder="enter your name"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Mobile No</label>
  <input type="Number" 
  className="form-control" 
  id="exampleFormControlInput1"
  name="mobileno"
  value={data.mobileno}
  onChange={InputEvent}
   placeholder="Enter your Mobile NO"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" 
  className="form-control" 
  id="exampleFormControlInput1" 
  name="email"
  value={data.email}
  onChange={InputEvent}
  placeholder="name@example.com"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
  <textarea
   className="form-control"
    id="exampleFormControlTextarea1"
     rows="3"
     name="textarea"
  value={data.textarea}
  onChange={InputEvent}></textarea>
     
</div>
<div class="col-12">
    <button class="btn btn-outline-primary" type="submit">Submit form</button>
  </div>


    </form>
</div>
</div>

</div>

</>


)
}
export default Contact;