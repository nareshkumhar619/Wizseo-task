import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import SignIn from './Components/Signin';
import SignUp from './Components/Signup';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <>

    <Navbar/>
            <Routes>
            
           <Route path="/" element={<SignUp />}></Route>
            <Route path="/signin" element={<SignIn/>}></Route>
            <Route path="/home" element={<Home/>}></Route>
    </Routes>
    </>
  );
}

export default App;
