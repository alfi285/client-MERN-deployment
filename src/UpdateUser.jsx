import { useParams, useNavigate } from "react-router-dom";
import "./Users.css";
import { useState, useEffect } from "react";
import axios from "axios";

const UpdateUser = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();

  // ✅ Fetch user details by ID
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_API_BASE_URL}/users/${id}`)
      .then((result) => {
        setName(result.data.name);
        setEmail(result.data.email);
        setAge(result.data.age);
      })
      .catch((err) => console.log(err));
  }, [id]);

  // ✅ Form submit handler
  const update = (e) => {
    e.preventDefault();

    axios
      .put(`${import.meta.env.VITE_BACKEND_API_BASE_URL}/users/${id}`, { name, email, age })
      .then((result) => {
        window.alert("User updated:", result.data);
        navigate("/");
      })
      .catch((err) => console.log("Update error:", err));
  };

  return (
    <div>
      <div className="addUsers">
        <form className="userForm" onSubmit={update}>
          <h2 className="userHead">Update Users</h2>

          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            name="email"
            placeholder="Enter E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="age">Age</label>
          <input
            type="number"
            placeholder="Enter Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />

          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
