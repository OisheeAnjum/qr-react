import React from 'react'
import {Link} from 'react-router-dom';
export const Navbar = () => {
    return (
        <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">

      <div className='container'>
            <a className="navbar-brand" href="#">QR Generator</a>
            
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            
            
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <Link to ='/'>
                <li className="nav-item">
                <a className="nav-link active" aria-current="page">Home</a>
                </li>
            </Link>
               
            </ul>
            
            </div>
        </div>
    </nav> 
        </div>
    )
}
