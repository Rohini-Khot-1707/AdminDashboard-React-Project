import React from 'react'

const NextInterviews = ({ name, role, time, psvg }) => {
    return (
        <>
            <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-4">
                    <img src={psvg} alt="user" width={40} />
                    <div>
                        <strong>{name}</strong><br />
                        <span className="text-muted">{role}</span>
                    </div>
                </div>
                <span>{time}</span>

            </div>
            <hr />
        </>
    )
}

export default NextInterviews