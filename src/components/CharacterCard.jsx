import React from "react"
import { Link } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer";

export const CharacterCard = ({ id, name, image, status }) => {
    const { store, dispatch } = useGlobalReducer();

    return (
        <div className="character-card-wrapper">
            <div className="character-card">
                <img src={image} className="character-image" alt={name} />
                <div className="character-info">
                    <div className="character-header">
                        <p className="character-name">{name}</p>
                        <p className={`character-status ${status === 'Alive' ? "alive" : "dead"}`}>
                            <span className="fa-solid fa-circle"></span>
                        </p>
                    </div>
                    <div className="character-buttons d-flex justify-content-between mt-3">
                        <Link to={`/character/${id}`}>
                            <button className="btn btn-portal">Learn More</button>
                        </Link>
                        <button
                            onClick={() => dispatch({ type: 'set_favourite', payload: name })}
                            className={`btn btn-fav ${store.favourites.includes(name) ? 'text-warning' : 'text-white'}`}
                            aria-label="Add to Favourites"
                        >
                            <i className="fa-solid fa-star"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}