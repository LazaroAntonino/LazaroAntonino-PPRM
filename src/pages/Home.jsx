import { element } from "prop-types";
import { CharacterCard } from "../components/CharacterCard.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

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
			</div>
		</>
	);
}; 