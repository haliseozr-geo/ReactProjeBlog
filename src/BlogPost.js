import React, { Component } from "react";
import {Link} from 'react-router-dom'
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
  CardGroup,
  Col
} from "reactstrap";

export default class BlogPost extends Component {
  
  render() {
    const { posts, selectBlog, selectedCategory } = this.props;
    
    return (
      <div>
        <h2>{selectedCategory}</h2>
        <CardGroup>
          {posts.map((post) => (
            <Col xs="3" key={post.id}>
              <Card>
                <CardImg top width="100%" src={post.image} alt={post.title} />
                <CardBody>
                  <CardTitle>{post.title}</CardTitle>
                  <CardText>{post.content1}</CardText>
                  {/* <Link to={`/blogDetail/${post.id}`}><Button onClick={() => selectBlog(post)}>Detay</Button></Link> */}
                  <Link to={`/blogDetail/${post.id}`}><Button onClick={() => selectBlog(post)}>Detay</Button></Link>
                </CardBody>
              </Card>
            </Col>
          ))}
        </CardGroup>
      </div>
    );
  }
}
