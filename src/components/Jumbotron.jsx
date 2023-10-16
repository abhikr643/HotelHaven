import React from "react";

function Jumbotron(){
    return(
        <div id="feature">
        <div>
        <div class="container py-1">
  <div class="p-5 text-center  rounded-3">
    <h1 class="text-body-emphasis">Find and book your perfect stay</h1>
    <br></br>
    <p className="background2">
        <div className="stay">
            <div className="stay-box">
            <img  src="./Images/moon-icon.png"></img>
            <p>Earn rewards on every night you stay</p>
            
            </div>
            <div className="stay-box">
            <img  src="./Images/tag-icon.png"></img>
            <p>Save more with Member Prices</p>
            </div>
            <div className="stay-box">
            <img  src="./Images/calendar-icon.png"></img>
            <p>Free cancellation options if plans change</p>
    

            </div>
        </div>
    </p>
  </div>
    </div>
        </div>
    

   <div className="background3">
   <h2 className="heading-jumbotron">Discover your new favourite stay</h2>
    <div class="container marketing py-5">
<div class="row">
  <div class="col-lg-4">
    <div className="jumb-circle-img">
    <img className="jumb-inside-img" src="./Images/sea-icon.png"></img>
    </div>
    
    <h2 class="fw-normal">Sea-View</h2>
    <p>Travel makes one modest, you see what a tiny place you occupy in the world.</p>
    <p><a class="btn btn-secondary" href="#">Explore »</a></p>
  </div>
  <div class="col-lg-4">

  <div className="jumb-circle-img">
    <img className="jumb-inside-img" src="./Images/spa-icon.png"></img>
    </div>
    <h2 class="fw-normal">Spa</h2>
   
    <p>The world is a book, and those who do not travel read only one page.</p>
    <p><a class="btn btn-secondary" href="#">Explore »</a></p>
  </div>
  <div class="col-lg-4">
  <div className="jumb-circle-img">
    <img className="jumb-inside-img" src="./Images/hottub-icon.png"></img>
    </div>
    <h2 class="fw-normal">Hot-tub</h2>
    <p>The best journeys in life are those that answer questions you never thought to ask.</p>
    <p><a class="btn btn-secondary" href="#">Explore »</a></p>
  </div>
</div>


<hr class="featurette-divider"/>
    <h2 class="featurette-heading fw-normal mt-5 py-3 lh-1">Explore stays in trending destinations <span class="text-body-secondary">It’ll blow your mind.</span></h2>
<hr class="featurette-divider"/>

<div class="row featurette">
  <div class="col-md-7">
    <br></br>
    <h3>1. Goa</h3>
    <p class="my-4">Lying on the western coast, Goa is India's smallest state and unlike any other, known for its endless beaches, stellar nightlife, eclectic seafood, world-heritage listed architecture. Spread across just 3,702 km, Goa lies in the Konkan region.</p>
  </div>
  <div class="col-md-5">
  <div className="place-img">
  <img src="./Images/goa.jpg"></img>
  </div>
  </div>
</div>

<hr class="featurette-divider"/>

<div class="row featurette">
  <div class="col-md-7">
  <br></br>
    <h3>2. Coorg</h3>
    <p class="my-4">Located amidst imposing mountains in Karnataka with a perpetually misty landscape, Coorg is a popular coffee producing hill station. It is popular for its beautiful green hills and the streams cutting right through them. It also stands as a popular destination because of its culture and people</p>
  </div>
  <div class="col-md-5">
  <div className="place-img">
  <img src="./Images/coorg.jpg"></img>
  </div>
  </div>
</div>

<hr class="featurette-divider"/>

<div class="row featurette">
  <div class="col-md-7">
    <br></br>
    <h3>3. Srinagar</h3>
    <p class="my-4">Famously known as 'Heaven on Earth, Srinagar is located in the union territory of Jammu & Kashmir, on the banks of river Jhelum. Srinagar is known for the stationary houseboats and gondola-type rowboats- Shikaras on Dal Lake. Adorned with tranquil Dal Lake & Nigeen Lake</p>
  </div>
  <div class="col-md-5">
  <div className="place-img">
  <img src="./Images/srinagar.jpg"></img>
  </div>
  </div>
</div>

<hr class="featurette-divider"/>

</div>
   </div>

   </div>
    )
}

export default Jumbotron;