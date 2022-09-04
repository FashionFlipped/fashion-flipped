import { flexbox } from "@mui/system";
import * as React from "react";
import { useState } from "react";
import { useMutation, useQuery } from "./../convex/_generated/react.ts";
import "./FitQuiz.css";

function Quiz({ addChoreLog }) {
  const setProfileMeta = useMutation("setProfileMeta");
  const [gender, setGender] = useState();
  const [name, setName] = useState();
  const [ssize, setSSize] = useState();
  const [psize, setPSize] = useState();
  const [season, setSeason] = useState();
  const [heightFeet, setFHeight] = useState();
  const [heightInches, setIHeight] = useState();

  const [pickImages, setPickImages] = useState(false);

  const images = useQuery("getQuizClothing");
  const [selected, setSelected] = useState({});

  const handleSubmit = (e) => {
    setProfileMeta(
      name,
      gender,
      heightFeet * 12 + heightInches,
      ssize,
      psize
    ).then(() => {
      setPickImages(true);
    });
    e.preventDefault();
  };

  return (
    <div>
      {!pickImages && (
        <>
        <div class="container">
        <div class="card">
        <form class="card-form">
        <div class="input">
        <input
        name="name"
        class="input-field"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
        <label class="input-label" type="text">Full Name</label>
        </div>
        <div class="input">

        <select class="input-field" value={gender} onChange={(e) => setGender(e.target.value)}>
        <option name="male"> Male</option>
        <option name="female">Female</option>
        </select>

        <label class="input-label">Gender</label>
        </div>

        <div class="input">
        <input
            name="heightinches"
            class="input-field"
            type="number"
            value={heightFeet}
            onChange={(e) => setFHeight(e.target.value)}
          />
        <label class="input-label">Height (feet)</label>
        </div>

        <div class="input">
        <input
            name="heightinches"
            class="input-field"
            type="number"
            value={heightInches}
            onChange={(e) => setIHeight(e.target.value)}
          />
        <label class="input-label">Height (inches)</label>
        </div>
        
        <div class="input">


          <select class="input-field" value={ssize} onChange={(e) => setSSize(e.target.value)}>
            <option name="X-Small">X-Small</option>
            <option name="Small"> Small</option>
            <option name="Medium">Medium</option>
            <option name="Large">Large</option>
            <option name="X-Large">X-Large</option>
          </select>

        <label class="input-label"> Shirt Size </label>
        </div>

        <div class="input">


          <select class="input-field" value={psize} onChange={(e) => setPSize(e.target.value)}>
            <option name="X-Small">X-Small</option>
            <option name="Small"> Small</option>
            <option name="Medium">Medium</option>
            <option name="Large">Large</option>
            <option name="X-Large">X-Large</option>
          </select>

        <label class="input-label"> Pant Size </label>
        </div>


        <div class="action">
        <button class="action-button" onClick={() => handleSubmit()}>Get started</button>
        </div>
        

        </form>
        </div>
        </div>
          
        </>
      )}

      {pickImages && images && (
        <ImagesDisplay
          images={images}
          selected={selected}
          setSelected={setSelected}
        />
      )}
    </div>
  );
}

const ImagesDisplay = ({ images, selected, setSelected }) => {
  React.useEffect(() => {
    console.log(images[0]._id.id);
    console.log(JSON.stringify(selected));
  }, [selected]);
  return (
    <>
      <div className="images-container">
        <div className="images-row">
          <div className="images-col">
            {images.slice(0, 3).map((image) => (
              <button
                key={image._id.id}
                className="image-button"
                onClick={() =>
                  setSelected((prev) => {
                    let res = { ...prev };
                    res[image._id.id] = res[image._id.id] ? false : true;
                    return res;
                  })
                }
              >
                <img
                  className={`image ${
                    selected[image._id.id] ? "image-selected" : ""
                  }`}
                  src={image.url}
                  height="200px"
                  width="200px"
                />
              </button>
            ))}
          </div>
          <div className="images-col">
            {images.slice(3, 6).map((image) => (
              <button
                key={image._id.id}
                className="image-button"
                onClick={() =>
                  setSelected((prev) => {
                    let res = { ...prev };
                    res[image._id.id] = res[image._id.id] ? false : true;
                    return res;
                  })
                }
              >
                <img
                  className={`image ${
                    selected[image._id.id] ? "image-selected" : ""
                  }`}
                  src={image.url}
                  height="200px"
                  width="200px"
                />
              </button>
            ))}
          </div>
          <div className="images-col">
            {images.slice(6, 9).map((image) => (
              <button
                key={image._id.id}
                className="image-button"
                onClick={() =>
                  setSelected((prev) => {
                    let res = { ...prev };
                    res[image._id.id] = res[image._id.id] ? false : true;
                    return res;
                  })
                }
              >
                <img
                  className={`image ${
                    selected[image._id.id] ? "image-selected" : ""
                  }`}
                  src={image.url}
                  height="200px"
                  width="200px"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
      <input type="submit" value="Submit" />
    </>
  );
};

export default Quiz;
