import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from 'react-router-dom';
// import { Container, Navbar, NavbarBrand } from 'react-bootstrap';


const Navcomp = () => {
//     const Toggleclass = () => {
//       const id1 = document.getElementById('1');
//       const id2 = document.getElementById('2');
      
//       id1.classList.toggle('show')
//       id2.classList.toggle('show')
//     }

// const Navcollapse = () => {
//     const navbarnav = document.getElementById('navbarNav')
//     const btn1 = document.getElementById('btn1')

//     btn1.classList.toggle('collapsed')
//     navbarnav.classList.replace('collapse', 'collapsing')
//     setTimeout(function(){
//       navbarnav.classList.replace('collapsing', 'collapse')
//     }, 200);
//     navbarnav.classList.toggle('show')

// }    
       return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow font-DMsans">

        <div className="container-lg">
          <NavLink className="navbar-brand" to="/">Matematika<i className="bi bi-triangle"></i></NavLink>
          <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" id='btn1' aria-expanded="true" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link" exact aria-current="page" to="/main" ><i className="bi bi-house-door"></i>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
              </li>
              {/* <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="#">Action</Link></li>
                <li><Link className="dropdown-item" to="#">Another action</Link></li>
                <li><Link className="dropdown-item" to="#">Something else here</Link></li>s
              </ul> */}
              <li className="nav-item dropdown" id='click'>
                <NavLink id='1' className="nav-link dropdown-toggle" data-bs-toggle="dropdown" to='#' role="button" aria-expanded="false">Rumus</NavLink>
                <ul class="dropdown-menu dropdown-menu-dark" id='2'>
                  <li><NavLink className="dropdown-item" to="/main/rbd">Rumus Bangun Datar</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/main/1">Coming Soon</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/main/2">Coming Soon</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/main/3">Coming Soon</NavLink></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
       ) 
    
  

}

export default Navcomp;