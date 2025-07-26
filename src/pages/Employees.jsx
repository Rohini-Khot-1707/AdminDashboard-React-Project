import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'aos/dist/aos.css';
import AOS from 'aos';

const apiUrl = 'http://localhost:3000/employees';

const Employees = () => {
  const [employeeData, setEmployeeData] = useState([]);
  const [employeeName, setEmployeeName] = useState('');
  const [employeeRole, setEmployeeRole] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const res = await axios.get(apiUrl);
      setEmployeeData(res.data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  const createEmployee = async () => {
    if (!employeeName.trim()) return;

    const newEmployee = {
      name: employeeName,
      role: employeeRole || "No role assigned"
    };

    try {
      const res = await axios.post(apiUrl, newEmployee);
      setEmployeeData([...employeeData, res.data]);
      setEmployeeName('');
      setEmployeeRole('');
      setSuccessMessage('Employee added successfully!');
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (error) {
      console.error('Error adding employee:', error);
    }
  };

  const deleteEmployee = async (id) => {
    if (window.confirm('Are you sure you want to delete this employee?')) {
      try {
        await axios.delete(`${apiUrl}/${id}`);
        setEmployeeData(employeeData.filter(emp => emp.id !== id));
      } catch (error) {
        console.error('Error deleting employee:', error);
      }
    }
  };

  const renderEmployeeCard = (emp) => (
    <div className="col-12 col-sm-6 col-md-4 mb-3" key={emp.id} data-aos="fade-up">
      <div className="card shadow-sm h-100 d-flex flex-row align-items-center p-3 rounded-4 border-0"
        style={{ background: "linear-gradient(135deg, #ffffff, #f8fafc)" }}>
        <img
          src="/images/man-profile.svg"
          alt="Profile"
          className="rounded-circle img-fluid me-3"
          style={{ width: "65px", height: "65px" }}
        />
        <div className="flex-grow-1">
          <h6 className="mb-1 fw-semibold">{emp.name}</h6>
          <p className="small text-muted mb-0">{emp.role}</p>
        </div>
        <button
          className="btn btn-outline-danger btn-sm ms-auto"
          onClick={() => deleteEmployee(emp.id)}
        >
          <i className="bi bi-trash3-fill"></i>
        </button>
      </div>
    </div>
  );

  return (
    <div className="container py-3">
      {/* Header */}
      <div
        className="card mb-3 p-2 p-md-3 d-flex flex-column flex-md-row justify-content-between align-items-center border-0 shadow-sm rounded-4"
        style={{ background: "linear-gradient(135deg, #ffffff, #f8fafc)" }}
      >
        <h5 className="mb-2 mb-md-0 fw-semibold">Employees</h5>
        <button
          data-bs-toggle="modal"
          data-bs-target="#employeeModal"
          className="btn btn-outline-primary fw-bold"
        >
          <span className="d-none d-md-inline">Add Employee</span>
          <i className="bi bi-person-plus ms-2"></i>
        </button>
      </div>

      {/* Success message */}
      {successMessage && (
        <div className="alert alert-success alert-dismissible fade show" role="alert">
          {successMessage}
          <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
        </div>
      )}

      {/* Employee list */}
      <div className="row">
        {employeeData.map(renderEmployeeCard)}
      </div>

      {/* Modal */}
      <div className="modal fade" id="employeeModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content rounded-4">
            <div className="modal-header">
              <h5 className="modal-title">Add New Employee</h5>
              <button className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label small">Employee Name:</label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  value={employeeName}
                  onChange={(e) => setEmployeeName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label small">Role:</label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  value={employeeRole}
                  onChange={(e) => setEmployeeRole(e.target.value)}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary btn-sm" data-bs-dismiss="modal">Close</button>
              <button
                className="btn btn-success btn-sm"
                data-bs-dismiss="modal"
                onClick={createEmployee}
              >
                Add Employee
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employees;
