
import React, { useEffect } from 'react';
import { Routes,Route, useNavigate    } from "react-router-dom"
import cityApi from './api/cityApi';
import './App.css';
import LogginPage from './features/auth/pages/LogginPage';
import {Admin} from './components/layout'
import { NotFound, PrivateRoute } from './components/common';
function App() {
  useEffect(()=>{
    cityApi.getAll().then(rs=>console.log(rs));
  })
  let navigate = useNavigate();
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<LogginPage></LogginPage>} >
          
          </Route>
        <Route path='/admin' element={
          <PrivateRoute> <Admin></Admin> </PrivateRoute>}
          ></Route>
      
        <Route path='/*' element={<NotFound></NotFound>}>

          </Route>
      </Routes>
      <button onClick={()=>navigate('/login')}>xxx</button>
    </div>
  );
}

export default App;
