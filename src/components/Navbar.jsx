import React from "react";
import { useNavigate , Link} from 'react-router-dom';

function Navbar(){
  const navigate = useNavigate();

  const handleClicksignin = () => {
    navigate('/login');
  };

  const handleClicksignup = () => {
    navigate('/signup');
  };


    return(
        <div>
        <header className="header p-3">
        <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center  mb-3 mb-lg-0 text-white text-decoration-none">
            <img src="/Images/icon.png" alt="icon"></img>
            <h3 className="logoname">HotelHaven</h3>
        </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-1">
          <li><a href="#home" class="nav-link px-3 text-white">Home</a></li>
          <li><a href="#feature" class="nav-link px-3 text-white">Features</a></li>
          <li><a href="#pricing" class="nav-link px-3 text-white">Pricing</a></li>
          <li><a href="#about" class="nav-link px-3 text-white">About</a></li>
        </ul>

        <div class="text-end">
        <Link to="/login"><button type="button" class="btn btn-outline-light me-4" onClick={handleClicksignin} target="_blank" >Login</button></Link>
        <Link to="/signup"><button type="button" class="btn btn-warning" onClick={handleClicksignup}>Sign-up</button></Link>

        </div>
      </div>
    </div>
  </header>
        </div>
    )
}

export default Navbar;