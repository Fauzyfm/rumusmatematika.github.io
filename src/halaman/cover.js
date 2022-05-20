import React from 'react';
import './cover.css';
import {Link} from 'react-router-dom';

const Cover = () => {
  return ( 
    // <div className='container-xxl bg-dark cover'>
    //   <div className='row'>
    //     <div className='col-md-12 text-center text-light'>
    //       <p>Hello</p>
    //       <p>RUMUS MATEMATIKA</p>
    //       <div className='start'>Get Started</div>
    //       <div>About</div> 
    //     </div>
    //   </div>
    // </div>
    <div className='container-xxl mt-5 '>
      <div className='row justify-content-start ps-3'>
        <div className='col-md-10 text-start text-light fs-1'>
          <p>Rumus Matematika</p>
        </div>
      </div>
      <div className='row justify-content-start ps-3'>
        <div className='col-md-6 text-start text-light fs-2'>
          <p>Disini kalian bisa mencari berbagai rumus-rumus matematika untuk menyelesaikan masalah dari soal matematika kalian!</p>
          <div className='start mt-5  text-light text-center'>
          <Link className='text-decoration-none text-light fs-4 ' to="/main">Get Started</Link>
          </div>
        </div>
      </div>

    </div>
   );
}
 
export default Cover;
