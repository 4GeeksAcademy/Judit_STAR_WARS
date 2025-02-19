import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const StarShipsDetails = props => {

    const { store, actions } = useContext(Context);
    const params = useParams();
    console.log(params)
    useEffect(() => {
        actions.getStarshipsDetails(params.id)
    }, [])

    useEffect(() => {
        console.log(store.StarShipsDetails)
    }, [store.StarShipsDetails])

    console.log(store.StarShipsDetails)
    if (!store.StarShipsDetails) return null;
    console.log(store.StarShipsDetails)

    return (
        

        <div className="jumbotron">
            <div className="character-card mx-auto mt-3">
                <div className="character-header">		
                            <img src={`https://starwars-visualguide.com/assets/img/starships/${params.id}.jpg`} className="card-img-top" alt="..." />		
                         <img src="" className="character-image"/>
                        <div className="character-details">
                            <h1 className="character-name">{store.StarShipsDetails.name}</h1>
                        </div>
                </div>
                <div className="character-info">
                    <div className="info-column">
                        <h3>Height</h3>
                        <p>{store.StarShipsDetails.average_height}</p>
                        </div>
                    <div className="info-column">
                        <h3>Lifespan</h3>
                        <p>{store.StarShipsDetails.average_lifespan}</p>
                    </div>
                    <div className="info-column">
                        <h3>Classification</h3>
                        <p>{store.StarShipsDetails.classification}</p>
                    </div>
                    <div className="info-column">
                        <h3>Designation</h3>
                        <p>{store.StarShipsDetails.designation}</p>
                    </div>
                     <div className="info-column">
                        <h3>Language</h3>
                        <p>{store.StarShipsDetails.language}</p>
                    </div>
                </div>
            </div>
            
        </div>
        
    
    );


}