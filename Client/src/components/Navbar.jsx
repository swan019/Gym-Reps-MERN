import '../App.css'
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar">
            <div className='navContent'>
                <div className='logo'>
                    <Link to='/'>
                        <h2 className=" text-2xl font-extrabold ">BodyDuccker</h2>
                    </Link>
                </div>
                <div className='login'>
                    <h3 className=''>
                        Login
                    </h3>
                </div>
            </div>
        </div>
    );
}

export default Navbar;