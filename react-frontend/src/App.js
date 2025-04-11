// import React from 'react';
// // import logo from './logo.svg';
// import './App.css';
// // eslint-disable-next-line
// import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
// import ListEmployeeComponent from './components/ListEmployeeComponent';
// import HeaderComponent from './components/HeaderComponent';
// import FooterComponent from './components/FooterComponent';
// import CreateEmployeeComponent from './components/CreateEmployeeComponent';
// import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
// import ViewEmployeeComponent from './components/ViewEmployeeComponent';

// function App() {
//   return (
//     <div>
//         <Router>
//               <HeaderComponent />
//                 <div className="container">
//                     <Routes> 
//                           <Route path = "/" exact component = {ListEmployeeComponent}></Route>
//                           <Route path = "/employees" component = {ListEmployeeComponent}></Route>
//                           <Route path = "/add-employee/:id" component = {CreateEmployeeComponent}></Route>
//                           <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}></Route>
//                           <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route>
//                     </Routes>
//                 </div>
//               <FooterComponent />
//         </Router>
//     </div>
    
//   );
// }

// export default App;

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route path="/" element={<ListEmployeeComponent />} />
            <Route path="/employees" element={<ListEmployeeComponent />} />
            <Route path="/add-employee/:id" element={<CreateEmployeeComponent />} />
            <Route path="/view-employee/:id" element={<ViewEmployeeComponent />} />
            <Route path="/update-employee/:id" element={<UpdateEmployeeComponent />} />
          </Routes>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;