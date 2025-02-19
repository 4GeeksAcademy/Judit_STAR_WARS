

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			starships: [],
			species: [],
			PeopleDetails: null,
			SpeciesDetails: null,
			StarShipsDetails: null,
			favorites: []
		},
		
		actions: {
				
				getPeople: () => {
					fetch('https://www.swapi.tech/api/people/')
					.then(resp =>resp.json())
					.then(respJson => {
						const response = respJson.results;
						setStore ({ people: response });
					})
				},


				getStarShips: () => {
					fetch('https://www.swapi.tech/api/starships/')
					.then(resp =>resp.json())
					.then(respJson => {
						const response = respJson.results;
						setStore ({ starships: response });
					})
				},

				getSpecies: () => {
					fetch('https://www.swapi.tech/api/species/')
					.then(resp =>resp.json())
					.then(respJson => {
						const response = respJson.results;
						setStore ({ species: response });
					})
				},

				getPeopleDetails: (id) => {
					fetch(`https://www.swapi.tech/api/people/${id}`)
					.then(resp =>resp.json())
					.then(respJson => {
						const response = respJson.result.properties;
						console.log(response)
						setStore ({ PeopleDetails: response });
					})
				},

				getSpeciesDetails: (id) => {
					fetch(`https://www.swapi.tech/api/species/${id}`)
					.then(resp =>resp.json())
					.then(respJson => {
						const response = respJson.result.properties;
						setStore ({ SpeciesDetails: response });
					})
				},

				getStarshipsDetails: (id) => {
					fetch(`https://www.swapi.tech/api/starships/${id}`)
					.then(resp =>resp.json())
					.then(respJson => {
						const response = respJson.result.properties;
						setStore ({ StarShipsDetails: response });
					})
				},

				addFavorite: (fav) => {
					const store=getStore();
					if (!store.favorites.includes(fav)){
						setStore({ favorites: [...store.favorites, fav]})
					}
					
				},
	
				removeFavorite: (item) => {
					const store=getStore();
					setStore({ favorites: store.favorites.filter((fav) => fav !== item),
						
					});
	
				}
			}
		}
	};


export default getState;
