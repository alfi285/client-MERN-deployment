import { useState } from 'react'
import axios from 'axios'
import './Users.css'
import { useNavigate } from 'react-router-dom';


const CreateUsers = () => {

    const [name,setName] =useState("");
    const [email,setEmail] = useState("");
    const [age,setAge] = useState("");

    const navigate = useNavigate()

    const submit = (e) =>{
        e.preventDefault();

        axios.post(`${import.meta.env.VITE_BACKEND_API_BASE_URL}/users`, {name,email,age})
        .then(result => {
            window.alert("User added successfully")
            navigate('/')

        })
        
    }
  return (
    <div>
        <div className='addUsers'>
            
            <form className='userForm' onSubmit={submit}>
                <h2 className='userHead'>Add Users</h2>
                <label htmlFor="name">Name</label>
                <input type="text" name='name' placeholder='Enter Name' onChange={(e) =>setName(e.target.value)} required />

                <label htmlFor="email">E-mail</label>
                <input type="email" name='email' placeholder='Enter E-mail' onChange={(e) =>setEmail(e.target.value)} required />

                <label htmlFor="age">Age</label>
                <input type="number" placeholder='Enter Age' onChange={(e) =>setAge(e.target.value)} required/>

                <button>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default CreateUsers