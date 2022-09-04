import { SettingsInputAntennaTwoTone } from '@mui/icons-material';
import { padding } from '@mui/system';
import React, { Component, useState } from 'react'
import "./styles.css";


const About = () => {
   const [name, setName] = useState()
   const [gender, setGender] = useState()
   const [submit, setSubmit] = useState()
   const [email, setEmail] = useState()

    return (
      <>
        <div>
            <h1 style= {{paddingTop:30}}class= 'mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
                Are you a budding designer?
            </h1>
        </div>
        <div>
                <h3 style={{paddingBottom:50, fontWeight: 300, fontSize: 30}}> We need you!</h3>
                <p class= 'pr-5 mb-5 text-base text-gray-700 md:text-lg'> At FashionFlipped we will pay you to do what you love - redesign clothes into new trendy fashion! </p>
                <p></p>
                <p class='pr-5 mb-5 text-base text-gray-700 md:text-lg'>All while you build your portfolio and transition the world to sustainable fashion</p>
        </div>
        <div class="quiz-container">
            <div class="card">
              <div class="card-form">
                <div class="input">
                  <input
                    name="name"
                    class="input-field"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <label class="input-label">Full Name</label>
                </div>
                <div class="input">
                  <select
                    class="input-field"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <option name="male"> Male</option>
                    <option name="female">Female</option>
                  </select>

                  <label class="input-label">Gender</label>
                </div>
                <div class="input">
                  <input
                    name="email"
                    class="input-field"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label class="input-label">Full Name</label>
                </div>
                <div class="action">
                        <button class="action-button" onClick={(e) => setSubmit(e.target.value)}>
                        Submit
                        </button>
                        
                    </div>
                    {submit ? <text>Submit Successful!</text>: <text></text>}
            </div>
        </div>
    </div>
        </>
            
    );
  };
    
  export default About;