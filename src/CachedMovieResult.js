import React, { useState, useEffect } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import facade from "./apiFacade";




export default function CachedMovieResult({ allData }) {
  const {title, year, plot, directors, genres, cast, poster} = allData;
  
  
  return (
   
    
        <div>
        <h1>Details for {title}:</h1>
        
          
          <p>Year: {year}</p>
          <p>Plot: {plot} </p>
          <p>Directors: {directors}</p>
          <p>Genres: {genres}</p>
          <p>Cast: {cast}</p>
          <p>Poster: {poster}</p>
          
        </div>
  )
        
}
