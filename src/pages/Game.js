import React, { Component } from "react";
import * as THREE from "three";

// import '../components/actualGame';

class App extends Component {
  componentDidMount() {
    // === THREE.JS CODE START ===
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    var cube = new THREE.Mesh( geometry, material );
    scene.add( cube );
    camera.position.z = 5;
    var animate = function () {
      requestAnimationFrame( animate );
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render( scene, camera );
    };
    animate();
    // === THREE.JS EXAMPLE CODE END ===
  }
  render() {
    return (
      <div />
    )
  }
}

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
                <div className="label">distance</div>
                <div id="distValue">000</div>
            </div>

            <div id="instructions">Click to jump<span className="lightInstructions"> Grab the carrots / avoid the hedgehogs</span></div>
          </div>

          <div className="heading-text-secondary"></div>
        </div>
        {/* <div className="container__gamePreview"></div> */}
      </div>



    </>
  )
}

export default Game
