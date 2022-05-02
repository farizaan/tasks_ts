import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { NavBar } from './components/navbar/Navbar';
import { UserList } from './components/user/UserList';
import { ProductsPage } from './pages/shop/ProductsPage';
import { TasksPage } from './pages/trello/TasksPage';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path='/users' element={<UserList/>}></Route>
        <Route path='/shop' element={<ProductsPage/>}></Route>
        <Route path='/tasks' element={<TasksPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
