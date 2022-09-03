import * as React from 'react';
import { useState } from 'react';

  function Quiz({ addChoreLog }) {
    const [gender, setGender] = useState();
    const [name, setName] = useState();
    const [season, setSeason] = useState();
    const handleSubmit= (e) => {
      addChoreLog([name, gender, season])
      e.preventDefault();
    }
  
    return (
      <form onSubmit={e => { handleSubmit(e) }}>
        <label>Full Name:</label>
        <br />
        <input 
          name='name' 
          type='text'
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <br/>
        <label>Gender:</label>
        <br />
        <select value={gender} onChange= {e => setGender(e.target.value)}> 
                  <option name="male"> Male</option>
                  <option name="female">Female</option>
        </select>
        <br />
        <label>Favorite Season:</label>
        <br />
        <select value={season} onChange= {e => setSeason(e.target.value)}> 
                  <option name="fall"> Fall</option>
                  <option name="summer">Summer</option>
                  <option name="winter">Winter</option>
                  <option name="spring">Spring</option>
        </select>
        <br/>
        <input 
          type='submit' 
          value='Submit' 
        />
      </form>
    )
  }

  export default Quiz;