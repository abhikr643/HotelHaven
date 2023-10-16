import React from "react";
import Featuresprop from "./Features-prop";

function Features(){
    return(
        <div id="pricing" className=" feature-background">
        <div class="album py-5 ">
        <h1 className="features-heading">Pricing</h1>
    <div class="container">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        
        <Featuresprop/>
        <Featuresprop/>
        <Featuresprop/>
        <Featuresprop/>
        <Featuresprop/>
        <Featuresprop/>
        <Featuresprop/>
        <Featuresprop/>
        <Featuresprop/>
        

      </div>
    </div>
  </div>
        </div>
    )
}

export default Features;