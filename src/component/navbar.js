import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from 'react-router-dom';
// import { Container, Navbar, NavbarBrand } from 'react-bootstrap';

import '../halaman/index.css';


const Navcomp = () => {
//     const ToggleclassName = () => {
//       const id1 = document.getElementById('1');
//       const id2 = document.getElementById('2');
      
//       id1.classNameList.toggle('show')
//       id2.classNameList.toggle('show')
//     }

// const Navcollapse = () => {
//     const navbarnav = document.getElementById('navbarNav')
//     const btn1 = document.getElementById('btn1')

//     btn1.classNameList.toggle('collapsed')
//     navbarnav.classNameList.replace('collapse', 'collapsing')
//     setTimeout(function(){
//       navbarnav.classNameList.replace('collapsing', 'collapse')
//     }, 200);
//     navbarnav.classNameList.toggle('show')

// }    
       return (
      //   <nav classNameName="navbar navbar-expand-lg navbar-light bg-2 shadow font-DMsans">
      //   <div classNameName="container-lg">
      //     <NavLink classNameName="navbar-brand" to="/">Matematika<i classNameName="bi bi-triangle"></i></NavLink>
      //     <button classNameName="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" id='btn1' aria-expanded="true" aria-label="Toggle navigation">
      //       <span classNameName="navbar-toggler-icon"></span>
      //     </button>
      //     <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      //     <div className="offcanvas-header">
      //       <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
      //       <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      //     </div>
      //     <div classNameName='offcanvas-body'>      
      //       <ul classNameName="navbar-nav justify-content-end flex-grow-1 pe-3">
      //         <li classNameName="nav-item">
      //           <NavLink classNameName="nav-link" exact aria-current="page" to="/main" ><i classNameName="bi bi-house-door"></i>Home</NavLink>
      //         </li>
      //         <li classNameName="nav-item">
      //           <NavLink classNameName="nav-link" to="/about">About</NavLink>
      //         </li>

      //         <li classNameName="nav-item">
      //           <NavLink classNameName="nav-link" to="/contact">Contact</NavLink>
      //         </li>
      //         {/* <ul classNameName="dropdown-menu" aria-labelledby="navbarDropdown">
      //           <li><Link classNameName="dropdown-item" to="#">Action</Link></li>
      //           <li><Link classNameName="dropdown-item" to="#">Another action</Link></li>
      //           <li><Link classNameName="dropdown-item" to="#">Something else here</Link></li>s
      //         </ul> */}
              // <li classNameName="nav-item dropdown" id='click'>
              //   <NavLink id='1' classNameName="nav-link dropdown-toggle" data-bs-toggle="dropdown" to='#' role="button" aria-expanded="false">Rumus</NavLink>
              //   <ul className="dropdown-menu dropdown-menu-dark" id='2'>
              //     <li><NavLink classNameName="dropdown-item" to="/main/rbd">Rumus Bangun Datar</NavLink></li>
              //     <li><NavLink classNameName="dropdown-item" to="/main/1">Coming Soon</NavLink></li>
              //     <li><NavLink classNameName="dropdown-item" to="/main/2">Coming Soon</NavLink></li>
              //     <li><NavLink classNameName="dropdown-item" to="/main/3">Coming Soon</NavLink></li>
              //   </ul>
              // </li>
      //       </ul>
      //     </div>
      //     </div>
      //   </div>
      // </nav>

      <div>
      <nav className="navbar navbar-light bg-2-1 ">
      <div className="container-lg ">
          <NavLink className="navbar-brand" to="/">Matematika</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header bg-1">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
              <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body bg-1">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/main">Home</NavLink>
              </li>
              <li className="nav-item">
                  <NavLink className="nav-link" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">Contact</NavLink>
              </li>
              <li className="nav-item dropdown">
                  <NavLink className="nav-link dropdown-toggle" to="#" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                  </NavLink>
                  <ul className="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
                  <li><NavLink className="dropdown-item" to="/main/rbd">Rumus Bangun Datar</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/main/1">Coming Soon</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/main/2">Something else here</NavLink></li>
                  </ul>
              </li>
              </ul>
          </div>
          </div>
      </div>
      </nav>
  </div>



       ) 
    
  

}

export default Navcomp;