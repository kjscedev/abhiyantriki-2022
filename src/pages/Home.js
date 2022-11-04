import Countdown from "../components/Countdown";
import { Link } from "react-router-dom";

function Home() {
	return (
		<div className="container">
			<div className="container__text">
				<div className="heading-text-primary">
					<span>Coming </span><span>Soon!</span>
				</div>
				<div className="heading-text-secondary">Abhiyantriki 2022</div>
				<Countdown />
			</div>
			<div className="container__gamePreview">
			<a href="/game" style={{
				textDecoration: "none"
			}}> <div className="gamePreview_button">Let's Play!</div></a>
			</div>
      </div>
	);
}

export default Home;
