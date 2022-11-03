

function Game() {
  return (
    <>
    	<div className="container">
        <div className="container__text">
          <div className="heading-text-primary">
            
          <div id="world" />
            <div id="gameoverInstructions">
              Game Over
            </div>
            <div id="dist">
                <div class="label">distance</div>
                <div id="distValue">000</div>
            </div>

            <div id="instructions">Click to jump<span class="lightInstructions"> Grab the carrots / avoid the hedgehogs</span></div>
          </div>

          <div className="heading-text-secondary"></div>
        </div>
        {/* <div className="container__gamePreview"></div> */}
      </div>



    </>
  )
}

export default Game
