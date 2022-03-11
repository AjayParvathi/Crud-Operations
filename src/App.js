
//crud operations

import React from 'react';

import { BrowserRouter, Routes,Route } from 'react-router-dom';
import HomeNavbar from './CrudOperations/HomeNavbar';
import EditContact from './CrudOperations/EditContact';
import CreateContact from './CrudOperations/CreateContact';
import HomeContact from './CrudOperations/HomeContact';
import ViewContact from './CrudOperations/ViewContact';


const App = () => {
  return (
    <div>
    
    <BrowserRouter>
    <HomeNavbar />
    <Routes>
    <Route path="/" element={<HomeContact/>}/>
    <Route path="/EditContact/:id" element={<EditContact/>}/>
    <Route path="/CreatContact" element={<CreateContact/>}/>
    <Route path="/ViewContact/:id" element={<ViewContact/>}/>
    </Routes>
    </BrowserRouter>
    </div>
    );
};

export default App;






