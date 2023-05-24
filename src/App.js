import './App.css';

import {
  BrowserRouter,
  Routes,
  Route

} from "react-router-dom";
import Home from './Component/Default_page/Home/Home';


function App() {
  return (
   <>
        <BrowserRouter> 
        <Routes> 
        
        <Route path='/' element={<Home/>}></Route>
          

         </Routes>
        </BrowserRouter>

        {/* <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route> */}
          
        



   </>
  );
}

export default App;
