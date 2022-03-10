//Routing concepts


// import React from 'react';
// import { BrowserRouter, Route,Routes } from 'react-router-dom';
// import Login from './Routing/Login';
// import  NavBar from './Routing/NavBar';
// import SingUp from './Routing/SingUp';
// import Home from './Routing/Home';
// export const App = () => {
//   return (
//     <div>
//     <BrowserRouter>
//     <NavBar/>
//    <Routes>
//    <Route path="/" element={<Home/>}/>
//    <Route  path="/login" element={<Login />}/>
//    <Route  path="/signup" element={<SingUp/>}/>
//    </Routes>
//     </BrowserRouter>
//     </div>
//   );
// };
// export default App


// onChange And onSUBMIT

// import React from 'react';
// import Events from './Hooks/Events';


// const App = () => {
//   return (
//     <div>
    
//     <Events />
    
//     </div>
//     );
// };

// export default App;



//useState onChange and Submit

// import React from 'react';
// import States from './Hooks/States';

// const App = () => {
//   return (
//     <div>
//     <States />
//     </div>
//     );
// };

// export default App;





//GET DATA FROM DATABASE:

// import React from 'react';
// import Pull from './GetAndPost/Pull';

// const App = () => {
//   return (

//     <div>
//     <Pull />
//     </div>
//     );
// };
// export default App;



 //POST METHOD

// import axios from 'axios';
// import React, { useEffect } from 'react';
// import Validate from './GetAndPost/Validate';


// const App = () => {
//   // useEffect(()=>axios.get("http://localhost:9000/data").then(res=>console.log(res.data)))
//   return (
//     <div>
//     <Validate />
//     </div>
//     );
// };

// export default App;


//props


// import React from 'react';
// import ExpenseItem from './Props/ExpenseItem'

// const App = () => {
//     const Expenses=[
//       {
//           id:"001",
//           title:'MG',
//           amount:1200,
//           date:new Date(2021,5,19)
//       },
//       {
//         id:"002",
//         title:'KIA',
//         amount:1800,
//         date:new Date(2018,9,12),
//     },
//     {
//       id:"003",
//       title:'SKODA',
//       amount:1900,
//       date:new Date(2011,11,20),
//   },
//   {
//     id:"004",
//     title:'FORD',
//     amount:2000,
//     date:new Date(2015,7,22),
// },
// {
//   id:"005",
//   title:'LANDROVER',
//   amount:5500,
//   date:new Date(2022,1,25),
// }
//   ]
// return( 
//     <div>
    
//     <ExpenseItem title={Expenses[0].title}
//     amount={Expenses[0].amount}
//     date={Expenses[0].date}
//     />
//     <ExpenseItem title={Expenses[1].title}
//     amount={Expenses[1].amount}
//     date={Expenses[1].date}
//     />
//     <ExpenseItem title={Expenses[2].title}
//     amount={Expenses[2].amount}
//     date={Expenses[2].date}
//     />
//     <ExpenseItem title={Expenses[3].title}
//     amount={Expenses[3].amount}
//     date={Expenses[3].date}
//     />
//     <ExpenseItem title={Expenses[4].title}
//     amount={Expenses[4].amount}
//     date={Expenses[4].date}
//     />
//     <ExpenseItem title={Expenses[4].title}
//     amount={Expenses[4].amount}
//     date={Expenses[4].date}
//     />

//     </div>
//     );
// };

// export default App;

//checking Data post method

// import React from 'react';
// import Check from './Checkdata/Check'

// const App = () => {
//   return (
//     <div>
//     <Check />
//     </div>
//     );
// };

// export default App;


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






