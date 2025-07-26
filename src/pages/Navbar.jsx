import React from 'react'
import './Navbar2.css'
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navi w-100 navbar-expand-lg navbar-light bg-dark p-3 fixed-top">
                <div className="container-fluid d-flex justify-content-between">
                    <div className='d-flex flex-row align-items-center'>
                        <img src='images/adminlogo.jpg' className='img-fluid mx-2' style={{ height: "30px" }}></img>
                        <p className='text-light fs-5 m-0'>Admin<strong className='text-warning'>Dashboard</strong></p>
                    </div>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item mx-3">
                                <button className='btn btn-warning btn-sm text-light'>Add to cart</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar