import react from 'react';
import {NavLink} from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
const Navbar = () => {

   
    return (

       
        <>
        
         <nav className="navbar navbar-expand-lg navbar-light ">
         
  <NavLink className="navbar-brand" to="/">AGRI TECH</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <NavLink activeClassName="menu_active" exact className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="menu_active" exact className="nav-link" to="/about">About us</NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="menu_active" exact className="nav-link" to="/contact">Contact us</NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="menu_active" exact className="nav-link" to="/services">Services</NavLink>
      </li>
      
    
    </ul>
   
  </div>
  
</nav>

        </>
    );
}

export default Navbar;