import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Spinner, Alert } from "react-bootstrap";
import SingleMovie from "./SingleMovie";
import "../styles.css";

class Movies extends React.Component {
  state = {
    movies: [],
    isLoading: true,
    isError: false,
  };

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies = () => {
    const apiLink = "http://www.omdbapi.com/?i=tt3896198&apikey=8e159e72";
    fetch(`${apiLink}&s="${this.props.title.toLowerCase()}"`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        }
        return response.json();
      })
      .then((moviesRequest) => {
        this.setState({ movies: moviesRequest.Search, isLoading: false });
      })
      .catch((error) => {
        this.setState({ isError: true, isLoading: false });
      });
  };

  render() {
    const { movies, isLoading, isError } = this.state;

    if (isLoading) {
      return (
        <div className="text-center mt-5">
          <Spinner animation="border" variant="success" />
        </div>
      );
    }

    if (isError) {
      return (
        <div className="text-center mt-5">
          <Alert variant="danger">Qualcosa è andato stortoooooooo</Alert>
        </div>
      );
    }

    return (
      <>
        <h2>{this.props.category}</h2>
        <Col className="ms-5">
          {movies && movies.slice(0, 8).map((movie) => <SingleMovie key={movie.imdbID} img={movie.Poster} />)}
        </Col>
      </>
    );
  }
}

export default Movies;
