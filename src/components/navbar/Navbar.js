import React from 'react';
import { Link } from "react-router-dom";

const Navbar = (props) => {
    return (
        <>
        <ul className="sidebar_dropdowns accordion" id="accordionExample">
                <li><Link to="/DashboardContent"><span className="menu_icon"><i className="fa fa-dashboard"></i></span>Dashboard </Link></li>
                <li><Link to="/Area"><span className="menu_icon"><i className="fa fa-map-marker"></i></span>Area </Link></li>
                {/* <li className="accordion-item bg-transparent border-0">
                    <a className="collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                    <span className="menu_icon"><i className="fa fa-map-marker"></i></span>Area <span className="menu_arrow"><i className="fa fa-angle-right"></i></span></a>
                    <ul id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <li><Link to="/City">City</Link></li>
                        <li><Link to="/Locality">Locality</Link></li>
                        <li><Link to="/SubLocality">Sub Locality</Link></li>
                    </ul>
                </li> */}
        </ul>
        
        </>
    );
}

export default Navbar;