import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const PeopleDetails = () => {


	const { store, actions } = useContext(Context);
	const params = useParams();
	console.log(params)

	useEffect(()  => {
		actions.getPeopleDetails(params.id)
	},[])

	useEffect(() => {
		console.log(store.PeopleDetails)
	},[store.PeopleDetails])

	console.log(store.PeopleDetails)
	if(!store.PeopleDetails) return null;
	console.log(store.PeopleDetails)

	return (
		<div className="jumbotron">
			<div className="character-card mx-auto mt-3">
				<div className="character-header">
					<img src={`https://starwars-visualguide.com/assets/img/characters/${params.id}.jpg`} className="card-img-top" alt="..." />
					<img src="" className="character-image" />
					<div className="character-details">
						<h1 className="character-name">{store.PeopleDetails.name}</h1>
					</div>
				</div>
				<div className="character-info">
					<div className="info-column">
						<h3>Height</h3>
						<p>{store.PeopleDetails.height}</p>
					</div>
					<div className="info-column">
						<h3>Mass</h3>
						<p>{store.PeopleDetails.mass}</p>
					</div>
					<div className="info-column">
						<h3>Gender</h3>
						<p>{store.PeopleDetails.gender}</p>
					</div>
					<div className="info-column">
						<h3>Eye color</h3>
						<p>{store.PeopleDetails.eye_color}</p>
					</div>
					<div className="info-column">
						<h3>Hair color</h3>
						<p>{store.PeopleDetails.hair_color}</p>
					</div>
				</div>
			</div>

		</div>
	);
};
