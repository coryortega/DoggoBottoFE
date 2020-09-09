import React, { Component } from "react";
import FileUploadForm from "./SubmitPage";
import {
  Form,
  Button,
  FormGroup,
  Label,
  Input,
  FormText,
  FormFeedback,
} from "reactstrap";
import axios from "axios";
import "./FileUpload.css";

class FileUpload extends Component {
  constructor() {
    super();
    this.state = {
      file: null,
      name: "",
      caption: "",
    };
  }

  submitFile = (event) => {
    if (this.state.file == null || this.state.name == "") {
      alert(
        "ERROR: Please make sure a doggo image is uploaded along with a name"
      );
    } else {
      event.preventDefault();
      const formData = new FormData();
      formData.append("image", this.state.file[0]);
      formData.append("name", this.state.name);
      formData.append("caption", this.state.caption);
      axios
        .post(process.env.REACT_APP_DB_KEY, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          alert(
            "SUCCESS: Your doggo has been sent to DoggoBotto! If approved, you will see it posted in the near future (っ◔◡◔)っ."
          );
        })
        .catch((error) => {
          alert(`ERROR: ${error}`);
        });
    }
  };

  handleFileUpload = (event) => {
    this.setState({ file: event.target.files });
  };

  handleNameUpload = (event) => {
    this.setState({ name: event.target.value });
  };

  handleCaptionUpload = (event) => {
    this.setState({ caption: event.target.value });
  };

  render() {
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <Form onSubmit={this.submitFile}>
            <h3>
              Upload your Doggo to <strong>♥</strong>DoggoBotto
              <strong>♥</strong>
            </h3>
            <FormGroup>
              <Label for="exampleEmail">Doggo Name:</Label>
              <Input
                type="text"
                name="name"
                id="exampleEmail"
                onChange={this.handleNameUpload}
                placeholder="What is your Doggo's name?"
              />
            </FormGroup>
            <FormGroup>
              <Label for="username">Twitter Username:</Label>
              <Input
                type="text"
                name="username"
                id="username"
                placeholder="Your Twitter username (optional)"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">Caption:</Label>
              <Input
                type="textarea"
                name="caption"
                id="exampleText"
                onChange={this.handleCaptionUpload}
                placeholder="Can be a quote or anything, keep it PG (optional)"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleFile">File:</Label>
              <Input
                type="file"
                name="file"
                id="exampleFile"
                encType="multipart/form-data"
                onChange={this.handleFileUpload}
              />
              <FormText color="muted">
                Upload a picture of your Doggo here. Please make sure the
                picture and caption are both appropriate or the image will not
                get posted.
              </FormText>
            </FormGroup>
            <div className="btn-wrapper">
              <Button type="submit">Submit</Button>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

export default FileUpload;
