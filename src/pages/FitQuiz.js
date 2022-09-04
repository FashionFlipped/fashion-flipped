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

  const [pickImages, setPickImages] = useState(true);

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
          <label>Full Name:</label>
          <br />
          <input
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label>Gender:</label>
          <br />
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option name="male"> Male</option>
            <option name="female">Female</option>
          </select>
          <br />
          <label>Favorite Season:</label>
          <br />
          <select value={season} onChange={(e) => setSeason(e.target.value)}>
            <option name="fall"> Fall</option>
            <option name="summer">Summer</option>
            <option name="winter">Winter</option>
            <option name="spring">Spring</option>
          </select>
          <br />
          <label>Height (feet):</label>
          <br />
          <input
            name="heightfeet"
            type="number"
            value={heightFeet}
            onChange={(e) => setFHeight(e.target.value)}
          />
          <br />
          <label>Height (inches):</label>
          <br />
          <input
            name="heightinches"
            type="number"
            value={heightInches}
            onChange={(e) => setIHeight(e.target.value)}
          />
          <br />
          <label> Shirt Size </label>
          <br />
          <select value={ssize} onChange={(e) => setSSize(e.target.value)}>
            <option name="X-Small">X-Small</option>
            <option name="Small"> Small</option>
            <option name="Medium">Medium</option>
            <option name="Large">Large</option>
            <option name="X-Large">X-Large</option>
          </select>
          <br />
          <label> Pant Size </label>
          <br />
          <select value={psize} onChange={(e) => setPSize(e.target.value)}>
            <option name="X-Small">X-Small</option>
            <option name="Small"> Small</option>
            <option name="Medium">Medium</option>
            <option name="Large">Large</option>
            <option name="X-Large">X-Large</option>
          </select>
        </>
      )}

      {pickImages && images && (
        <ImagesDisplay
          images={images}
          selected={selected}
          setSelected={setSelected}
        />
      )}
      <button onClick={() => handleSubmit()}>Next</button>
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
