import Countdown from "../components/Countdown";

function Home() {
	return (
		<div className="container">
			<div className="container__text">
				<div className="heading-text-primary">
					<div>Coming </div>soon!
				</div>
				<div className="heading-text-secondary">Abhiyantriki 2022</div>
				<Countdown />
			</div>
			<div className="container__gamePreview"></div>
		</div>
	);
}

export default Home;
