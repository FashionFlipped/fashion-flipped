import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function PaymentSubmission () {
  const [name, setName] = useState();
  const [dob, setDOB] = useState();
  const [address, setAddress] = useState();
  const [CCProvider, setCCProvider] = useState();
  const [CCNumber, setCCNumber] = useState();
  const [CCCVC, setCCCVC] = useState();
  const [CCExpiration, setCCExpiration] = useState();
  //console.log(props.location.state)
  const navigate = useNavigate()
  const location = useLocation()
  console.log(location)

  const submitPayment = () => {
    
  }

  useEffect(() => {
    if(location.state == null){
      navigate('/subscriptionTiers')
    }

    fetch("./api/hello")
    .then(response => response.text())
    .then(text => console.log(text))
    .catch(error => console.log(error));
  }, []);
  
  return(
    <div
        sx={{
          width: 500,
          maxWidth: '100%',
          alignContent: 'center'
        }}
      >
      <h1>
        Payment Submission Page
      </h1>      
      {location.state ? (
        <h3>
          You selected:  {location.state.option} 
        </h3>
        )
      : 
      (<h2>error occurred</h2>)}  
      <TextField
          label="Full Name"
          id="outlined-start-adornment"
          sx={{ m: 1, width: '50ch' }}
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <TextField
          label="Date of Birth"
          value={dob}
          id="outlined-start-adornment"
          sx={{ m: 1, width: '50ch' }}
          onChange={(event) => setDOB(event.target.value)}
        />
        <TextField
          label="Full Address"
          id="outlined-start-adornment"
          value={address}
          sx={{ m: 1, width: '50ch' }}
          onChange={(event) => setAddress(event.target.value)}
        />
        <TextField
        label="Credit Card Provider"
        id="outlined-start-adornment"
        sx={{ m: 1, width: '50ch' }}
        onChange={(event) => setCCProvider(event.target.value)}
        value={CCProvider}
        />
        <TextField
          label="Credit Card Number"
          id="outlined-start-adornment"
          sx={{ m: 1, width: '50ch' }}
          onChange={(event) => CCNumber(event.target.value)}
          value={CCNumber}
        />
        <TextField
          label="Credit Card Expiration"
          id="outlined-start-adornment"
          sx={{ m: 1, width: '50ch' }}
          onChange={event => setCCExpiration(event.target.value)}
          borderColor="#256670"
          />
          <Stack direction="row" spacing={2} sx={{alignContent: 'center'}}>
            <Button variant="contained" color="success">
                Submit
            </Button>
          </Stack>
    </div>
  )
};

export default PaymentSubmission;
