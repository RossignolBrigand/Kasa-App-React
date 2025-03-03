import React from "react";

import Banner from "../../components/Banner/Banner";
import CardGallery from "../../components/CardGallery/CardGallery";
import CardItem from "../../components/CardItem/CardItem";

import LogementsData from "../../datas/logements.json";
import imageSrc from "../../assets/covers/Cover1.webp";

import "./_home.scss";

function Home() {
	const bannerText = "Chez vous, partout et ailleurs";
	return (
		<div className="home">
			<Banner imageSrc={imageSrc} text={bannerText} />
			<CardGallery>
				{LogementsData.map((logement) => (
					<CardItem
						key={`${logement.id}-${logement.title}`}
						id={logement.id}
						title={logement.title}
						cover={logement.cover}
					/>
				))}
			</CardGallery>
		</div>
	);
}

export default Home;
