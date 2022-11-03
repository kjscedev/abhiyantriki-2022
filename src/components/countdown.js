import React, { useState, useInterval, useEffect } from "react";

const Countdown = () => {
	const [days, setDays] = useState();
	const [hours, setHours] = useState();
	const [minutes, setMinutes] = useState();
	const [seconds, setSeconds] = useState();

  console.log("mounted");

	// var diff=eventDate-now;
	// var hours=Math.floor(diff/(60*60*1000));
	// var minutes=Math.floor((diff%(60*60*1000))/(60*1000));
	// var seconds=Math.floor((diff%(60*1000))/1000);

	// setInterval(() => {
	// 	var now = new Date();	// 	var eventDate = new Date(2022, 10, 5, 1, 0, 0);
	// 	let diff = eventDate - Date.now();
	// 	// console.log(diff)
	// 	setHours(Math.floor(diff / (60 * 60 * 1000)));
	//   setMinutes(Math.floor((diff%(60*60*1000))/(60*1000)));
	//   setSeconds(Math.floor((diff%(60*1000))/1000))
	// }, 1000);

	const updateTimer = () => {
		if (seconds === 0) {
			if (minutes === 0) {
				if (hours === 0) {
					setDays(days - 1);
					setHours(23);
				}
        setMinutes(59)
			}
		}
    setSeconds(seconds-1)
	};

	set
	useEffect(() => {
		let now = new Date();
		let eventDate = new Date(2022, 10, 5, 19, 0, 0);
		let diff = eventDate - now;
		setDays(Math.floor(diff / (60 * 60 * 1000 * 24)));
		setHours(Math.floor(diff / (60 * 60 * 1000)));
		setMinutes(Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000)));
		setSeconds(Math.floor((diff % (60 * 1000)) / 1000));
    setInterval(updateTimer(), 5000);
	}, []);

	return (
		<div className="countdown">
			{days}
			{hours}
			{minutes}
			{seconds}
		</div>
	);
};

export default Countdown;
