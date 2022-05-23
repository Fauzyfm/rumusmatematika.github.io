//Import core-module/npm
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
//Import core-module/npm 

//Import Halaman main Web
import Navcomp from './component/navbar.js';
import Main from './halaman/main.js';
import Contact from './halaman/contact.js';
import About from './halaman/about.js';
import Cover from './halaman/cover.js';

// halaman rbd
import MainRBD from './halaman/halaman-rbd/main-rbd.js';
import Segitiga from './halaman/halaman-rbd/segitiga.js';
import Kubus from './halaman/halaman-rbd/kubus.js';
import Tabung from './halaman/halaman-rbd/tabung.js';
import Segiempat from './halaman/halaman-rbd/segi-empat.js';
import Persegipanjang from './halaman/halaman-rbd/persegi-panjang.js';
import Layang from './halaman/halaman-rbd/layang-layang.js';
import Lingkaran from './halaman/halaman-rbd/lilngkaran.js';
import Balok from './halaman/halaman-rbd/balok.js';

//Import Halaman Web
import 'bootstrap/dist/css/bootstrap.min.css';
import './halaman/cover.css';
import './component/modal.scss';
import './halaman/index.css';




const App = () => {
  return (
    <Router>
      <div>
        <Navcomp />
        <Routes>
          <Route exact path='/' element={<Cover />} />
          <Route path='/main' element={<Main />}/>
          <Route path='/main/rbd' element={<MainRBD />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/main/rbd-segitiga' element={<Segitiga />} />
          <Route path='/main/rbd-kubus' element={<Kubus />}/>
          <Route path='/main/rbd-tabung' element={<Tabung />}/>
          <Route path='/main/rbd-segi-empat' element={<Segiempat />}/>
          <Route path='/main/rbd-persegi-panjang' element={<Persegipanjang />}/>
          <Route path='/main/rbd-layang-layang' element={<Layang />}/>
          <Route path='/main/rbd-lingkaran' element={<Lingkaran />}/>
          <Route path='/main/rbd-balok' element={<Balok />}/>

        </Routes>   
      </div>
    </Router>
    

  )

  
}

ReactDOM.render(<App />, document.getElementById('root'))