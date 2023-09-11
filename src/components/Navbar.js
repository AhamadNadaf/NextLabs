import React from "react";

const Navbar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-white border-bottom box-shadow">
            <div className="container-fluid">
                <a className="navbar-brand fs-2 display-4" href="#">NextGrowth Labs Pvt Ltd</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    </ul>
                    <form className="d-flex" role="search">
                        <ul className="navbar-nav  me-auto mb-2 mb-lg-0">
                            <li className="nav-item m-2">
                                <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item m-2">
                                <a className="nav-link" href="#">Enterprise</a>
                            </li>
                            <li className="nav-item m-2">
                                <a className="nav-link" href="#">Support</a>
                            </li>
                            <li className="nav-item m-2">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>
                            <li className="nav-item m-2">
                                <button className="btn btn-outline-primary" type="submit">Search</button>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </nav>
        </>
        
    )
}

export default Navbar