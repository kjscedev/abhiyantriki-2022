import Countdown from "../components/Countdown";

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
			<img src="/gamePreview0.png" alt="" srcset="" style={{
				// maxWidth: "470px",
				width: "100%",
				height: "100%"
			}}/>
			<a href="/game" style={{
				textDecoration: "none"
			}}> <div className="gamePreview_button">Let's Play!</div></a>
			</div>
      </div>
	);
}

export default Home;
