import React from 'react';

class Tickets extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subject: "",
            assigned: "",
            status: "",
            ticketData: [
                {
                    ticketId: 1,
                    subject: "Leave not approved",
                    createdDate: "25/02/2024",
                    assigned: { name: "Ava", emoji: "👩‍💻" },
                    status: "Completed",
                    stage: { label: "Completed", color: "success" },
                    category: "Technology"
                },
                {
                    ticketId: 2,
                    subject: "System crash after update",
                    createdDate: "03/03/2024",
                    assigned: { name: "Liam", emoji: "🧑‍💻" },
                    status: "In Progress",
                    stage: { label: "In Progress", color: "warning" },
                    category: "Technology"
                },
                {
                    ticketId: 3,
                    subject: "Unable to access shared drive",
                    createdDate: "12/04/2024",
                    assigned: { name: "Emma", emoji: "👩‍💻" },
                    status: "Pending",
                    stage: { label: "Pending", color: "info" },
                    category: "Technology"
                },
                {
                    ticketId: 4,
                    subject: "Email server not responding",
                    createdDate: "20/04/2024",
                    assigned: { name: "Noah", emoji: "👨‍💻" },
                    status: "Completed",
                    stage: { label: "Completed", color: "success" },
                    category: "Technology"
                },
                {
                    ticketId: 5,
                    subject: "VPN login issues",
                    createdDate: "28/04/2024",
                    assigned: { name: "Sophia", emoji: "👩‍💼" },
                    status: "Rejected",
                    stage: { label: "Rejected", color: "danger" },
                    category: "Technology"
                },
                {
                    ticketId: 6,
                    subject: "Software license expired",
                    createdDate: "02/05/2024",
                    assigned: { name: "Ethan", emoji: "🧑‍💼" },
                    status: "In Progress",
                    stage: { label: "In Progress", color: "warning" },
                    category: "Technology"
                },
                {
                    ticketId: 7,
                    subject: "Printer not connecting to network",
                    createdDate: "08/05/2024",
                    assigned: { name: "Olivia", emoji: "👩‍🔧" },
                    status: "Pending",
                    stage: { label: "Pending", color: "info" },
                    category: "Technology"
                },
                {
                    ticketId: 8,
                    subject: "Laptop battery draining fast",
                    createdDate: "10/05/2024",
                    assigned: { name: "James", emoji: "👨‍💼" },
                    status: "In Progress",
                    stage: { label: "In Progress", color: "warning" },
                    category: "Technology"
                },
                {
                    ticketId: 9,
                    subject: "Software installation request",
                    createdDate: "12/05/2024",
                    assigned: { name: "Isabella", emoji: "👩‍💻" },
                    status: "Completed",
                    stage: { label: "Completed", color: "success" },
                    category: "Technology"
                },
                {
                    ticketId: 10,
                    subject: "Slow internet connectivity",
                    createdDate: "14/05/2024",
                    assigned: { name: "William", emoji: "👨‍🔧" },
                    status: "Rejected",
                    stage: { label: "Rejected", color: "danger" },
                    category: "Technology"
                }
            ]
        };
    }

    deleteTicket = (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this ticket?");
        if (!confirmDelete) return;

        const updatedTickets = this.state.ticketData.filter(ticket => ticket.ticketId !== id);
        this.setState({ ticketData: updatedTickets });
    }

    getStageByStatus = (status) => {
        switch (status) {
            case "Completed":
                return { label: "Completed", color: "success" };
            case "In Progress":
                return { label: "In Progress", color: "warning" };
            case "Pending":
                return { label: "Pending", color: "info" };
            case "Rejected":
                return { label: "Rejected", color: "danger" };
            default:
                return { label: "Unknown", color: "secondary" };
        }
    };

    createTicket = () => {
        const today = new Date();
        const newDate = `${String(today.getDate()).padStart(2, '0')}/${String(today.getMonth() + 1).padStart(2, '0')}/${today.getFullYear()}`;

        const newTicket = {
            ticketId: this.state.ticketData.length + 1,
            subject: this.state.subject,
            assigned: {
                name: this.state.assigned,
                emoji: "👨‍💻"
            },
            status: this.state.status,
            createdDate: newDate,
            stage: this.getStageByStatus(this.state.status),
            category: "Technology"
        };

        this.setState(prevState => ({
            ticketData: [...prevState.ticketData, newTicket],
            subject: "",
            assigned: "",
            status: "",
            successMessage: "Ticket created successfully!"
        }));

        setTimeout(() => {
            this.setState({ successMessage: "" });
        }, 3000);
    };



    render() {
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='mb-3 d-flex flex-row justify-content-between align-items-center'>
                            <div>
                                <h2>Tickets</h2>
                            </div>
                            <div aria-label="Basic mixed styles example">
                                <button data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn py-1 fw-bold fw-bold text-light btn-primary d-flex flex-row align-items-center mx-1" onClick={() => this.createTicket()}>Create Ticket<i className="bi ms-2 fs-4 fw-bold bi-plus-square-fill"></i></button>
                                
                            </div>
                            

                        </div>
                        <hr/>
                        <div className="card p-3 mb-4">
                            {this.state.successMessage && (
                                <div className="alert alert-success alert-dismissible fade show" role="alert">
                                    {this.state.successMessage}
                                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                </div>
                            )}

                            <div className="table-responsive">

                                <table className="table table-hover align-middle">
                                    <thead className="table-light">
                                        <tr>
                                            <th className='py-3'>TicketID</th>
                                            <th className='py-3'>Subject</th>
                                            <th className='py-3'>Assigned</th>
                                            <th className='py-3'>Created Date</th>
                                            <th className='py-3'>Status</th>
                                            <th className='py-3'>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.ticketData.map((ticket, index) => (
                                            <tr key={index}>
                                                <td className='py-3'>{ticket.ticketId}</td>
                                                <td className='py-3'>{ticket.subject}</td>
                                                <td className='py-3'>
                                                    <span className="me-2">{ticket.assigned.emoji}</span>
                                                    {ticket.assigned.name}
                                                </td>
                                                <td className='py-3'>{ticket.createdDate}</td>
                                                <td className='py-3'>
                                                    <span className={`badge bg-${ticket.stage.color}`}>
                                                        {ticket.stage.label}
                                                    </span>
                                                </td>
                                                <td className='py-3'>
                                                    <button
                                                        onClick={() => this.deleteTicket(ticket.ticketId)}
                                                        className='btn btn-danger'
                                                    >
                                                        <i className="bi bi-trash3-fill"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel">New Ticket</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <form>
                                                    <div className="mb-3">
                                                        <label for="recipient-name" className="col-form-label">Subject:</label>
                                                        <input required type="text" onChange={(e) => this.setState({ subject: e.target.value })} className="form-control" id="recipient-name" />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label for="message-text" className="col-form-label">Assigned:</label>
                                                        <input required type="text" onChange={(e) => this.setState({ assigned: e.target.value })} className="form-control" id="assigned-name" />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label for="message-text" className="col-form-label">Status:</label>
                                                        <input required type="text" onChange={(e) => this.setState({ status: e.target.value })} className="form-control" id="status" />
                                                    </div>
                                                </form>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                <button type="button" onClick={() => this.createTicket()} data-bs-dismiss="modal" className="btn btn-primary">Create</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Tickets;
