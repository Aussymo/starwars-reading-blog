import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import Link from "react-router-dom";

export const Vehicle = (props) => {
  console.log(props);
  const { store, actions } = useContext(Context);
  const fetchVehicle = "https://www.swapi.tech/api/";
  useEffect(() => {
    actions.loadVehicle(id);
  }, []);
  console.log(store);
  let id = props.match.params.id;
  return (
    <div>
      {!store.vehicle ? <h1>loading</h1> : 
      <div className="container">
        <img style={{height: 250, width: 350}} src="https://images.squarespace-cdn.com/content/v1/4f209325d09a4f024c85b060/1360759729368-VOPVC482PHDY2JJXLZ6U/Sandcrawlerside.jpeg" className="imgtop"/>
        <h1 style={{color: 'white'}}>{store.vehicle.name}</h1>
        <li>
          Name: {store.vehicle.name}
        </li>
        <li>
          Length: {store.vehicle.length}
        </li>
        <li>
          Cost in Credits: {store.vehicle.cost_in_credits}
        </li>
        <li>
          Crew: {store.vehicle.crew}
        </li>
      </div>}
    </div>
  );
};
