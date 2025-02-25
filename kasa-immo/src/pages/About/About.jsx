import React, { useState, useEffect } from "react";
import axios from "axios";

import Banner from "../../components/Banner/Banner";
import imageSrc from "../../assets/covers/Cover2.webp";
import Accordion from "../../components/Accordion/Accordion";
import { APP_ROUTES, API_ROUTES } from "../../utils/constants";

import "./_about.scss";

//--------------------------------------------------------------

function About() {
	const [Data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(API_ROUTES.ABOUT);
				console.log(response);
				setData(response.data);
				setLoading(false);
			} catch (error) {
				setError("Failed to fetch data");
				setLoading(false);
			}
		};
		fetchData();
	}, []);

	return (
		<div className="about">
			<Banner imageSrc={imageSrc} text={""} />
			<div className="about__accordion-wrapper">
				{loading ? (
					<p>Loading...</p>
				) : error ? (
					<p>{error}</p>
				) : (
					Data.map((accordion) => (
						<Accordion
							key={accordion.id}
							title={accordion.title}
							content={accordion.content}
						/>
					))
				)}
			</div>
		</div>
	);
}

export default About;
