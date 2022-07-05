 import React, { useState } from "react";
import {  useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const AddPost = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [sales, setSales] = useState("");
  
 const contacts = useSelector((state) => state);
 console.log(contacts)
 const dispatch = useDispatch();
 //console.log(dispatch);

 const navigate = useNavigate();

const handleSubmit = (e) =>{
   e.preventDefault();

const checkEmail = contacts.find(contact => contact.email === email && email);
const checkPhone = contacts.find(contact => contact.phone === parseInt(phone));

   if(!name || !email || !phone || !sales) {
    return toast.warning("Please fill in all Fields")
   }

   if(checkEmail){
    return toast.error("This email already Exists!")
   }

   if(checkPhone){
    return toast.error("This phone already Exists!")
   }

   const data = {
    id: contacts[contacts.length -1].id + 1,
    name,
    email,
    phone,
    sales
   }
   console.log(data)
   dispatch({type: "Add_CONTACT", payload:data});
   toast.success("Employee added Successfully!!");
   navigate("/");
}


  return (
    <div className="container">
      <h1 className="text-center display-3 my-5">Add Employee</h1>
      <div className="row">
        <div className="col-md-6 p-5 mx-auto shadow">
      
           <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Employee name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                
               
              />
            </div>
            <br/>
            <div className="form-group">
              <input
                className="form-control"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                
                
              />
            </div>
            <br/>
            <div className="form-group">
              <input
                className="form-control"
                type="number"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
             <br/>
            <div className="form-group">
              <input
                className="form-control"
                type="number"
                placeholder="Sales"
                value={sales}
                onChange={(e) => setSales(e.target.value)}
              />
            </div>
            <br/>
            <div className="form-group">
              <input
                className="btn btn-block btn-dark"
                type="submit"
                value="Add Employee"
              />
            </div>
          </form> 
        </div>
      </div>
    </div>
  );
};



export default AddPost;
