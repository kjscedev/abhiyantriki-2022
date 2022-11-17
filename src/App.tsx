import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Events from "./pages/Events";
import Parvaah from "./pages/Parvaah";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import ExposAndSpeakers from "./pages/ExposAndSpeakers";
import GetInvolved from "./pages/GetInvolved";
import Sponsors from "./pages/Sponsors";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import Particles from "react-tsparticles";

function App() {
	return (
		<>
			<Particles
				options={{
					autoPlay: true,
					links: {
						enable: true,
					},
					move: {
						enable: true,
						speed: { min: 1, max: 10 },
					},
					size: {
						value: { min: 1, max: 3 },
					},

					fullScreen: {
						enable: true,
						zIndex: -1,
					},
					modes: {
						attract: {
							distance: 200,
							duration: 0.4,
							easing: "ease-out-quad",
							factor: 1,
							maxSpeed: 50,
							speed: 1,
						},
						bounce: {
							distance: 200,
						},
						bubble: {
							distance: 200,
							duration: 0.4,
							mix: false,
							divs: {
								distance: 200,
								duration: 0.4,
								mix: false,
								selectors: [],
							},
						},
						grab: {
							distance: 100,
							links: {
								blink: false,
								consent: false,
								opacity: 1,
							},
						},
					},
					repulse: {
						distance: 1000,
						duration: 2,
						factor: 100,
						speed: 1,
						maxSpeed: 50,
						easing: "ease-out-quad",
						divs: {
							distance: 1000,
							duration: 2,
							factor: 100,
							speed: 1,
							maxSpeed: 50,
							easing: "ease-out-quad",
							selectors: [],
						},
					},
					motion: {
						disable: false,
						reduce: {
							factor: 4,
							value: true,
						},
					},
					particles: {
						bounce: {
							horizontal: {
								random: {
									enable: false,
									minimumValue: 0.1,
								},
								value: 0,
							},
						},
					},
				}}
			/>
			<div className="container__main">
				<Router >
					{/* <div className="App text-white"> */}
						<Switch>
							<Navbar />
							{/* for home page */}
							<Route path="/" exact>
								<Home />
							</Route>

							{/* for events page */}
							<Route path="/events" exact>
								<Events />
							</Route>

							{/* for get involved page */}
							<Route path="/get-involved"exact >
								<GetInvolved />
							</Route>

							{/* for events page */}
							<Route path="/expos-and-speakers" exact>
								<ExposAndSpeakers />
							</Route>

							{/* for parvaah page */}
							<Route path="/parvaah" exact>
								<Parvaah />
							</Route>

							{/* for Sponsers page */}
							<Route path="/sponsors" exact>
								<Sponsors />
							</Route>
						</Switch>
					{/* </div> */}
				</Router>
				{window.location.pathname !== "/expos-and-speakers" &&
					window.location.pathname !== "/events" && <Footer />}
				<Sidebar />
			</div>
		</>
	);
}

export default App;
