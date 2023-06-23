import { BrowserRouter, Route, Switch, Routes } from 'react-router-dom';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Body from './Components/Body';
import Login from './Components/Login';

import Movies from './Components/Movies';
import Contact from './Components/Contact';

import Register from "./Components/Register"
import PanelAdmin from "./Components/PanelAdmin"


function App() {
  return (
    
    <div>
      <div className='row'>
        <Nav />
      </div>

      <div className='row'>
 
        <Routes>
          




          <Route path="/" exact={true} element={<Body/>}></Route>
          <Route path="/RegisterMovie" element={<PanelAdmin/>} ></Route>
          <Route path="/Movies" element={<Movies/>} ></Route>
          <Route path="/Contact" element={<Contact/>} ></Route>
          <Route path="/Login" element={<Login/>} ></Route>
          <Route path="/Register" element={<Register/>} ></Route>
          
        </Routes>
    
      </div>
     
        <Footer />
 
    </div>
  );
}

export default App;
