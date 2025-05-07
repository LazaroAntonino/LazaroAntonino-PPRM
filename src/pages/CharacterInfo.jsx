import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
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
    <div
      className="container d-flex justify-content-center align-items-center vh-100"
    >
      <div
        className="card shadow-lg p-4 rounded-4 border-0"
        style={{
          maxWidth: "500px",
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(255,255,255,0.9)",
        }}
      >
        <div className="d-flex flex-column align-items-center text-center">
          <img
            src={character.image}
            className="rounded-circle border border-3 mb-3"
            alt={character.name}
            style={{ width: "120px", height: "120px", objectFit: "cover" }}
          />
          <h4 className="fw-bold mb-3">
            <i className="fas fa-user text-primary me-2"></i>
            {character.name}
          </h4>

          <ul className="list-unstyled text-start w-100 px-3">
            <li className="mb-2">
              <i className={`fas fa-heartbeat me-2 text-${character.status === "Alive" ? "success" : "danger"}`}></i>
              <strong>Status:</strong>{" "}
              <span className={`badge bg-${character.status === "Alive" ? "success" : "danger"}`}>
                {character.status}
              </span>
            </li>
            <li className="mb-2">
              <i className="fas fa-dna me-2 text-info"></i>
              <strong>Species:</strong> {character.species}
            </li>
            <li className="mb-2">
              <i className="fas fa-venus-mars me-2 text-warning"></i>
              <strong>Gender:</strong> {character.gender}
            </li>
            <li className="mb-2">
              <i className="fas fa-globe me-2 text-secondary"></i>
              <strong>Origin:</strong> {character.origin?.name || "Unknown"}
            </li>
            <li className="mb-2">
              <i className="fas fa-map-marker-alt me-2 text-danger"></i>
              <strong>Location:</strong> {character.location?.name || "Unknown"}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};