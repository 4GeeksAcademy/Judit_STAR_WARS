import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Home = () => {

	const {store, actions} = useContext(Context);
	console.log(store)

return (
	<div className="mt-5 home">
			<div>
				<h1 className="text-center">Characters</h1>
				<div className="carousel-container mx-auto">
					<div className="carousel">
						{
							store.people.map(people => (
								<div key={people.uid} className="card">
									<img src={`https://starwars-visualguide.com/assets/img/characters/${people.uid}.jpg`} className="card-img-top" alt="..." />
									<div className="caption d-block mx-2">
										<div className="m-0">
											<h5>{people.name}</h5>
										</div>
									</div>
									<div className="d-flex justify-content-between m-3">
										<Link to={`/people/${people.uid}`} className="btn">Learn more!</Link>
										<button className="btn"><i className="fa-regular fa-heart" onClick={() => actions.addFavorite(people.name)}></i></button>
									</div>
								</div>
							)
							)
						}

					</div>
				</div>
			</div>
			<div className="space-ships ">
				<h1 className="text-center">Star ships</h1>
				<div className="carousel-container mx-auto">
					<div className="carousel">

						{
							store.starships.map(starships => (
								<div key={starships.uid} className="card">
									<img src={`https://starwars-visualguide.com/assets/img/starships/${starships.uid}.jpg`} className="card-img-top" alt="..." />
									<div className="caption d-block mx-2">
										<div className="m-0">
											<h5>{starships.name}</h5>
										</div>
									</div>
									<div className="d-flex justify-content-between m-3">
										<Link to={`/starship/${starships.uid}`} className="btn">Learn more!</Link>
										<button className="btn"><i className="fa-regular fa-heart" onClick={() => actions.addFavorite(starships.name)}></i></button>
									</div>
								</div>
							)
							)
						}



					</div>
				</div>
			</div>


			<div className="space-ships ">
				<h1 className="text-center">Species</h1>
				<div className="carousel-container mx-auto">
					<div className="carousel">

						{
							store.species.map(species => (
								<div key={species.uid} className="card">
									<img src={`https://starwars-visualguide.com/assets/img/species/${species.uid}.jpg`} className="card-img-top" alt="..." />
									<div className="caption d-block mx-2">
										<div className="m-0">
											<h5>{species.name}</h5>
										</div>
									</div>
									<div className="d-flex justify-content-between m-3">
										<Link to={`/species/${species.uid}`} className="btn">Learn more!</Link>
										<button className="btn"><i className="fa-regular fa-heart" onClick={() => actions.addFavorite(species.name)}></i></button>
									</div>
								</div>
							)
							)
						}



					</div>
				</div>
			</div>
		</div>
)
}