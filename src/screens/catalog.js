import React, { useEffect, useState } from "react";
import { Redirect, useHistory, useParams } from "react-router-dom";
import { partnerMapping } from "../store/partner_mapping";

const PdfView = () => {
	const { category, partner } = useParams();
	const history = useHistory();
	const [data, setData] = useState(null);
	useEffect(() => {
		let res = partnerMapping.find(
			(val) =>
				val.heading.toLowerCase() === category.toLowerCase() &&
				val.name.toLowerCase() === partner.toLowerCase()
		);
		if (!res) {
			history.replace("/services");
			return <div>Redirecting</div>;
		} else {
			if (res.partner.socialMedia.catalog) {
				setData(res.partner.socialMedia.catalog);
			} else {
				history.replace("/services");
				return <div>Redirecting</div>;
			}
		}
	}, []);
	return (
		<div
			style={{
				height: "99vh",
				overflowY: "scroll",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			{data && <embed style={{ width: "100vw", height: "100vh" }} src={data} />}
		</div>
	);
};

export default PdfView;
