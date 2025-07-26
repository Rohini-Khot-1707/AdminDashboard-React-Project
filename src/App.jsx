import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Sidebar from './pages/Sidebar';
import Navbar2 from './pages/Navbar2';
import HrDashboard from './pages/HrDashboard';
import ProjectDashBoard from './pages/ProjectDashBoard';
import AllProjects from './pages/AllProjects';
import Tickets from './pages/Tickets';
import Clients from './pages/Clients';
import Holidays from './pages/Holidays';
import Employees from './pages/Employees';
import EmployeeView from './pages/EmployeeView';
import CalendarComponent from './pages/CalenderComponent';

const App = () => {
  return (
    <Router>
      <Sidebar />
      <Navbar/>
      <Navbar2 />
      <div className="main-content">
        <div className="page-content">
          <Routes>
            <Route path='/' element={<HrDashboard/>}></Route>
            <Route path='/projectDashboard' element={<ProjectDashBoard/>}></Route>
            <Route path='/projects' element={<AllProjects/>}></Route>
            <Route path='/tickets' element={<Tickets/>}></Route>
            <Route path='/clients' element={<Clients/>}></Route>
            <Route path='/holidays' element={<Holidays/>}></Route>
            <Route path='/employees' element={<Employees/>}></Route>
            <Route path='/employeeview' element={<EmployeeView/>}></Route>
            <Route path='/calender' element={<CalendarComponent/>}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;










