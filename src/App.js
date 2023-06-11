import './App.css';

import {
  BrowserRouter,
  Routes,
  Route

} from "react-router-dom";
import Home from './Component/Default_page/Home/Home';
import Appointment from './Component/Appointment_Page/Appointment/Appointment';
import React  from 'react';
import LogIn from './Component/Loginn/LogIn/LogIn';
import Registration from './Component/Loginn/Registration/Registration';




                       
function App() {
  return (
   <>
        <BrowserRouter> 
        <Routes> 
        
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Appointment' element={<Appointment/>}></Route>
        <Route path='/Login' element={<LogIn/>}></Route>
        <Route path='/Registration' element={<Registration/>}></Route>
          
      

        
          

         </Routes>
        </BrowserRouter>

        
         
          
        



   </>
  );
}

export default App;
