import React from 'react';

class Holidays extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            holidayDay: "",
            holidayDate: "",
            holidayName: "",
            holidayData: [
                { id: 1, day: "Tuesday", date: "January 26, 2021", name: "Republic Day" },
                { id: 2, day: "Friday", date: "April 2, 2021", name: "Good Friday" },
                { id: 3, day: "Monday", date: "April 30, 2021", name: "Memorial Day" },
                { id: 4, day: "Wednesday", date: "August 15, 2021", name: "Independence Day" },
                { id: 5, day: "Thursday", date: "October 2, 2021", name: "Gandhi Jayanti" },
                { id: 6, day: "Friday", date: "November 5, 2021", name: "Diwali" },
                { id: 7, day: "Wednesday", date: "March 29, 2021", name: "Holi" },
                { id: 8, day: "Saturday", date: "July 10, 2021", name: "Eid al-Adha" },
                { id: 9, day: "Sunday", date: "May 9, 2021", name: "Mother's Day" },
                { id: 10, day: "Monday", date: "September 6, 2021", name: "Labor Day" },
                { id: 11, day: "Thursday", date: "December 25, 2021", name: "Christmas" },
                { id: 12, day: "Saturday", date: "January 1, 2022", name: "New Year's Day" },
                { id: 13, day: "Sunday", date: "April 4, 2021", name: "Easter Sunday" },
                { id: 14, day: "Wednesday", date: "August 18, 2021", name: "Raksha Bandhan" }
            ],
            successMessage: ""
        };
    }

    addHoliday = () => {
        const { holidayDay, holidayDate, holidayName, holidayData } = this.state;
        if (!holidayDay || !holidayDate || !holidayName) return;

        const newHoliday = {
            id: holidayData.length + 1,
            day: holidayDay,
            date: holidayDate,
            name: holidayName
        };

        this.setState(prev => ({
            holidayData: [...prev.holidayData, newHoliday],
            holidayDay: "",
            holidayDate: "",
            holidayName: "",
            successMessage: "Holiday added successfully!"
        }));

        setTimeout(() => {
            this.setState({ successMessage: "" });
        }, 3000);
    }

    deleteHoliday = (id) => {
        if (window.confirm("Delete this holiday?")) {
            this.setState(prev => ({
                holidayData: prev.holidayData.filter(h => h.id !== id)
            }));
        }
    }

    render() {
        const { holidayData, successMessage } = this.state;

        return (
            <div className="container py-3">
                {/* Header */}
                <div
                    className="card mb-3 p-2 p-md-3 d-flex flex-column flex-md-row justify-content-between align-items-center border-0 shadow-sm rounded-4"
                    style={{ background: "linear-gradient(135deg, #ffffff, #f8fafc)" }}
                >
                    <h5 className="mb-2 mb-md-0 fw-semibold">Holidays</h5>
                    <button
                        className="btn btn-outline-primary fw-bold d-flex align-items-center"
                        data-bs-toggle="modal"
                        data-bs-target="#holidayModal"
                    >
                        <i className="bi bi-plus-circle me-2"></i>
                        Add Holiday
                    </button>
                </div>

                {/* Success message */}
                {successMessage && (
                    <div className="alert alert-success alert-dismissible fade show" role="alert">
                        {successMessage}
                        <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
                    </div>
                )}

                {/* Table */}
                <div className="card shadow-sm rounded-4 p-3">
                    <div className="table-responsive">
                        <table className="table table-hover align-middle mb-0">
                            <thead className="table-light">
                                <tr>
                                    <th>#</th>
                                    <th>Day</th>
                                    <th>Date</th>
                                    <th>Holiday Name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {holidayData.map((h, index) => (
                                    <tr key={h.id}>
                                        <td>{String(index + 1).padStart(2, '0')}</td>
                                        <td className={`text-${h.day === "Wednesday" ? "success" : "secondary"}`}>{h.day}</td>
                                        <td className={`text-${h.day === "Wednesday" ? "success" : "secondary"}`}>{h.date}</td>
                                        <td className={`text-${h.day === "Wednesday" ? "success" : "secondary"}`}>{h.name}</td>
                                        <td>
                                            <button className="btn btn-light btn-sm me-2">
                                                <i className="bi text-success bi-pencil-square"></i>
                                            </button>
                                            <button className="btn btn-light btn-sm" onClick={() => this.deleteHoliday(h.id)}>
                                                <i className="bi text-danger bi-trash3-fill"></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Modal */}
                <div className="modal fade" id="holidayModal" tabIndex="-1" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content rounded-4">
                            <div className="modal-header">
                                <h5 className="modal-title">Add Holiday</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                            </div>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label className="form-label small">Holiday Day</label>
                                    <input
                                        type="text"
                                        className="form-control form-control-sm"
                                        value={this.state.holidayDay}
                                        onChange={(e) => this.setState({ holidayDay: e.target.value })}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label small">Holiday Date</label>
                                    <input
                                        type="text"
                                        className="form-control form-control-sm"
                                        value={this.state.holidayDate}
                                        onChange={(e) => this.setState({ holidayDate: e.target.value })}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label small">Holiday Name</label>
                                    <input
                                        type="text"
                                        className="form-control form-control-sm"
                                        value={this.state.holidayName}
                                        onChange={(e) => this.setState({ holidayName: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary btn-sm" data-bs-dismiss="modal">Close</button>
                                <button className="btn btn-success btn-sm" data-bs-dismiss="modal" onClick={this.addHoliday}>Add Holiday</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Holidays;
