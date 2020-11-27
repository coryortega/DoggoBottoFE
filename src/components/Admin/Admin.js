import React, { useEffect, useState } from "react";
import axios from "axios";
import DoggoCard from "../DoggoCard/DoggoCard";
import "./admin.css";

export default function CharacterList() {

  const [doggos, setDoggos] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const getDoggos = () => {
      axios
        .get(process.env.REACT_APP_DOGGOS_KEY)
        .then((response) => {
          let data = response.data.filter((el) => el.verified == null);
          // const data = response.data
          setDoggos(data);
        })
        .catch((error) => {
          console.error("Server Error", error);
        });
    };

    getDoggos();
  }, [query]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleYes = (doggo, id) => {
    axios
      .put(`${process.env.REACT_APP_PUT_KEY}${id}`, { verified: true })
      .then((response) => {
        let doggosFiltered = doggos.filter((el) => el.id !== id);
        setDoggos([...doggosFiltered]);
      })
      .catch((error) => {
        console.error("Server Error", error);
      });
  };

  const handleNo = (id) => {
    axios
      .put(`${process.env.REACT_APP_PUT_KEY}${id}`, { verified: false })
      .then((response) => {
        let doggosFiltered = doggos.filter((el) => el.id !== id);
        setDoggos([...doggosFiltered]);
      })
      .catch((error) => {
        console.error("Server Error", error);
      });
  };

  return (
    <div>
      <section className="character-list">
        {doggos.map((doggo) => (
          <div className="contain">
            <DoggoCard
              name={doggo.name}
              image={doggo.img}
              caption={doggo.caption}
              username={doggo.username}
            />
            <button onClick={() => handleNo(doggo.id)} class="btn">
              NO
            </button>
            <button onClick={() => handleYes(doggo, doggo.id)} class="btn1">
              YES
            </button>
          </div>
        ))}
      </section>
    </div>
  );
}
