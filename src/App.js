import React, { Component } from "react";
import Categories from "./Categories";
import { Row, Col, Container } from "reactstrap";
import BlogPost from "./BlogPost";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BlogDetail from "./BlogDetail"
import { Routes, Route } from "react-router-dom";

export default class App extends Component {
  state = {
    categories: [],
    selectedCategory: "",
    posts: [],
    selectedBlog: null,
  };

  getBlogPosts = (categoryId) => {
    let url = "http://localhost:3000/blogPosts";
    if (categoryId != null) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ posts: data }));
  };

  componentDidMount() {
    this.getBlogPosts();
    this.getCategories();
  }

  changeCategory = (category) => {
    this.setState({ selectedCategory: category.categoryName });
    this.getBlogPosts(category.id);
  };

  // selectedBlog = (blog) => {
  //   this.setState({ selectedBlog: blog });
  //   window.location.replace("http://localhost:3001/blogDetail/");
  // };


  selectBlog = (blog) => {
    this.setState({ selectedBlog: blog });
    
  };

  getCategories = () => {
    fetch("http://localhost:3000/categories")
    .then((response) => response.json())
    .then((data) => this.setState({categories : data}))
  }

  render() {
    return (
      <div>
        <Container>
          <Navbar />
          <Row>
            <Col xs="3">
              <Categories changeCategory={this.changeCategory} x = {this.state.categories} />
            </Col>
            <Col xs="9">
              <Routes>
                <Route path="/" element={<BlogPost selectedCategory={this.state.selectedCategory} posts={this.state.posts} selectBlog = {this.selectBlog} 
                />} />
                <Route path="/blogDetail/:id" element={<BlogDetail selectedBlog={this.state.selectedBlog}/>} />
              </Routes>
            </Col>
          </Row>
          <Footer />
        </Container>
      </div>
    );
  }
}
