import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.png';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';



const Header = () => {
    return (
        <Navbar sticky="top" bg="dark" variant="light">
            <img className="logo" src={logo} alt="" />
            Button


            <FontAwesomeIcon className="search-icon" icon={faSearch} />
            <input type="text" placeholder="        Search your Destination..." className="search-box" />

            <Nav className="ml-auto px-5">

                <li>
                    <Link to="/home"> Home</Link>
                </li>
                <li>
                    <Link to="/home">Destination</Link>
                </li>
                <li>
                    <Link to="/home">Blog</Link>
                </li>
                <li>
                    <Link to="/home">Contact</Link>
                </li>

                <Button className="btn" variant="warning">Search</Button>

            </Nav>

        </Navbar>
    );
};

export default Header;