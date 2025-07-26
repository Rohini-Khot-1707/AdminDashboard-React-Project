import React from 'react'
import BorderRadius from './BorderRadius';
import PieActiveArc from './PieActiveArc';
import PieActiveArc2 from './PieActiveArc2';

export const projectData = [
    {
        title: "Smart City Map",
        dateStart: "05-03-2022",
        deadline: "3 Months",
        leader: { name: "Ava", emoji: "👩‍💻" },
        completion: 70,
        stage: { label: "MEDIUM", color: "warning" },
        category: "Technology"
    },
    {
        title: "Health Tracker",
        dateStart: "12-05-2022",
        deadline: "6 Months",
        leader: { name: "Liam", emoji: "🧑" },
        completion: 92,
        stage: { label: "HIGH", color: "danger" },
        category: "Healthcare"
    },
    {
        title: "Byjus Portal",
        dateStart: "01-07-2022",
        deadline: "4 Months",
        leader: { name: "Uimn", emoji: "👨‍🏫" },
        completion: 55,
        stage: { label: "MEDIUM", color: "warning" },
        category: "Education"
    },
    {
        title: "GreenEnergy Dashboard",
        dateStart: "18-08-2022",
        deadline: "5 Months",
        leader: { name: "Sophia", emoji: "👩‍🔬" },
        completion: 40,
        stage: { label: "LOW", color: "success" },
        category: "Technology"
    },
    {
        title: "AI ChatBot V1",
        dateStart: "25-09-2022",
        deadline: "7 Months",
        leader: { name: "Ethan", emoji: "🤖" },
        completion: 38,
        stage: { label: "HIGH", color: "danger" },
        category: "Technology"
    },
    {
        title: "Fintech App",
        dateStart: "03-10-2022",
        deadline: "9 Months",
        leader: { name: "Mia", emoji: "💼" },
        completion: 67,
        stage: { label: "MEDIUM", color: "warning" },
        category: "Technology"
    },
    {
        title: "Exam Booking System",
        dateStart: "15-11-2022",
        deadline: "4 Months",
        leader: { name: "Lucas", emoji: "👨‍🎓" },
        completion: 60,
        stage: { label: "LOW", color: "success" },
        category: "Education"
    },
    {
        title: "Heartbeat Tracker",
        dateStart: "12-04-2022",
        deadline: "6 Months",
        leader: { name: "Smith", emoji: "🧑‍⚕️" },
        completion: 78,
        stage: { label: "HIGH", color: "danger" },
        category: "Healthcare"
    },
    {
        title: "EduLearn Portal",
        dateStart: "20-06-2022",
        deadline: "4 Months",
        leader: { name: "Noah", emoji: "👨‍🏫" },
        completion: 55,
        stage: { label: "MEDIUM", color: "warning" },
        category: "Education"
    },
    {
        title: "GreenCity Dashboard",
        dateStart: "01-08-2022",
        deadline: "9 Months",
        leader: { name: "Hassan", emoji: "👩‍🔬" },
        completion: 40,
        stage: { label: "LOW", color: "success" },
        category: "Technology"
    },
    {
        title: "AI ChatBot V2",
        dateStart: "15-09-2022",
        deadline: "6 Months",
        leader: { name: "Lily", emoji: "🤖" },
        completion: 98,
        stage: { label: "HIGH", color: "danger" },
        category: "Technology"
    },
    {
        title: "Finance Tracker App",
        dateStart: "25-10-2022",
        deadline: "3 Months",
        leader: { name: "Mia", emoji: "💼" },
        completion: 73,
        stage: { label: "MEDIUM", color: "warning" },
        category: "Technology"
    },
    {
        title: "Online Exam System",
        dateStart: "10-11-2022",
        deadline: "4 Months",
        leader: { name: "Lucas", emoji: "👨‍🎓" },
        completion: 60,
        stage: { label: "LOW", color: "success" },
        category: "Education"
    },
    {
        title: "Travel Planner",
        dateStart: "05-01-2023",
        deadline: "3 Months",
        leader: { name: "Emma", emoji: "🧳" },
        completion: 47,
        stage: { label: "MEDIUM", color: "warning" },
        category: "Technology"
    },
    {
        title: "E-Commerce API",
        dateStart: "14-02-2023",
        deadline: "2 Months",
        leader: { name: "Oliver", emoji: "💻" },
        completion: 95,
        stage: { label: "HIGH", color: "danger" },
        category: "Technology"
    }
];

const ProjectDashBoard = () => {
  return (
    <div className="container-fluid">
      {/* KPI CARDS */}
      <div className="row g-3 mt-1">
        {[
          { count: 246, label: "Total Projects", icon: "bi-folder-fill", color: "primary" },
          { count: 101, label: "Completed Projects", icon: "bi-check-circle-fill", color: "success" },
          { count: 101, label: "In-Progress Projects", icon: "bi-arrow-repeat", color: "warning" },
          { count: 34, label: "Pending Approval", icon: "bi-hourglass-split", color: "info" },
          { count: 12, label: "Cancelled Projects", icon: "bi-x-circle-fill", color: "danger" },
          { count: 9, label: "On Hold Projects", icon: "bi-pause-circle-fill", color: "secondary" },
        ].map((item, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4">
            <div
              className={`card p-3 d-flex flex-row align-items-center gap-3 border-start border-4 border-${item.color} rounded-4 shadow-sm`}
              style={{ background: "linear-gradient(135deg, #ffffff, #f8f9fa)" }}
            >
              <div
                className={`p-3 rounded-circle border border-${item.color} text-${item.color} bg-white`}
                style={{ fontSize: "1.5rem" }}
              >
                <i className={`bi ${item.icon}`}></i>
              </div>
              <div>
                <h5 className={`mb-0 fw-bold text-${item.color}`}>{item.count}</h5>
                <p className="m-0 small">{item.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* PROJECT TABLE */}
      <div className='row g-3 mt-2'>
        <div className='col-12'>
          <div className="card p-3 p-md-4 shadow-sm border-0 rounded-4" style={{ background: "linear-gradient(135deg, #ffffff, #f0f4f7)" }}>
            <h5 className="mb-3 fw-semibold">Project Information</h5>
            <div className="table-responsive">
              <table className="table table-hover align-middle">
                <thead className="table-light">
                  <tr>
                    <th>TITLE</th>
                    <th className='d-none d-sm-table-cell'>DATE START</th>
                    <th className='d-none d-md-table-cell'>DEADLINE</th>
                    <th className='d-none d-lg-table-cell'>LEADER</th>
                    <th>COMPLETION</th>
                    <th>STAGE</th>
                  </tr>
                </thead>
                <tbody>
                  {projectData.map((project, index) => (
                    <tr key={index}>
                      <td>{project.title}</td>
                      <td className='d-none d-sm-table-cell'>{project.dateStart}</td>
                      <td className='d-none d-md-table-cell'>{project.deadline}</td>
                      <td className='d-none d-lg-table-cell'>
                        <span className="me-2">{project.leader.emoji}</span>{project.leader.name}
                      </td>
                      <td>
                        <div className="progress" style={{ height: '18px' }}>
                          <div
                            className="progress-bar bg-dark"
                            style={{ width: `${project.completion}%` }}
                          >
                            <span className="d-none d-md-inline">{project.completion}%</span>
                            <span className="d-inline d-md-none">{project.completion}</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className={`badge bg-${project.stage.color}`}>{project.stage.label}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* CHART CARDS */}
      <div className="row g-3 mt-2">
        <div className="col-12">
          <div className="card p-3 p-md-4 shadow-sm border-0 rounded-4" style={{ background: "linear-gradient(135deg, #ffffff, #f0f4f7)" }}>
            <h6 className='text-center mb-3'>Top Contributors</h6>
            <div className="chart-container" style={{ minHeight: '300px' }}>
              <BorderRadius />
            </div>
          </div>
        </div>
      </div>

      <div className="row g-3 mt-2">
        <div className="col-12 col-md-6">
          <div className="card p-3 p-md-4 shadow-sm border-0 rounded-4" style={{ background: "linear-gradient(135deg, #ffffff, #f0f4f7)" }}>
            <div className="chart-container" style={{ minHeight: '300px' }}>
              <PieActiveArc />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="card p-3 p-md-4 shadow-sm border-0 rounded-4" style={{ background: "linear-gradient(135deg, #ffffff, #f0f4f7)" }}>
            <div className="chart-container" style={{ minHeight: '300px' }}>
              <PieActiveArc2 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDashBoard

