import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './page/Auth/Auths';
import Header from './components/Header';
import Main from './page/mainpage/Main';
import Interiormenu from './page/inte/interiormenu';
import PrivateRoute from './page/Auth/privateRoute';
import Login from './page/Auth/Login';
import Signup from './page/Auth/Signup';
import Interior from './page/inte/interior';

function App() {

  return (
    <AuthProvider>
      <Header/>
     <Routes>
        <Route path="/" element={<Main />} />
        <Route path='/make' element={<PrivateRoute><Interior/></PrivateRoute>} />
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Signup' element={<Signup/>}></Route>
        <Route path='/interiormenu' element={<Interiormenu/>}></Route>
        <Route path='/interior' element={<Interior/>}></Route>
     </Routes>
    </AuthProvider>
    
  );
}

export default App;
