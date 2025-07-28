import React from 'react';
import { FaSearch, FaBell, FaCog } from 'react-icons/fa';
import '../App.css'

const Navbar2 = () => {
    return (

        <nav className="navbar navbar2 px-4 py-2">
            <div className="container-fluid d-flex flex-wrap justify-content-between align-items-center">


                <div className="d-flex align-items-center" style={{ width: '350px' }}>
                    <div className="input-group w-100">
                        <span className="input-group-text bg-light border-0">
                            <FaSearch />
                        </span>
                        <input
                            className="form-control fs-4 bg-light border-0"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                    </div>
                </div>

                <div className="d-flex align-items-center mt-3 mt-sm-2 mt-md-0 gap-4">
                    <FaBell className="fs-5" />
                  
                    <div className="text-end text-nowrap">
                        <strong className="d-block fs-5 fs-sm-6 fs-md-5 fs-lg-4">Rohini Khot</strong>
                        <div className="text-muted d-block fs-6">Admin Profile</div>
                    </div>

                    <img
                        src="/images/girl-profile.png"
                        alt="profile"
                        className="rounded-circle dnone"
                        width="40"
                        height="40"
                    />
                    <FaCog className="fs-5" />
                </div>

            </div>
        </nav>

    );
};

export default Navbar2;

