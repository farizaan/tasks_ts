import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { NavBar } from './components/navbar/Navbar';
import { UserList } from './components/user/UserList';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path='/users' element={<UserList/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
