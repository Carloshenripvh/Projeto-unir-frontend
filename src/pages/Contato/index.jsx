import React, { Component } from "react";
import api from "../../services/api";

import filesize from "filesize";

class Main extends Component {
  state = {
    uploadedFiles: [],
    livros: []
  };

  async componentDidMount() {
    const response = await api.get("posts");
    const response2 = await api.get("posts/processed");
    console.log(response2);
    this.setState({
      uploadedFiles: response.data.map(file => ({
        id: file._id,
        name: file.name,
        readableSize: filesize(file.size),
        preview: file.url,
        uploaded: true,
        url: file.url
      }))
    });
    this.setState({
      livros: response2.data.map(file =>({
        id: file.id,
        livro: file.livro
      }))
    })
  }

  render(){
   const {  livros } = this.state;
  return (
    <div style={{ margin: "0",height:"auto", marginTop:"20px"}}>
      {/* {uploadedFiles.map((file => (
        <span>{file.name}</span>
      ))) } */}
      <p style={{marginTop:"60px", overflow: "auto"}}> 
      {livros.map((file => (
          file.livro 
        ))) }
     </p>
    </div>

  );
  }
}

export default Main