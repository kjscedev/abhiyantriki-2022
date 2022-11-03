
function Navbar() {
	return (
		<nav
			style={{
				paddingLeft: "4px",
				display: "flex",
				padding: "32px 8%",
				justifyContent: "space-between",
            pointerEvents: "all"
			}}
		>
			<div>
            <a href="/" style={{pointerEvents: "all"}}>
               <img src="/abhiyantriki.png" alt="Abhiyantriki Logo" />
            </a>
			</div>
			<div style={{ display: "flex", flexDirection: "row" }}>
				<div style={{ 
               paddingTop: "6px",
               transform: "scale(1.1)"
               }}>
               <a href="https://kjsce.somaiya.edu/en" style={{pointerEvents: "all"}}>
                  <img src="/somaiya-white-1.png" alt="KJSCE Mumbai" />
               </a>
            </div>
				<div style={{ 
               marginLeft: "20px",
               transform: "scaleY(0.9)"
               }}>
               <a href="https://www.somaiya.edu/en" style={{pointerEvents: "all"}}>
                  <img src="/somaiya-trust-1.png" alt="Somaiya Trust" />
               </a>
            </div>
			</div>
		</nav>
	);
}

export default Navbar;
