import React, { useState, useEffect } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import facade from "./apiFacade";
import CachedMovieResult from "./CachedMovieResult";

export default function CachedMovie() {
  const URL = "https://casperprejler.xyz/dat3eksamen";

  const options = facade.makeOptions("GET", true);
  const [allData, setAllData] = useState([]);
  const [search, setSearch] = useState();
  const [isClicked, setIsClicked] = useState(false);
  const [isFetched, setIsFetched] = useState(false);


  function handleSearch(event) {
    setSearch(event.target.value);
  }
  async function getData(param) {
    const options = facade.makeOptions("GET", true);
    
    try {
      const response = await fetch(URL + "/api/movie-info-all-v2/title/" + param, options);
      const json = await response.json();
      setAllData(json);
      if(response.status === 200){
        setIsFetched(true);
        setIsClicked(false); 
      }
      
      
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="backgroundColorWhite container-fluid" >
      
      <h3 className="Searchtitle">Search for a Movie</h3>
      <input className="searchBar"
        type="text" 
        value={search}
         onChange={handleSearch}
        placeholder="Movie"
      ></input>
      <button className="SearchClick"
        onClick={(event) => {
          event.preventDefault();
          getData(search);
          setIsClicked(true);
        }}
      >
        Search
      </button>
      {isClicked? <h4 class="loader"></h4> : <h3></h3>}
      {isFetched ? <CachedMovieResult allData={allData} /> : <h1></h1>}
    </div>
  );
}
