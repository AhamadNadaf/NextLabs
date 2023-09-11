import React from "react";
import logo from '../asset/logo.png'

const Footer = () => {
    return (
        <div className="pt-4 my-md-5 pt-md-5 border-top">
            <div className="row">
                <div className="col-12 col-md">
                    <img className="mb-2" src={logo} alt="img" width="100" height="50" />
                    <small className="d-block mb-3 text-muted"> © 2023</small>
                </div>
                <div className="col-6 col-md">
                    <h5>Features</h5>
                    <ul className="list-unstyled  text-small">
                        <li>
                            <a href="#" className="nav-link text-muted" >
                            Cool stuff
                            </a>
                        </li>
                        <li>
                            <a className="nav-link text-muted" href="#">
                            Random feature
                            </a>
                        </li>
                        <li>
                            <a className="nav-link text-muted" href="#">
                            Team feature
                            </a>
                        </li>
                        <li>
                            <a className="nav-link text-muted" href="#">
                            Stuff for developers
                            </a>
                        </li>
                        <li>
                            <a className="nav-link text-muted" href="#">
                            Another one
                            </a>
                        </li>
                        <li>
                            <a className="nav-link text-muted" href="#">
                            Last time
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col-6 col-md">
                    <h5>Resources</h5>
                    <ul className="list-unstyled  text-small">
                        <li>
                            <a className="nav-link text-muted text-muted" href="#">
                            Resource
                            </a>
                        </li>
                        <li>
                            <a className="nav-link text-muted" href="#">
                            Resource name
                            </a>
                        </li>
                        <li>
                            <a className="nav-link text-muted" href="#">
                            Another resource
                            </a>
                        </li>
                        <li>
                            <a className="nav-link text-muted" href="#">
                            Final resource
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col-6 col-md">
                    <div>
                    <h5>About</h5>
                    <ul className="list-unstyled  text-small">
                        <li>
                            <a className="nav-link text-muted" href="#">
                            Team
                            </a>
                        </li>
                        <li>
                            <a className="nav-link text-muted" href="#">
                            Location
                            </a>
                        </li>
                        <li>
                            <a className="nav-link text-muted" href="#">
                            Privacy
                            </a>
                        </li>
                        <li>
                            <a className="nav-link text-muted" href="#">
                            Terms
                            </a>
                        </li>
                    </ul>
                    </div>
                    
                </div>

            </div>

        </div>
    )
}


export default Footer