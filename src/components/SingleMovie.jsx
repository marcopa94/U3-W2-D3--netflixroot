import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

class SingleMovie extends React.Component {
  render() {
    const { img, imdbID } = this.props;
    return (
      <Link to={`/Dettagli/${imdbID}`} style={{ textDecoration: "none" }}>
        <Card style={{ width: "10rem", cursor: "pointer" }}>
          <Card.Img variant="top" src={img} />
        </Card>
      </Link>
    );
  }
}

export default SingleMovie;
