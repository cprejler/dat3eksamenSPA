import React, { useState, useEffect} from "react";

import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import facade from "./apiFacade";


export default function UselessFact(){
    const options  = facade.makeOptions("GET", true);
    const[data, setData] = useState([]);

    
    
     useEffect(()=>{
        const fetchData = fetch("http://localhost:8080/CA3/api/uselessfact", options)
    .then((res) => res.json())
    .then((data) =>  setData(data))
    .catch((err) => console.log("fejl"))
    console.log(data)
      }, []);      
    

    
    return (
        <div className="container">
          <div  className="jumbotron">
            <h1 className="display-4 text-primary">Heres a useless fact</h1>
            <p  className="font-weight-bold">{data.text}</p>
          </div>
        </div>
      );


  };