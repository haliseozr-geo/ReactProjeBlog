import React, { Component } from "react";

export default class BlogDetail extends Component {
  render() {
    const { selectedBlog } = this.props;
    
    
    return (
      <div>
        <h2>{selectedBlog.title}</h2>
        <p>{selectedBlog.content2}</p>
        <img src={"/"+selectedBlog.image} alt={selectedBlog.title} ></img>
      </div>
    );
  }
}
