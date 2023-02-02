import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Header(props) {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <Link className="navbar-brand" to="#">{ props.title }</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
                </li>
            </ul>
            {/* agr searchBar true ho toh show kro vrna nhi */}
            { props.searchBar ? <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form> : "" }
            </div>
        </div>
        </nav>
    </>
  );
}

// default props se hum props ki ek default value dedete hai taaki agr humne unko koi value assign ni ki toh vo ye value lele
Header.defaultProps = {
    title: "Your Title Here!",
    searchBar: true
}

// PropTypes se hum data-type assign krdete hai taaki agr glti se kuch or data-type dediya toh error show hoye
Header.prototypes = {
    title: PropTypes.string,
    searchBar: PropTypes.bool.isRequired
    // isRequired means ki btana hi pdega ki searchBar hai ya ni => means true/false dena pdega
    // agr default bhi ni diya toh error aaega
}
