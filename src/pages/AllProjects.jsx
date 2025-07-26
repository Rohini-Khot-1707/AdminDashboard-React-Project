import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Modal, Button, Form } from 'react-bootstrap';

const AllProjects = () => {
  const apiUrl = 'http://localhost:3000/projects';
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState('All');
  const [newProject, setNewProject] = useState({
    title: '', category: 'Technology',
    leaderName: '', leaderEmoji: '',
    dateStart: '', deadline: '',
    stageLabel: 'New', stageColor: 'secondary', completion: 0
  });
  const [editProject, setEditProject] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800 });
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await axios.get(apiUrl);
      setProjects(res.data);
    } catch (err) {
      console.error('Fetch error:', err);
    }
  };

  const handleAddProject = async (e) => {
    e.preventDefault();
    const payload = {
      title: newProject.title,
      category: newProject.category,
      leader: { name: newProject.leaderName, emoji: newProject.leaderEmoji },
      dateStart: newProject.dateStart,
      deadline: newProject.deadline,
      stage: { label: newProject.stageLabel, color: newProject.stageColor },
      completion: parseInt(newProject.completion)
    };
    try {
      const res = await axios.post(apiUrl, payload);
      setProjects([...projects, res.data]);
      setNewProject({
        title: '', category: 'Technology', leaderName: '', leaderEmoji: '',
        dateStart: '', deadline: '', stageLabel: 'New', stageColor: 'secondary', completion: 0
      });
    } catch (err) {
      console.error('Add error:', err);
    }
  };

  const handleEditSave = async () => {
    const payload = {
      title: editProject.title,
      category: editProject.category,
      leader: { name: editProject.leaderName, emoji: editProject.leaderEmoji },
      dateStart: editProject.dateStart,
      deadline: editProject.deadline,
      stage: { label: editProject.stageLabel, color: editProject.stageColor },
      completion: parseInt(editProject.completion)
    };
    try {
      const res = await axios.put(`${apiUrl}/${editProject.id}`, payload);
      setProjects(projects.map(p => p.id === editProject.id ? res.data : p));
      setShowEditModal(false);
    } catch (err) {
      console.error('Edit error:', err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${apiUrl}/${id}`);
      setProjects(projects.filter(p => p.id !== id));
    } catch (err) {
      console.error('Delete error:', err);
    }
  };

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className='container mt-3'>
      <h3>Projects Dashboard</h3>

      {/* Add Project Form */}
      <Form onSubmit={handleAddProject} className='card p-3 mb-4'>
        <h5>Add New Project</h5>
        <div className='row g-2'>
          <div className='col-md-3'><Form.Control placeholder='Title' required value={newProject.title}
            onChange={e => setNewProject({ ...newProject, title: e.target.value })} /></div>
          <div className='col-md-2'><Form.Select value={newProject.category}
            onChange={e => setNewProject({ ...newProject, category: e.target.value })}>
            <option>Technology</option><option>Healthcare</option><option>Education</option>
          </Form.Select></div>
          <div className='col-md-2'><Form.Control placeholder='Leader' required value={newProject.leaderName}
            onChange={e => setNewProject({ ...newProject, leaderName: e.target.value })} /></div>
          <div className='col-md-1'><Form.Control placeholder='Emoji' required value={newProject.leaderEmoji}
            onChange={e => setNewProject({ ...newProject, leaderEmoji: e.target.value })} /></div>
          <div className='col-md-2'><Form.Control placeholder='Deadline' required value={newProject.deadline}
            onChange={e => setNewProject({ ...newProject, deadline: e.target.value })} /></div>
          <div className='col-md-2 d-grid'><Button type='submit' variant='success'>Add</Button></div>
        </div>
      </Form>

      {/* Filter Buttons */}
      <div className='mb-3'>
        <Button size='sm' className='me-2' onClick={() => setFilter('All')}>All</Button>
        <Button size='sm' className='me-2' variant='danger' onClick={() => setFilter('Technology')}>Technology</Button>
        <Button size='sm' className='me-2' variant='primary' onClick={() => setFilter('Healthcare')}>Health</Button>
        <Button size='sm' variant='success' onClick={() => setFilter('Education')}>Educational</Button>
      </div>

      {/* Project Cards */}
      <div className='row g-3'>
        {filteredProjects.map((p, idx) => (
          <div key={p.id} className="col-sm-6 col-lg-4" data-aos="fade-up" data-aos-delay={idx * 50}>
            <div className='card h-100 shadow-sm'>
              <div className='card-body'>
                <h6>{p.leader.emoji} {p.title}</h6>
                <p className='small mb-1'><strong>Leader:</strong> {p.leader.name}</p>
                <p className='small mb-1'><strong>Deadline:</strong> {p.deadline}</p>
                <p className='small mb-1'><strong>Stage:</strong> <span className={`badge bg-${p.stage.color}`}>{p.stage.label}</span></p>
                <div className='progress mb-1' style={{ height: '6px' }}>
                  <div className='progress-bar' style={{ width: `${p.completion}%` }}></div>
                </div>
                <small>{p.completion}% Completed</small>
              </div>
              <div className='card-footer d-flex justify-content-between'>
                <Button size='sm' variant='outline-primary' onClick={() => {
                  setEditProject({ ...p, leaderName: p.leader.name, leaderEmoji: p.leader.emoji, stageLabel: p.stage.label, stageColor: p.stage.color });
                  setShowEditModal(true);
                }}>Edit</Button>
                <Button size='sm' variant='outline-danger' onClick={() => handleDelete(p.id)}>Delete</Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Modal */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton><Modal.Title>Edit Project</Modal.Title></Modal.Header>
        <Modal.Body>
          {editProject && <Form>
            <Form.Control className='mb-2' value={editProject.title}
              onChange={e => setEditProject({ ...editProject, title: e.target.value })} />
            <Form.Select className='mb-2' value={editProject.category}
              onChange={e => setEditProject({ ...editProject, category: e.target.value })}>
              <option>Technology</option><option>Healthcare</option><option>Education</option>
            </Form.Select>
            <Form.Control className='mb-2' value={editProject.leaderName}
              onChange={e => setEditProject({ ...editProject, leaderName: e.target.value })} />
            <Form.Control className='mb-2' value={editProject.leaderEmoji}
              onChange={e => setEditProject({ ...editProject, leaderEmoji: e.target.value })} />
            <Form.Control className='mb-2' value={editProject.stageLabel}
              onChange={e => setEditProject({ ...editProject, stageLabel: e.target.value })} />
            <Form.Control className='mb-2' value={editProject.stageColor}
              onChange={e => setEditProject({ ...editProject, stageColor: e.target.value })} />
            <Form.Control type='number' className='mb-2' value={editProject.completion}
              onChange={e => setEditProject({ ...editProject, completion: e.target.value })} />
          </Form>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={() => setShowEditModal(false)}>Close</Button>
          <Button variant='primary' onClick={handleEditSave}>Save</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AllProjects;
