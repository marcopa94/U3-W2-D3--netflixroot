import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function CurrentURL() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const apiLink = `http://www.omdbapi.com/?i=${movieId}&apikey=8e159e72`;

      try {
        const response = await fetch(apiLink);
        if (!response.ok) {
          throw new Error("Failed to fetch movie details");
        }
        const movieData = await response.json();
        setMovieDetails(movieData);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      }
    };

    fetchMovieDetails();

    return () => {
      setMovieDetails(null);
      setIsLoading(true);
      setIsError(false);
    };
  }, [movieId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching movie details.</div>;
  }

  if (!movieDetails) {
    return <div>No movie details found.</div>;
  }

  return (
    <div id="boxInfo">
      <h2>Movie Details:</h2>
      <img src={movieDetails.Poster} alt="" id="poster"></img>
      <p>Title: {movieDetails.Title}</p>
      <p>Year: {movieDetails.Year}</p>
      <p>Rated: {movieDetails.Rated}</p>
      <p>Runtime: {movieDetails.Runtime}</p>
    </div>
  );
}

export default CurrentURL;
