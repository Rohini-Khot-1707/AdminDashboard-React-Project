import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

class Clients extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clientName: "",
            clientDesc: "",
            clientData: [
                { id: 1, name: "TCS", description: "Tata Consultancy Services" },
                { id: 2, name: "Infosys", description: "Global leader in next-gen digital services" },
                { id: 3, name: "Microsoft", description: "Empowering every person on the planet" },
                { id: 4, name: "Google", description: "Organizing the world’s information" },
                { id: 5, name: "Amazon", description: "E-commerce and cloud computing giant" },
                { id: 6, name: "Apple", description: "Innovative consumer electronics and software" },
                { id: 7, name: "IBM", description: "Building smarter businesses with technology" },
                { id: 8, name: "Wipro", description: "IT, consulting and business process services" },
                { id: 9, name: "HCL Technologies", description: "Global IT services and solutions provider" },
                { id: 10, name: "Capgemini", description: "Technology transformation experts" },
                { id: 11, name: "Accenture", description: "Global professional services company" },
                { id: 12, name: "Cisco", description: "Networking and cybersecurity solutions" },
                { id: 13, name: "Dell Technologies", description: "IT infrastructure and cloud innovation" },
                { id: 14, name: "Oracle", description: "Enterprise software and cloud applications" },
                { id: 15, name: "Adobe", description: "Digital media and marketing software" },
                { id: 16, name: "Salesforce", description: "CRM and cloud-based software leader" },
                { id: 17, name: "SAP", description: "Enterprise application software leader" },
                { id: 18, name: "Tech Mahindra", description: "IT services and consulting company" },
                { id: 19, name: "Zoho", description: "Cloud-based business tools for all" },
                { id: 20, name: "Mindtree", description: "Digital transformation and IT services" }
            ],
            successMessage: ""
        };
    }

    componentDidMount() {
        AOS.init({
            duration: 800,
            once: true
        });
    }

    deleteClient = (id) => {
        if (window.confirm("Are you sure you want to delete this client?")) {
            this.setState(prev => ({
                clientData: prev.clientData.filter(client => client.id !== id)
            }));
        }
    }

    createClient = () => {
        const { clientName, clientDesc, clientData } = this.state;
        if (!clientName.trim()) return;

        const newClient = {
            id: clientData.length + 1,
            name: clientName,
            description: clientDesc || "No description"
        };

        this.setState({
            clientData: [...clientData, newClient],
            clientName: "",
            clientDesc: "",
            successMessage: "Client added successfully!"
        });

        setTimeout(() => this.setState({ successMessage: "" }), 3000);
    }

    renderClientCard = (client) => (
        <div className="col-12 col-sm-6 col-lg-4 mb-1" key={client.id} data-aos="fade-up">
            <div
                className="card shadow-sm h-100 border-0 rounded-4"
                style={{ background: "linear-gradient(135deg, #ffffff, #f7f9fc)" }}
            >
                <div className="card-body p-3">
                    <h5 className="card-title h6 fw-semibold mb-2">{client.name}</h5>
                    <p className="card-text small text-muted mb-3">{client.description}</p>
                    <button
                        className="btn btn-outline-danger btn-sm w-100"
                        onClick={() => this.deleteClient(client.id)}
                    >
                        <i className="bi bi-trash3-fill me-1"></i>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );

    render() {
        const { clientData, clientName, clientDesc, successMessage } = this.state;

        return (
            <div className="container py-2 py-md-4">
                {/* Header */}
                <div className='row'>
                    <div className='col-12'>
                        <div
                            className="card p-2 p-md-3 mb-2 mb-md-3 d-flex flex-column flex-md-row justify-content-between align-items-center border-0 shadow-sm rounded-4"
                            style={{ background: "linear-gradient(135deg, #ffffff, #f7f9fc)" }}
                        >
                            <h2 className="h5 fw-semibold mb-2 mb-md-0">Clients</h2>
                            <button
                                data-bs-toggle="modal"
                                data-bs-target="#clientModal"
                                className="btn btn-outline-primary fw-bold"
                            >
                                <span className="d-none d-md-inline">Add Client</span>
                                <i className="bi bi-person-plus ms-2"></i>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Success message */}
                {successMessage && (
                    <div className="row">
                        <div className="col-12">
                            <div className="alert alert-success alert-dismissible fade show mb-3" role="alert">
                                {successMessage}
                                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Client cards */}
                <div className="row g-3">
                    {clientData.length > 0 ? (
                        clientData.map(this.renderClientCard)
                    ) : (
                        <div className="col-12">
                            <div className="card shadow-sm border-0 rounded-4">
                                <div className="card-body text-center py-4">
                                    <i className="bi bi-people fs-1 text-muted mb-2"></i>
                                    <h5 className="card-title">No Clients Found</h5>
                                    <p className="card-text text-muted">Add your first client using the button above</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Modal */}
                <div className="modal fade" id="clientModal" tabIndex="-1" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content rounded-4">
                            <div className="modal-header">
                                <h5 className="modal-title">Add New Client</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                            </div>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label className="form-label small">Client Name:</label>
                                    <input
                                        type="text"
                                        className="form-control form-control-sm"
                                        value={clientName}
                                        onChange={(e) => this.setState({ clientName: e.target.value })}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label small">Description:</label>
                                    <textarea
                                        className="form-control form-control-sm"
                                        rows="3"
                                        value={clientDesc}
                                        onChange={(e) => this.setState({ clientDesc: e.target.value })}
                                    ></textarea>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary btn-sm" data-bs-dismiss="modal">Close</button>
                                <button
                                    className="btn btn-primary btn-sm"
                                    data-bs-dismiss="modal"
                                    onClick={this.createClient}
                                >
                                    Add Client
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Clients;
