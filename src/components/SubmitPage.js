import React from "react";
import FileUpload from "./FileUpload";
import DoggoOTDCard from "./DoggoOTDCard";
import './SubmitPage.css'

const SubmitPage = () => {
  return (
    <div className="wrapper-submit">
      <div className="form-wrapper">
        <FileUpload/>
      </div>
      <div className="doggo-wrapper">
        <DoggoOTDCard/>
      </div>
    </div>
  );
};
export default SubmitPage;