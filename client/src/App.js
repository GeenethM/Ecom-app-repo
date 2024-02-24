import './App.css';
import {Routes, Route} from "react-router-dom"
import Home from './pages/Home';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import axios from 'axios'

axios.defaults.baseURL = "http://localhost:4000/api";
axios.defaults.withCredentials = true;

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/contact' element={<Contact/>} />
        <Route path='/admin' element={<Admin/>} />
      </Routes>
    </div>
  );
}

export default App;
