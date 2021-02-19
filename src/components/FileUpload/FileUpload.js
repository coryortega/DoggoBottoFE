import React, { Component } from "react";
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
      username: null,
      caption: "",
      characterCount: false,
      loading: false
    };
  }

  submitFile = (event) => {
    if (this.state.file == null || this.state.name == "" || this.state.caption.length >= 250) {
      alert(
        "ERROR: Please make sure a doggo image is uploaded along with a name and caption count that is less than 250"
      );
    } else {
      event.preventDefault();
      this.setState({ loading: true })
      const formData = new FormData();
      formData.append("image", this.state.file[0]);
      formData.append("name", this.state.name);
      formData.append("username", this.state.username);
      formData.append("caption", this.state.caption);
      axios
        .post(process.env.REACT_APP_DB_KEY, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log(response)
          this.setState({
            loading: false,
            name: "",
            username: "",
            caption: "",
            characterCount: false,
          })
          this.setState({
            username: null
          })
          alert(
            `SUCCESS: Your doggo has been sent to DoggoBotto! If approved, you will see it posted in the near future (っ◔◡◔)っ.`
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

  handleUsernameUpload = (event) => {
    this.setState({ username: event.target.value });
  };

  handleCaptionUpload = (event) => {
    this.setState({ caption: event.target.value });
    if(this.state.caption.length >= 250){
      this.setState({ characterCount: true })
    } else {
      this.setState({ characterCount: false })
    }
    console.log(this.state.caption.length)
  };

  render() {
    console.log(this.state.name)
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <Form onSubmit={this.submitFile}>
            <h3>
              Upload your Doggo to <strong>♥</strong>DoggoBotto
              <strong>♥</strong>
            </h3>
            <FormGroup>
              <Label for="name">Doggo Name:</Label>
              <Input
                value={this.state.name}
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
                value={this.state.username}
                type="text"
                name="username"
                id="username"
                onChange={this.handleUsernameUpload}
                placeholder="Your Twitter username (optional)"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">Caption:</Label>
              <Input
                value={this.state.caption}
                type="textarea"
                name="caption"
                id="exampleText"
                onChange={this.handleCaptionUpload}
                placeholder="Can be a quote or anything, keep it PG (optional)"
              />
              <div className={`box ${this.state.characterCount? "red-text" : ""}`}>Characer count: {this.state.caption.length}</div>
            </FormGroup>
            <FormGroup>
              <Label for="exampleFile">File:</Label>
              <Input
                type="file"
                name="file"
                id="exampleFile"
                encType="multipart/form-data"
                accept=".jpg,.png,.jpeg"
                onChange={this.handleFileUpload}
              />
              <FormText color="muted">
                Upload a picture of your Doggo here. Please make sure the
                picture and caption are both appropriate or the image will not
                get posted.
              </FormText>
            </FormGroup>
            <div className={this.state.loading ? "btn-hide" : "btn-wrapper"}>
              <Button type="submit">Submit</Button>
            </div>
            <div className={this.state.loading ? "loading" : "load-hide"}>
              <div className="load-wrapper">
                <div class="loader"></div>
                <p>Uploading doggo...</p>
              </div>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

export default FileUpload;
