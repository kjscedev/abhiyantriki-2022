import { Link } from 'react-router-dom';
function Navbar() {
	return (
		<nav
			style={{
				display: "flex",
				justifyContent: "space-between",
            pointerEvents: "all"
			}}
		id="main-nav">
			<div>
            <Link to="/" style={{pointerEvents: "all"}}>
               <img src="/abhiyantriki-2022.png" alt="Abhiyantriki Logo" id="main-logo"/>
            </Link>
			</div>
			<div style={{ display: "flex", flexDirection: "row" }}>
				<div style={{ 
               paddingTop: "6px",
               transform: "scale(1.1)"
               }}>
               <a href="https://kjsce.somaiya.edu/en" style={{pointerEvents: "all"}}>
                  <img src="/somaiya-white.png" alt="KJSCE Mumbai" id="kjsce-logo"/>
               </a>
            </div>
				<div style={{ 
               transform: "scaleY(0.95)"
               }} id="logo-2">
               <a href="https://www.somaiya.edu/en" style={{pointerEvents: "all"}}>
                  <img src="/somaiya-trust.png" alt="Somaiya Trust" id="trust-logo"/>
               </a>
            </div>
			</div>
		</nav>
	);
}

export default Navbar;
