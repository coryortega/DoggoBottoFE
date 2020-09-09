import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Tweet } from 'react-twitter-widgets'
import './DoggoOTDCard.css'


const DoggoOTDCard = props => {

    const [doggoOTD, setDoggoOTD] = useState("1303045434508800001")

    // useEffect(() => {
    //     const getDoggo = () => {
    //       axios
    //         .get('http://localhost:4000/api/posts/images/')
    //         .then(response => {console.log(response.data)
    //           setDoggoOTD(response.data);
    //         })
    //         .catch(error => {
    //           console.error('Server Error', error);
    //         });
    //     }
    //     getDoggo();
    //   }, []);

  return (
    <div>
        <h3>Doggo of the Day!</h3>
        <div className="doggo">
            <Tweet tweetId={doggoOTD} />
        </div>
    </div>
  );
};
export default DoggoOTDCard;
