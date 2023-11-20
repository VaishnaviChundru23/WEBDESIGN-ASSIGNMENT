import React, { Component } from 'react';
import "../Card/Card.css"

export default class Card extends Component {
    state = {
        click: false,
        // Initially, no file is selected
        selectedFile: null
      };
       
      // On file select (from the pop up)
      onFileChange = event => {
       
        // Update the state
        this.setState({ selectedFile: event.target.files[0] });
       
      };
       
      // On file upload (click the upload button)
      onFileUpload = () => {
       this.setState({click: true})
      };
       
      // File content to be displayed after
      // file upload is complete
      fileData = () => {
       
        if (this.state.click) {
            
          return (
            <div>
              <h2>File Details:</h2>
              <p>File Name: {this.state.selectedFile.name}</p>
    
              <p>File Type: {this.state.selectedFile.type}</p>
    
              <p>
                Last Modified:{" "}
                {this.state.selectedFile.lastModifiedDate.toDateString()}
              </p>
    
            </div>
          );
        } else {
          return (
            <div>
              <br />
              <p style={{fontSize:"12px"}}>Choose before Pressing the Upload button</p>
            </div>
          );
        }
      };
       
      render() {
        var upload = {
            backgroundColor: "#f05d07",
            // WebkitFilter: "drop-shadow(0px 0px 5px #666)",
            filter: "drop-shadow(0px 0px 5px #666)",
            color:"white",
            border:"1px solid #f05d07",
            marginTop:"20px",
            padding: "2px 20px",
        };
        return (
          <div className='fileMain'>
            <h3>{this.props.heading}</h3>
              <div className='file'>
                  <input type="file" onChange={this.onFileChange} />
                  <button onClick={this.onFileUpload} style={upload}>
                    Upload!
                  </button>
              </div>
            {this.fileData()}
          </div>
        );
      }
    }
