import React, { useState, useEffect, useContext } from 'react';
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export const Planets = () => {
    useEffect(() => {
        actions.loadPlanets()
    }, [])
    const { store, actions } = useContext(Context);
    console.log(store)
    return (
        <div className = "d-flex overflow">
            {!store.planets ? <h1>loading </h1> : store.planets.map((planet, i) => {
                return (
                    <div key={planet.uid}>
                        <img style={{height: 300, width: 300}} src="https://cdnb.artstation.com/p/assets/images/images/037/572/751/large/shiny-man-kuat-icon-ring-1-b.jpg?1620737236" class="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{planet.name}</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className="btn btn-primary"><Link style={{color: 'white'}} to={`planet/${planet.uid}`}><p>{planet.name}</p></Link></button>
                                <button className="heart" variant="warning" onClick={() => actions.favoritesInfo(planet.name)}><i className="far fa-heart" /></button>
                            </div>
                            
                    </div>
                );
            })}
        </div>)}