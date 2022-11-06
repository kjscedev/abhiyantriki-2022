import "./App.css";
import { RouterProvider } from "react-router-dom";
import routes from './routes/routes';
import Navbar from './components/Navbar';

function App() {

	const styleObject = {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		minWidth: "100%",
		minHeight: "100%",
		// overflowY: "hidden",
		pointerEvent: "all"
	}

	return (
		<div className="App" style={styleObject}>
			<Navbar />
			<RouterProvider router={routes} />
		</div>
	);
}

export default App;

//  Project developed by 
// --  Vatsal Sanchala >> bevatsal1122
// --  Arya Nair >> Arya-A-Nair
// --  Vinay Kanse >> VinayKanse
// --  Pranay Singh >> hailhydra1
