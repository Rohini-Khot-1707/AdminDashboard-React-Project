import HorizontalBars from "./HorizontalBars";

const attendanceData = [
    {
        srNo: 1,
        date: '2024-01-15',
        punchInTime: '09:00 AM',
        punchOutTime: '06:30 PM',
        breakTime: '01:00',
        halfDay: false,
        fullDay: true,
        overTimeHours: '1.5',
        totalHours: '8.5'
    },
    {
        srNo: 2,
        date: '2024-01-16',
        punchInTime: '09:15 AM',
        punchOutTime: '06:00 PM',
        breakTime: '00:45',
        halfDay: false,
        fullDay: true,
        overTimeHours: '0',
        totalHours: '8.0'
    },
    {
        srNo: 3,
        date: '2024-01-17',
        punchInTime: '09:30 AM',
        punchOutTime: '02:00 PM',
        breakTime: '00:30',
        halfDay: true,
        fullDay: false,
        overTimeHours: '0',
        totalHours: '4.0'
    },
    {
        srNo: 4,
        date: '2024-01-18',
        punchInTime: '08:45 AM',
        punchOutTime: '07:30 PM',
        breakTime: '01:15',
        halfDay: false,
        fullDay: true,
        overTimeHours: '2.5',
        totalHours: '9.5'
    },
    {
        srNo: 5,
        date: '2024-01-19',
        punchInTime: '09:00 AM',
        punchOutTime: '06:00 PM',
        breakTime: '01:00',
        halfDay: false,
        fullDay: true,
        overTimeHours: '0',
        totalHours: '8.0'
    }
];

const EmployeeView = () => {
    return (
        <div className="container py-3">
            {/* Header */}
            <div
                className="card mb-3 p-3 p-md-4 shadow-sm border-0 rounded-4 text-center text-md-start"
                style={{ background: "linear-gradient(135deg, #f8fafc, #e0f2fe)" }}
            >
                <h4 className="mb-0 fw-semibold">Employees Work Analysis</h4>
            </div>

            {/* Attendance Table */}
            <div className="card p-3 shadow-sm border-0 rounded-4 mb-4">
                <h6 className="mb-3 fw-semibold text-center text-md-start">Employee Attendance</h6>
                <div className="table-responsive">
                    <table className="table table-hover align-middle mb-0">
                        <thead className="table-light">
                            <tr className="text-center text-nowrap">
                                <th className="py-3">SR.NO</th>
                                <th className="py-3">DATE</th>
                                <th className="py-3">PUNCH IN</th>
                                <th className="py-3">PUNCH OUT</th>
                                <th className="py-3">BREAK</th>
                                <th className="py-3">HALF DAY</th>
                                <th className="py-3">FULL DAY</th>
                                <th className="py-3">OVERTIME (HRS)</th>
                                <th className="py-3">TOTAL HOURS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {attendanceData.map((record, index) => (
                                <tr className="text-center" key={index}>
                                    <td className="py-2">{record.srNo}</td>
                                    <td className="py-2">{record.date}</td>
                                    <td className="py-2">{record.punchInTime}</td>
                                    <td className="py-2">{record.punchOutTime}</td>
                                    <td className="py-2">{record.breakTime}</td>
                                    <td className="py-2">
                                        {record.halfDay ? (
                                            <i className="bi bi-check-circle text-success fs-6"></i>
                                        ) : (
                                            <i className="bi bi-x-circle text-danger fs-6"></i>
                                        )}
                                    </td>
                                    <td className="py-2">
                                        {record.fullDay ? (
                                            <i className="bi bi-check-circle text-success fs-6"></i>
                                        ) : (
                                            <i className="bi bi-x-circle text-danger fs-6"></i>
                                        )}
                                    </td>
                                    <td className="py-2">{record.overTimeHours}</td>
                                    <td className="py-2">{record.totalHours}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Working Hours Chart */}
            <div className="card p-3 p-md-4 shadow-sm border-0 rounded-4">
                <h6 className="mb-3 fw-semibold text-center">Employee Working Hours</h6>
                <div className="bg-white rounded-3">
                    <HorizontalBars />
                </div>
            </div>
        </div>
    );
};

export default EmployeeView;
