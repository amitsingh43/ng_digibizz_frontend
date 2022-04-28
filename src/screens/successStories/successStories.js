import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import "styles/successStories.css";
import { header_success_stories } from "store/actions";
import SuccessCard from "components/successStories/successCard";
import { SUCCESSDATA } from "store/strings";
import { Content } from "./components";
import MetaTags from "react-meta-tags";

export default function SuccessStories() {
	const dispatch=useDispatch();

	useEffect(() => {
		dispatch(header_success_stories());
		window.scrollTo(0, 0);
	}, [dispatch]);

	return (
		<>
			<MetaTags>
				<title>Know how DiGibizz has created an impact on our customers</title>
				<meta name="keywords" content="digibizz, online services, app creation, business loans, healthcare, investments, tax filing, sell online, product photoshoot"/>
				<meta name="description" content="DiGibizz has created a long lasting impact on our customers on how they manage their business every day. Read the full customer story to know their experiences." />
			</MetaTags>

			<div className="success-stories">
				<div className="top-content">
					<Content />
				</div>
				{SUCCESSDATA.map((data, index) => (
					<div className="success-content" key={index}>
						<SuccessCard
							id={data.id}
							name={data.name}
							heading={data.heading}
							image={data.image}
							content={data.content}
							type={data.type}
						/>
					</div>
				))}
			</div>
		</>
	);
}
