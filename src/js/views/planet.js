import React, {useState, useEffect, useContext}from 'react';
import { Context } from "../store/appContext";
import Link from "react-router-dom";

export const Planet = (props) => {
    console.log(props)
    const { store, actions } = useContext(Context);
    const fetchPlanets = "https://www.swapi.tech/api/"
    useEffect(() => {
        actions.loadPlanet(id);
    }, []);
    console.log(store)
    let id = props.match.params.id;
    return (
        <div>
           {!store.planet ? <h1>loading</h1> : 
           <div className="container">
               <img style={{height: 300, width: 400}} src="https://upload.wikimedia.org/wikipedia/en/6/6d/Tatooine_%28fictional_desert_planet%29.jpg" className="imgtop"/>
               <h1 style={{color: 'white'}}>{store.planet.name}</h1>
               <li>
                   Population: {store.planet.population}
               </li>
               <li>
                   Diameter: {store.planet.diameter}
               </li>
               <li>
                   Climate: {store.planet.climate}
               </li>
               <li>
                   Terrain: {store.planet.terrain}
               </li>
           </div>}
        </div>)
};