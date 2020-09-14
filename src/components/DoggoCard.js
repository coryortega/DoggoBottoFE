import React from "react";
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

const DoggoCard = props => {
  return (
    <div>
      <Card className = "card">
        <CardBody>
          <CardTitle><h2>{props.name}</h2></CardTitle>
          <CardSubtitle>Caption:</CardSubtitle>
          <CardText>{props.caption}</CardText>
          <CardText>Username: {props.username}</CardText>
        </CardBody>
        <div className = "imgContainer">
            <img className= "img" width="400px" src={props.image} alt="Card image cap" />
        </div>
      </Card>
    </div>
  );
};
export default DoggoCard;