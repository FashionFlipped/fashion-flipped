import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";


function BoxSelection () {
  //console.log(props.location.state)
  const navigate = useNavigate()
  const location = useLocation()
  console.log(location)

  useEffect(() => {
    if(location.state == null){
      navigate('/subscriptionTiers')
    }
  }, []);

  return(
    <div>
      <h1>
        Box Selection Page
      </h1>
      {location.state ? (
        <h6>
          User selected:  {location.state.option} 
        </h6>
        )
      : 
      (<h2>error occurred</h2>)}
    </div>
  )
};

export default BoxSelection;
