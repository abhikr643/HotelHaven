import React from "react";

function Featuresprop(){
    return(
        <div>
            <div class="col">
          <div class="card shadow-sm">
            <img className="prop-image" src="Images/hotel.jpg"  alt="Bootstrap Themes"/>
            <div class="card-body">
            <h6>⭐8.2/10 (Wonderfull)</h6>
            <h4>HotelHaven Residency</h4>
            <p>₹2500   <span><s>₹4500</s></span> <br></br>(per night
            ₹3,299 total
            includes taxes & fees)
            </p>
              <p class="card-text">Vacations are the moments we live for, the memories we cherish, and the experiences that make life truly enjoyable.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-primary bg-dark">Details</button>
                  <button type="button" class="btn btn-sm btn-outline-info bg-dark">Book</button>
                </div>
                <small class="text-body-secondary">📍Goa</small>
              </div>
            </div>
          </div>
        </div>
        </div>
    )
}

export default Featuresprop;