import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavComponent = () => {
  
  const total = 25000;
  const token = false;

 
  const formatTotal = (amount) => {
    return amount.toLocaleString('es-ES', { style: 'currency', currency: 'CLP' });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">¡Pizzería Mamma Mía! </a>
        <a className="navbar-brand" href="#">🍕 Home</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ">
            {token ? (
              <>
                <li className="nav-item">
                  <button className="btn btn-outline-light me-2">🔓 Profile</button>
                </li>
                <li className="nav-item">
                  <button className="btn btn-outline-light me-2">🔒 Logout</button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <button className="btn btn-outline-light me-2">🔐 Login</button>
                </li>
                <li className="nav-item">
                  <button className="btn btn-outline-light me-2">🔐 Register</button>
                </li>
              </>
            )}
            </ul>
            <ul className="navbar-nav ms-auto me-3">
              <li className="nav-item">
                <button className="btn btn-outline-primary">🛒 Total: {formatTotal(total)}</button>
              </li>
            </ul>
          
        </div>
      </div>
    </nav>
  );
};

export default NavComponent;