import React, { useState, useEffect } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import facade from "./apiFacade";




export default function MovieCountResult({ allData }) {
  const {count} = allData;
  
  return (
   
        <div>
        <h1>{allData}</h1>
        
        </div>
  )
        
}
