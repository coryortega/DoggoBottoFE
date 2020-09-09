import React, { useEffect, useState } from "react";
import axios from 'axios';
import DoggoCard from "./DoggoCard";
import '../admin.css'

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [doggos, setDoggos] = useState([])
  const [query, setQuery] = useState("");

  useEffect(() => {
    const getDoggos = () => {
      axios
        .get('http://localhost:4000/api/posts/images/')
        .then(response => {console.log(response.data)
          let data = response.data.filter( el => el.verified == null );
          // const data = response.data
          setDoggos(data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    
    getDoggos();
  }, [query]);

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  const handleYes = (id) => {
    console.log(doggos)
    axios
    .put(`http://localhost:4000/api/posts/images/${id}`, { verified: true })
    .then(response => {console.log(response.data)
        console.log(doggos,id, id-1)
        let doggosFiltered = doggos.filter( el => el.id !== id );
        // doggos.splice(id-1, 1)
        setDoggos([...doggosFiltered]);
        
    })
    .catch(error => {
      console.error('Server Error', error);
    });
  }

  const handleNo = (id) => {
    axios
    .put(`http://localhost:4000/api/posts/images/${id}`, { verified: false })
    .then(response => {console.log(response.data)
        console.log(doggos,id, id-1)
        let doggosFiltered = doggos.filter( el => el.id !== id );
        // doggos.splice(id-1, 1)
        setDoggos([...doggosFiltered]);
        
    })
    .catch(error => {
      console.error('Server Error', error);
    });
    }

  

  return (
    <div>
    <section className="character-list">
      {doggos.map(doggo => (
        <div className = "contain">
        <DoggoCard
            name={doggo.name}
            image={doggo.img}
            caption={doggo.caption}
        />
            <button 
                onClick={() => handleNo(doggo.id)}
                class="btn">NO
            </button>
            <button 
                onClick={() => handleYes(doggo.id)}
                class="btn1">YES
            </button>
        </div>
      ))}
    </section>
    </div>
    
  );
  
}