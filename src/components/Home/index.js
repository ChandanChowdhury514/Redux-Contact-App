import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Home = () => {
const contacts = useSelector(state => state)

const dispatch = useDispatch();

const deleteContact = (id) =>{
 
  dispatch({type: "DELETE_CONTACT", payload:id});
  toast.success("Contacted Deleted Successfully")
}

  return (
    <div className="container">
      <div className="row">
      <div className="col-md-12 my-5 text-right">
        <Link to="/add" className="btn btn-outline-dark mb-5">
          Add Contact
        </Link>
        
        <div className="col-md-10  mx-auto">
        
           <table className="table table-hover">
            <thead className="table-center bg-dark text-white">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Sales</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {contacts.length > 0 ? (
                contacts.map((contact, id) => (
                  <tr key={id}>
                    <td>{id + 1 }</td>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.phone}</td>
                    <td>{contact.sales}</td>
                    <td>
                      <Link
                        to={`/edit/${contact.id}`}
                        className="btn btn-sm btn-primary mr-5"
                      >
                        Edit
                      </Link>&nbsp;&nbsp;
                      <button
                        type="button"
                         onClick={() => deleteContact(contact.id)}
                        className="btn btn-sm btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <th>No contacts found</th>
                </tr>
              )}
            </tbody>
          </table> 
          </div>
        </div>
      </div>
    </div>
  );
};

// const mapStateToProps = (state) => ({
//   contacts: state,
// });

// const mapDispatchToProps = (dispatch) => ({
//   deleteContact: (id) => {
//     dispatch({ type: "DELETE_CONTACT", payload: id });
//   },
// });

export default Home;
