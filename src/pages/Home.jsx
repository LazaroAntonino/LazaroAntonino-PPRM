import { useState, useEffect } from "react";
import { CharacterCard } from "../components/CharacterCard.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import RickApiServices from "../services/RickApiServices.js"; // Ajusta esta ruta si es diferente

export const Home = () => {
	const { store, dispatch } = useGlobalReducer();

	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);

	useEffect(() => {
		RickApiServices.getAllCharacters(currentPage).then(data => {
			dispatch({ type: 'get_all_characters', payload: data.results });
			setTotalPages(data.info.pages);
		});
	}, [currentPage]);

	return (
		<>
			<div className="container text-center mt-5">
				<div className="slider-container">
					<div className="slider">
						{store.all_characters_info?.map((element, index) => (
							<div className="slider-item" key={index}>
								<CharacterCard
									id={element.id}
									name={element.name}
									image={element.image}
									status={element.status}
								/>
							</div>
						))}
					</div>
				</div>
				<div className="pagination d-flex justify-content-center mt-4 gap-3">
					<button
						className="btn px-4 py-2 fw-bold text-dark"
						style={{
							background: 'linear-gradient(145deg, #43e97b, #38f9d7)',
							border: 'none',
							boxShadow: '0 4px 15px rgba(0, 255, 204, 0.4)',
							borderRadius: '12px',
						}}
						disabled={currentPage === 1}
						onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
					>
						&lt;-- Página anterior
					</button>

					<button
						className="btn px-4 py-2 fw-bold text-dark"
						style={{
							background: 'linear-gradient(145deg, #43e97b, #38f9d7)',
							border: 'none',
							boxShadow: '0 4px 15px rgba(0, 255, 204, 0.4)',
							borderRadius: '12px',
						}}
						disabled={currentPage === totalPages}
						onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
					>
						Página siguiente --&gt;
					</button>
				</div>

			</div>
		</>
	);
};
