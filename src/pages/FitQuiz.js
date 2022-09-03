import { flexbox } from '@mui/system';
import * as React from 'react';
import { useState } from 'react';

  function Quiz({ addChoreLog }) {
    const [gender, setGender] = useState();
    const [name, setName] = useState();
    const [ssize, setSSize] = useState();
    const [psize, setPSize] = useState();
    const [season, setSeason] = useState();
    const [heightFeet, setFHeight] = useState();
    const [heightInches, setIHeight] = useState();



    const handleSubmit= (e) => {
      addChoreLog([name, gender, season, ssize, psize])
      e.preventDefault();
    }

    const styles = {
        container: {
          backgroundColor: "#f1f1f1",
          display: flexbox
        },
        inputText: {
          padding: "10px",
          color: "red",
        },
      };
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
        <label>Height (feet):</label>
        <br />
        <input 
          name='heightfeet' 
          type='number'
          value={heightFeet}
          onChange={e => setFHeight(e.target.value)}
        />
        <br/>
        <label>Height (inches):</label>
        <br />
        <input 
          name='heightinches' 
          type='number'
          value={heightInches}
          onChange={e => setIHeight(e.target.value)}
        />
        <br/>
        <label> Shirt Size </label>
        <br />
        <select value={ssize} onChange= {e => setSSize(e.target.value)}> 
                  <option name="X-Small">X-Small</option>
                  <option name="Small"> Small</option>
                  <option name="Medium">Medium</option>
                  <option name="Large">Large</option>
                  <option name="X-Large">X-Large</option>
        </select>
        <br/>
        <label> Pant Size </label>
        <br />
        <select value={psize} onChange= {e => setPSize(e.target.value)}> 
                  <option name="X-Small">X-Small</option>
                  <option name="Small"> Small</option>
                  <option name="Medium">Medium</option>
                  <option name="Large">Large</option>
                  <option name="X-Large">X-Large</option>
        </select>
        <br />
        <br />
        <div class="container" style={styles.container}>
  <div class="row">
    <div class="col-sm">
      One of three columns
    </div>
    <div class="col-sm">
      One of three columns
    </div>
    <div class="col-sm">
      One of three columns
    </div>
  </div>
</div>
        <input 
          type='submit' 
          value='Submit' 
        />
      </form>
    )
  }

  export default Quiz;