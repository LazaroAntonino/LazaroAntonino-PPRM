import { Link } from "react-router-dom";
import favicon from "../assets/img/RickAndMortyWeb.png.png";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {
	const { store, dispatch } = useGlobalReducer();
	return (
		<nav className="navbar navbar-expand-lg navbar-color">
			<div className="container">
				{/* Logo alineado a la izquierda */}
				<Link to="/" className="navbar-brand d-flex align-items-center">
					<img src={favicon} alt="Logo" className="navbar-logo me-2" style={{ height: "40px" }} />
					<span className="fw-bold text-white">Rick & Morty</span>
				</Link>

				{/* Botón de colapso */}
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarContent"
					aria-controls="navbarContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				{/* Contenido colapsable */}
				<div className="collapse navbar-collapse justify-content-end" id="navbarContent">
					<div className="dropdown">
						<button
							className="btn dropdown-toggle custom-dropdown-toggle"
							type="button"
							id="dropdownMenuButton"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							Favourites <i className="fa-solid fa-star ms-2"></i>
						</button>
						<ul className="dropdown-menu custom-dropdown dropdown-menu-end p-2" aria-labelledby="dropdownMenuButton">
							<li className="dropdown-header text-center text-glow">⭐ {store.favourites.length} Favourite(s)</li>
							<hr className="dropdown-divider" />
							{store.favourites?.length > 0 ? (
								store.favourites.map((el, index) => (
									<li key={index} className="dropdown-item d-flex justify-content-between align-items-center text-white">
										{el}
										<span className="btn p-0 text-danger" onClick={() => dispatch({ type: 'set_favourite', payload: el })}>
											<i className="fa-solid fa-trash-can"></i>
										</span>
									</li>
								))
							) : (
								<li className="dropdown-item text-muted text-center">No favourites yet.</li>
							)}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};
