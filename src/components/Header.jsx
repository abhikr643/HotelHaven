import React from "react";

function Header(){
    return(
        <div id="home">
        <div className="main row flex-lg-row-reverse align-items-center px-5 g-5 py-5">
      <div className=" col-10 col-sm-8 col-lg-6">
        <img className="main-image" src="Images/holiday.jpg"  alt="Bootstrap Themes"/>
      </div>
      <div class="col-lg-6">
        <h1 className="main-heading display-5 fw-bold  lh-1 mb-3">Hi! Welcome to HotelHaven</h1>
        <p className="lead">Vacations are the moments we live for, the memories we cherish, and the experiences that make life truly enjoyable.</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <a href="#pricing"><button type="button" class="btn btn-primary btn-lg px-4 me-md-2" fdprocessedid="rhqlto">Book Now</button></a>
          <a href="#feature"><button type="button" class="btn  btn-dark btn-lg px-4" fdprocessedid="73oox2">Features</button></a>
        </div>
      </div>
        </div>


        {/* book your HotelHaven */}

        
        </div>
    )
}

export default Header;