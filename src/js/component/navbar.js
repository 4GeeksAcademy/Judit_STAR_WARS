import React, { useActionState, useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/Logo.png";
import { Context } from "../store/appContext";
import { Home } from "../views/home";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <div>
      <nav class="navbar">
        <div class="container-fluid">
          <div class="navbar-logo">
            <Link to="/" className="btn-logo">
              <img src={Logo} />
            </Link>
          </div>
          <div class="navbar-fav">
            <div class="dropdown">
              <button
                class="btn dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="fa-regular fa-heart"></i>
              </button>
              <ul class="dropdown-menu dropdown-menu-dark">
                {store.favorites.map((fav) => (
                  <li className="favs">
                    {fav}
                    <button
                      className="nav-button"
                      onClick={() => actions.removeFavorite(fav)}
                    >
                      <i class="fa-solid fa-x"></i>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
