import React from 'react';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';
import '../App.css'

const menuItems = [
    {
        label: 'Dashboard',
        icon: 'bi-briefcase-fill',
        submenu: [
            { label: 'HR Dashboard', navlink: '/' },
            { label: 'Project Dashboard', navlink: '/projectDashboard' }
        ]
    },
    {
        label: 'Projects',
        icon: 'bi-briefcase-fill',
        submenu: [
            { label: 'All Projects', navlink: '/projects' },
        ]
    },
    {
        label: 'Tickets',
        icon: 'bi-ticket-detailed-fill',
        submenu: [
            { label: 'Ticket Details', navlink: '/tickets' },
        ]
    },
    {
        label: 'Our Clients',
        icon: 'bi-person-fill',
        submenu: [
            { label: 'Clients', navlink: '/clients' },
        ]
    },
    {
        label: 'Employees',
        icon: 'bi-people-fill',
        submenu: [
             { label: 'Employee Details', navlink: '/employees' },
            { label: 'Holidays', navlink: '/holidays' },
            { label: 'Employees View', navlink: '/employeeview' },
           
        ]
    },
    {
        label: 'Other',
        icon: 'bi-window-fullscreen',
        submenu: [
            { label: 'Calender', navlink: '/calender' },
        ]
    }
];

const Sidebar = () => {
  return (
    <div
      className="sidebar d-flex flex-column align-items-center text-white"
      style={{
        background: 'linear-gradient(135deg, #6a11cb, #2575fc)',
        minHeight: '100vh',
        width: '220px'
      }}
    >
      <div className="logo my-4 d-flex align-items-center justify-content-around">
        <i className="bi bi-clipboard2-check fs-1 text-white mx-2"></i>
        <h4 className="fw-bold mx-2 d-none d-sm-block">My-Task</h4>
      </div>

      <button
        className="navbar-toggler d-md-none w-100 mb-3 px-3 py-2 text-white border-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#sidebarMenu"
        aria-controls="sidebarMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="bi bi-list me-2"></i> Menu
      </button>

      <div className="collapse d-md-block w-100" id="sidebarMenu">
        <ul className="nav flex-column w-100 px-2">
          {menuItems.map((item, index) => {
            const collapseId = `collapse${index}`;
            return (
              <li className="nav-item mb-2" key={index}>
                <a
                  className="nav-link text-white d-flex justify-content-between align-items-center rounded px-2"
                  data-bs-toggle="collapse"
                  href={`#${collapseId}`}
                  role="button"
                  aria-expanded="false"
                  aria-controls={collapseId}
                  style={{ transition: 'background 0.3s' }}
                >
                  <span>
                    <i className={`bi ${item.icon} me-2`}></i>
                    <span className="d-none d-md-inline">{item.label}</span>
                  </span>
                  <i className="bi bi-chevron-down small"></i>
                </a>

                <div className="collapse ps-3" id={collapseId}>
                  <ul className="list-unstyled">
                    {item.submenu.map((subItem, i) => (
                      <li key={i} className="py-1">
                        <NavLink
                          to={subItem.navlink}
                          className={({ isActive }) =>
                            'text-decoration-none d-block px-2 py-1 rounded ' +
                            (isActive ? 'bg-light text-dark' : 'text-white')
                          }
                        >
                          <i className="bi bi-dot me-2"></i>
                          <span className="d-none d-md-inline">{subItem.label}</span>
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};


export default Sidebar;
