import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Users.css';
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_API_BASE_URL}/users`)
    .then(result => setUsers(result.data))
    .catch(err => console.log(err))
  },[])

  const handleDelete = (id) =>{
    axios.delete(`${import.meta.env.VITE_BACKEND_API_BASE_URL}/users/${id}`)
    .then(res => {console.log(res)
        window.location.reload()
        window.alert("Deleted successfully")
    })
    .catch(err => console.log(err))
  }


  return (
    <div className="userDisplayContainer">
      <div  className="userDisplay">
        <h2 className="userHead">Users</h2>
        <Link to="/create" className="links">Add +</Link>
        <table className="userTable">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => {
              return(
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>
                  <Link to={`/update/${user._id}`} className="links">Update</Link>
                  <button className="links" style={{backgroundColor:"red", fontWeight:"normal"}} onClick={(e) => handleDelete(user._id)}>Delete</button>
                </td>
              </tr>)
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
