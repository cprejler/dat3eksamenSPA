import React, { useState, useEffect } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import facade from "./apiFacade";




export default function MovieDetailedResult({ movieInfo, movieRatings }) {
  const {title, year, plot, directors, genres, cast, poster} = movieInfo;
  const {imdbDTO, mcDTO, rtDTO} = movieRatings
  
  
  return (
   
    
        <div>
        <h1>Details for {title}:</h1>
        
          
          <p>Year: {year}</p>
          <p>Plot: {plot} </p>
          <p>Directors: {directors}</p>
          <p>Genres: {genres}</p>
          <p>Cast: {cast}</p>
          <p>Poster: {poster}</p>

          <h2>Ratings:</h2>
          <h3>IMDB:</h3>
          <p>Rating{imdbDTO.imdbRating}</p>
          <p>Votes {imdbDTO.imdbVotes}</p>
          <h3>Metacritic</h3>
          <p>Rating: {mcDTO.metacritic}</p>
          <h3>Rotten Tomatoes</h3>
          <h4>Viewer Ratings:</h4>
          <p>Rating: {rtDTO.viewerRating}</p>
          <p>Number of reviews: {rtDTO.numViewerReviews}</p>
          <p>Meter: {rtDTO.viewerMeter}</p>
          <h4>Critic Ratings:</h4>
          <p>Rating: {rtDTO.criticRating}</p>
          <p>Number of reviews: {rtDTO.numCriticReviews}</p>
          <p>Meter: {rtDTO.criticMeter}</p>
          
        </div>
  )
        
}
