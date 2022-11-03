import React, { useState, useInterval, useEffect } from "react";

const Countdown = () => {
	const [days, setDays] = useState(0);
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);

	// const updateTimer = () => {
	// 	if (seconds === 0) {
	// 		if (minutes === 0) {
	// 			if (hours === 0) {
	// 				setDays(days - 1);
	// 				setHours(23);
	// 			}
	// 			setHours(hours - 1);
	// 			setMinutes(59);
	// 		}
	// 		setMinutes(minutes - 1);
	// 		setSeconds(59);
	// 	}
	// 	setSeconds(seconds - 1);
	// 	console.log("iterative function ended");
	// };

	// useEffect(() => {
	// 	let now = new Date();
	// 	let eventDate = new Date(2022, 10, 5, 19, 0, 0);
	// 	let diff = eventDate - now;
	// 	setDays(Math.floor(diff / (60 * 60 * 1000 * 24)));
	// 	setHours(Math.floor(diff / (60 * 60 * 1000)));
	// 	setMinutes(Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000)));
	// 	setSeconds(Math.floor((diff % (60 * 1000)) / 1000));
	// 	setInterval(updateTimer, 5000);

	// 	console.log("useEffect ended");
	// }, []);

	useEffect(() => {
		setInterval(() => {
			var now = new Date();
			var eventDate = new Date(2022, 10, 5, 1, 0, 0);

			let diff = eventDate - now;
			setDays(Math.floor(diff / (60 * 60 * 24 * 1000)));
			setHours(Math.floor(diff / (60 * 60 * 1000)));
			setMinutes(Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000)));
			setSeconds(Math.floor((diff % (60 * 1000)) / 1000));
		}, 1000);
	}, []);

	return (
		<div className="countdown">
			<div className="countdown__text">
        <div className="countdown_value">
          {days}
        </div>
        <div className="countdown_value_text">
          Days
        </div>
      </div>
			<div className="countdown__text">
      <div className="countdown_value">
          {hours}
        </div>
        <div className="countdown_value_text">
          Hours
        </div>
      </div>
			<div className="countdown__text">
      <div className="countdown_value">
          {minutes}
        </div>
        <div className="countdown_value_text">
          Minutes
        </div>
      </div>
			<div className="countdown__text">
      <div className="countdown_value">
          {seconds}
        </div>
        <div className="countdown_value_text">
          Seconds
        </div>
      </div>

		</div>
	);
};

export default Countdown;
