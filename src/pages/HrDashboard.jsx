import React from 'react';
import SimpleLineChart from './SimpleLineChart';
import PieChartWithCenterLabel from './PieChartWithCenterLabel';
import NextInterviews from './NextInterviews';
import StackedBarChart from './StackedBarChart';

const HrDashboard = () => {
  const interviewUsers = [
    { id: 1, name: "Allen", psvg: "images/man-profile.svg", role: "UI/UX Designer", time: "09.00 - 10.00" },
    { id: 2, name: "Smith", psvg: "images/man-profile.svg", role: "Web Developer", time: "10.00 - 11.00" },
    { id: 3, name: "Martin", psvg: "images/man-profile.svg", role: "Cloud Engineer", time: "11.00 - 12.00" },
    { id: 4, name: "Ruther", psvg: "images/man-profile.svg", role: "Data Analyst", time: "12.00 - 01.00" }
  ];

  const stats = [
    { title: "Attendance", value: 400, icon: "bi-check-circle", bg: "bg-success-subtle", text: "text-success" },
    { title: "Late Coming", value: 17, icon: "bi-clock", bg: "bg-warning-subtle", text: "text-warning" },
    { title: "Absent", value: "06", icon: "bi-x-circle", bg: "bg-danger-subtle", text: "text-danger" },
    { title: "Leave Apply", value: 14, icon: "bi-umbrella", bg: "bg-info-subtle", text: "text-info" },
  ];

  return (
    <div className="container-fluid mt-4" style={{ fontFamily: "Poppins, sans-serif" }}>
      
      {/* Top row: Chart + Apps */}
      <div className="row g-4">
        <div className="col-md-8">
          <div className="card p-3 shadow-sm border-0 rounded-4">
            <SimpleLineChart />
          </div>
        </div>
        <div className="col-md-4">
          <div 
            className="card p-4 shadow-sm border border-primary rounded-4 text-primary"
            style={{ background: "linear-gradient(135deg, #e0f7ff, #f0faff)" }}
          >
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <i className="bi bi-clipboard2-check fs-1"></i>
                <h2 className="fw-bold mt-2">1546</h2>
                <p className="m-0">Applications</p>
              </div>
              <img src="images/appli.png" alt="dashboard" width={120} className="rounded-circle border border-primary p-1"/>
            </div>
          </div>
        </div>
      </div>

      {/* Stats row */}
  <div className="row g-4 mt-1">
  <div className="col-md-6">
    <div className="card p-4 shadow-sm border-0 rounded-4">
      <h6 className="text-center mb-3 fw-semibold">Employees Availability</h6>
      <div className="row g-3">
        {stats.map((item, index) => (
          <div key={index} className="col-6">
            <div className={`d-flex flex-column align-items-center rounded-4 px-5 py-4 ${item.bg} ${item.text}`}>
              <i className={`bi ${item.icon} fs-4 mb-1`}></i>
              <strong className="small">{item.title}</strong>
              <div className="fw-bold">{item.value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  <div className="col-md-6">
    <div className="card p-4 shadow-sm border border-info rounded-4">
      <h6 className="text-center fw-semibold">Total Employees</h6>
      <h2 className="text-center text-info fw-bold">423</h2>
      <PieChartWithCenterLabel />
    </div>
  </div>
</div>


      {/* KPIs row */}
      <div className="row g-4 mt-1">
        <div className="col-md-6">
          <div className="card p-3 d-flex flex-row justify-content-between align-items-center gap-3 shadow-sm border-0 rounded-4">
            <div className="bg-success-subtle text-success p-3 rounded-circle border border-success">
              <i className="bi bi-people-fill fs-4"></i>
            </div>
            <div>
              <h5 className="mb-0 fw-bold">246</h5>
              <p className="m-0 small">Interviews</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card p-3 d-flex flex-row justify-content-between align-items-center gap-3 shadow-sm border-0 rounded-4">
            <div className="bg-primary-subtle text-primary p-3 rounded-circle border border-primary">
              <i className="bi bi-graph-up fs-4"></i>
            </div>
            <div>
              <h5 className="mb-0 fw-bold">101</h5>
              <p className="m-0 small">Hired</p>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Interviews */}
      <div className="row mt-3">
        <div className="col-md-12">
          <div className="card p-4 shadow-sm border-0 rounded-4">
            <h6 className="text-center fw-semibold mb-3">Upcoming Interviews</h6>
            <div className="d-flex flex-column gap-2">
              {interviewUsers.map((val) => (
                <NextInterviews key={val.id} name={val.name} role={val.role} psvg={val.psvg} time={val.time} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Top Hirings */}
      <div className="row mt-3">
        <div className="col-md-12">
          <div className="card p-4 shadow-sm border-0 rounded-4">
            <h6 className="text-center fw-semibold mb-3">Top Hirings</h6>
            <div className="bg-light rounded-4 p-2">
              <StackedBarChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HrDashboard;

