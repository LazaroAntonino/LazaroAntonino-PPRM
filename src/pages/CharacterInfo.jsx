import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import RickApiServices from "../services/RickApiServices";

export const CharacterInfo = () => {
  const { store, dispatch } = useGlobalReducer();
  const { id } = useParams();
  const character = store.character_info;

  useEffect(() => {
    RickApiServices.getCharacterInfo(id).then((data) =>
      dispatch({ type: "get_character_info", payload: data })
    );
  }, [id, dispatch]);

  if (!character || !character.name) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border text-primary" role="status" />
      </div>
    );
  }

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      {id > 1 ? (
        <Link to={`/character/${Number(id) - 1}`}>
          <button className="btn btn-dark mx-5 custom-button">
            <i className="fa-solid fa-arrow-left"></i>
          </button>
        </Link>
      ) : null}
      <div
        className="card p-4 rounded-4 border-0 shadow"
        style={{
          width: "400px",
          height: "500px",
          background: "rgb(64, 58, 58)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
          border: "1px solid rgba(255, 255, 255, 0.18)",
        }}
      >
        <div className="d-flex flex-column align-items-center text-light text-center">
          <div
            className="rounded-circle border border-4 mb-3 shadow"
            style={{
              width: "130px",
              height: "130px",
              overflow: "hidden",
              borderColor: "#00ffd5",
            }}
          >
            <img
              src={character.image}
              alt={character.name}
              className="img-fluid"
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </div>
          <h3 className="fw-bold mb-3 text-white">
            <i className="fas fa-user-astronaut text-info me-2"></i>
            {character.name}
          </h3>

          <ul className="list-unstyled text-start w-100 px-3">
            <li className="mb-3">
              <i
                className={`fas fa-heart me-2 ${character.status === "Alive" ? "text-success" : "text-danger"
                  }`}
              ></i>
              <strong>Status:</strong>{" "}
              <span
                className={`badge bg-${character.status === "Alive" ? "success" : "danger"
                  }`}
              >
                {character.status}
              </span>
            </li>
            <li className="mb-3">
              <i className="fas fa-dna me-2 text-info"></i>
              <strong>Species:</strong> {character.species}
            </li>
            <li className="mb-3">
              <i className="fas fa-venus-mars me-2 text-warning"></i>
              <strong>Gender:</strong> {character.gender}
            </li>
            <li className="mb-3">
              <i className="fas fa-globe-americas me-2 text-primary"></i>
              <strong>Origin:</strong> {character.origin?.name || "Unknown"}
            </li>
            <li className="mb-3">
              <i className="fas fa-map-marker-alt me-2 text-danger"></i>
              <strong>Location:</strong> {character.location?.name || "Unknown"}
            </li>
          </ul>
          <button
            onClick={() => dispatch({ type: 'set_favourite', payload: { name: character.name, id: character.id } })}
            className={`btn btn-fav ${store.favourites.some(fav => fav.id === character.id) ? 'text-warning' : 'text-white'}`}
            aria-label="Add to Favourites"
          >
            <i className="fa-solid fa-star"></i>
          </button>

        </div>
      </div>
      <Link to={`/character/${Number(id) + 1}`}>
        <button className="btn btn-dark mx-5 custom-button">
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </Link>
    </div>
  );
};