import React from "react";
import Carousel from './Carousel';

const SuccessStories = () => {
	return (
		<div className={"infoArea successStories"}>
			<div className={"sectionTitle"}>
				Read inspiring success stories of our clients
				<div className="successStoriesCarousel">
					<Carousel />
				</div>
			</div>
		</div>
	);
};

export default SuccessStories;
