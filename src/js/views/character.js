import React, {useState, useEffect, useContext}from 'react';
import { Context } from "../store/appContext";
import Link from "react-router-dom";


export const Character = (props) => {
    console.log(props)
    const { store, actions } = useContext(Context);
    const fetchCharacter = "https://www.swapi.tech/api/"
    useEffect(() => {
        actions.loadCharacter(id)
    }, [])
    console.log(store)
    let id = props.match.params.id
    return (
        <div>
           {!store.character ? <h1>loading</h1> : 
           <div className="container">
               <img style={{height: 300, width: 500}} src="https://lumiere-a.akamaihd.net/v1/images/5e94826f7d7499000120d564-image_f9b9d30e.jpeg?region=0%2C48%2C1536%2C768&width=960" className="imgtop"/>
               <h1 style={{color: "white"}}>{store.character.name}</h1>
               <li>
                   Eye Color: {store.character.eye_color}
               </li>
               <li>
                   Hair Color: {store.character.hair_color}
               </li>
               <li>
                   Skin Color: {store.character.skin_color}
               </li>
               <li>
                   Height: {store.character.height}
               </li>
               <li>
                   Mass: {store.character.mass}
               </li>
               <li>
                   Birth Year: {store.character.birth_year}
               </li>
               <li>
                   Gender: {store.character.gender}
               </li>
           </div>}
        </div>
        )
};
