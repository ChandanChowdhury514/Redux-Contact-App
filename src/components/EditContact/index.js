import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector} from 'react-redux'
import {Link, useParams} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const EditContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [sales, setSales] = useState("");

  const {id} = useParams();

  const contacts = useSelector( state => state);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const currentContact = contacts.find(contact=> contact.id === parseInt(id));
  
  useEffect(() =>{
    if(currentContact) {
      setName(currentContact.name);
      setEmail(currentContact.email);
      setPhone(currentContact.phone);
      setSales(currentContact.sales)
    }
  }, [currentContact])

  const handleSubmit = (e) =>{
    e.preventDefault();
 
 const checkEmail = contacts.find((contact) => contact.id !== parseInt(id) && email === email );
 const checkPhone = contacts.find((contact) => contact.id !== parseInt(id) && contact.phone === parseInt(phone));
 
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
     id: parseInt(id),
     name,
     email,
     phone,
     sales
    }
    //console.log(data)
    dispatch({type: "UPDATE_CONTACT", payload:data});
    toast.success("Employee Update Successfully!!");
    navigate("/");
 }
 


  


  return (
    
  <div className="container">

  {currentContact ? ( 
    <>
    <h1 className="text-center text-dark py-3 display-2">Edit Employee {id}</h1>
      <div className="row">
        <div className="col-md-6 p-5 mx-auto shadow">
      
           <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Full name"
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
                value="Update Employee"
              />
              <Link 
              to="/"
                className="btn  btn-danger ml-5"
              >Cancel</Link>
              
            </div>
          </form> 
        </div>
      </div>
      </>
  ) : (
    <h1 className='display-3 my-5 text-center'> EmployeeContact with id {id} not exist</h1>
  )}
    </div>
    );
};


export default EditContact;