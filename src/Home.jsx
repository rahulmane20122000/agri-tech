import react from 'react';
import Button from '@material-ui/core/Button';
import web from '../src/img/01.png';
import {NavLink} from 'react-router-dom';

const Home=()=>{
  
  return(
    <>
    <section id="header" className="d-flex align-items-center">
       <div className="row">
         <div className='col-10 mx-auto'>
         <div className='main_branch row'>
           <div className="heading col-md-6 mt-5 mt-lg-0 pt-5 pt-lg-0 order-2 order-lg-1 ">
             <h1>Grow Your Productivity With <strong className="brand-name">AGRI-TECH</strong> </h1>
             <h2 className="my-3">Where Technology Meets Agriculture</h2>
             <div className="btn_start mt-3">
             <Button><NavLink  to='/about'> Get-Started</NavLink></Button>
             </div>
           </div>
           <div className="col-lg-6 order-1 order-lg-2 header_img">
             <img src={web} className="img-fluid animated" alt="home img"/>
           </div>
           </div>
         </div>
       </div>
    </section>
    </>
  );
}

export default Home;
