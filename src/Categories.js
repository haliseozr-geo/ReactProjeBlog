import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class Categories extends Component {

  
  render() {

    return (
      <ListGroup>
        {this.props.x.map((category) => (
          <ListGroupItem
            
            onClick={() => this.props.changeCategory(category)}
            key={category.id}
          >
            {category.categoryName}
          </ListGroupItem>
        ))}
      </ListGroup>
    );
  }
}
