import React, { useEffect, useState } from "react";
import axios from "axios";
import { Tweet } from "react-twitter-widgets";
import "./DoggoOTDCard.css";

const DoggoOTDCard = (props) => {
  const [doggoOTD, setDoggoOTD] = useState("1305219747559223298");

  useEffect(() => {
      const getDoggo = () => {
        axios
          .get('https://doggobase.herokuapp.com/api/posts/images/posted')
          .then(response => {
            if(response.data.twitter_id){
              setDoggoOTD(response.data.twitter_id)
            }
          })
          .catch(error => {
            console.error('Server Error', error);
          });
      }
      getDoggo();
    }, []);

  return (
    <div className="DOTD">
      <h3>Doggo of the Day!</h3>
      <div className="doggo">
        <Tweet tweetId={doggoOTD} />
      </div>
    </div>
  );
};
export default DoggoOTDCard;
