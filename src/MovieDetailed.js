import React, { useState, useEffect } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import facade from "./apiFacade";
import MovieDetailedResult from "./MovieDetailedResult";

export default function MovieDetailed() {
  const URL = "https://casperprejler.xyz/dat3eksamen";

  const options = facade.makeOptions("GET", true);
  const [movieInfo, setMovieInfo] = useState([]);
  const [movieRatings, setMovieRatings] = useState([]);

  const [search, setSearch] = useState();
  const [isClicked, setIsClicked] = useState(false);
  const [isInfoFetched, setIsInfoFetched] = useState(false);
  const [isRatingFetched, setIsRatingFetched] = useState(false);



  function handleSearch(event) {
    setSearch(event.target.value);
  }
  async function getMovieInfo(param) {
    const options = facade.makeOptions("GET", true);
    
    try {
      const response = await fetch(URL + "/api/movie-info/title/" + param, options);
      const json = await response.json();
      setMovieInfo(json);
      if(response.status === 200){
        setIsInfoFetched(true);
        setIsClicked(false); 
      }
      
      
    } catch (error) {
      console.log(error);
    }
  }
  async function getMovieRating(param) {
    const options = facade.makeOptions("GET", true);
    
    try {
      const response = await fetch(URL + "/api/movie-info-all-ratings/title/" + param, options);
      const json = await response.json();
      setMovieRatings(json);
      if(response.status === 200){
        setIsRatingFetched(true)
        setIsClicked(false); 
      }
      
      
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="backgroundColorWhite container-fluid" >
      
      <h3 className="Searchtitle">Premium Search for a Movie</h3>
      <input className="searchBar"
        type="text" 
        value={search}
         onChange={handleSearch}
        placeholder="Movie"
      ></input>
      <button className="SearchClick"
        onClick={(event) => {
          event.preventDefault();
          getMovieInfo(search);
          getMovieRating(search);
          setIsClicked(true);
        }}
      >
        Search
      </button>
      {isClicked? <h4 class="loader"></h4> : <h3></h3>}
      {isInfoFetched && isRatingFetched ? <MovieDetailedResult movieInfo={movieInfo} movieRatings={movieRatings} /> : <h1></h1>}
    </div>
  );
}
