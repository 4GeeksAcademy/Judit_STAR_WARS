import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SpeciesDetails = props => {
	
	const {store, actions} = useContext(Context);
	const params =useParams();
	console.log(params)

	useEffect(() =>{
		actions.getSpeciesDetails(params.id)
	},[])

	useEffect(() =>{
		console.log(store.SpeciesDetails)
	}, [store.SpeciesDetails])

	console.log(store.SpeciesDetails)
    if (!store.SpeciesDetails) return null;
    console.log(store.SpeciesDetails)

	return (
		<div className="jumbotron">
            <div className="character-card mx-auto mt-3">
                <div className="character-header">		
                     <img src={`https://starwars-visualguide.com/assets/img/species/${params.id}.jpg`} className="card-img-top" alt="..." />		
                     <img src="" className="character-image"/>
                        <div className="character-details">
                            <h1 className="character-name">{store.SpeciesDetails.name}</h1>
                        </div>
                </div>
                <div className="character-info">
                    <div className="info-column">
                        <h3>Height</h3>
                        <p>{store.SpeciesDetails.average_height}</p>
                        </div>
                    <div className="info-column">
                        <h3>Lifespan</h3>
                        <p>{store.SpeciesDetails.average_lifespan}</p>
                    </div>
                    <div className="info-column">
                        <h3>Classification</h3>
                        <p>{store.SpeciesDetails.classification}</p>
                    </div>
                    <div className="info-column">
                        <h3>Designation</h3>
                        <p>{store.SpeciesDetails.designation}</p>
                    </div>
                     <div className="info-column">
                        <h3>Language</h3>
                        <p>{store.SpeciesDetails.language}</p>
                    </div>
                </div>
            </div>
            
        </div>
	)

};
