import React from "react";
import { Card } from "react-bootstrap";

function CustomCard({ title, description, image }) {
  return (
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CustomCard;
