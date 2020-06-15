import React, { useState, useEffect } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import facade from "./apiFacade";
import MovieCountResult from "./MovieCountResult";

export default function Movie() {
  const URL = "http://localhost:8080/dat3eksamen";

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
      const response = await fetch(URL + "/api/movie-count/title/" + param, options);
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
      
      <h3 className="Searchtitle">Get search info for a specific movie title</h3>
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
      {isClicked? <h4></h4> : <h3></h3>}
      {isFetched ? <MovieCountResult allData={allData} /> : <h1></h1>}
    </div>
  );
}
