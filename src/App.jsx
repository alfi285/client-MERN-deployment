import CreateUsers from "./CreateUsers"
import UpdateUser from "./UpdateUser"
import Users from "./Users"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Users/>}></Route>
          <Route path='/create' element={<CreateUsers/>}></Route>
          <Route path='/update/:id' element={<UpdateUser/>}></Route>
        </Routes>
      
      </BrowserRouter>
    </div>
  )
}

export default App