import React, { useEffect, useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import { Redirect, useHistory, useParams } from "react-router-dom";
import { partnerMapping } from "../store/partner_mapping";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

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
	const [numPages, setNumPages] = useState(null);
	const [pageNumber, setPageNumber] = useState(1);

	function onDocumentLoadSuccess({ numPages }) {
		setNumPages(numPages);
	}

	const ShowPages = () => {
		let rows = [];
		for (let i = 0; i < numPages; i++) {
			rows.push(
				<div>
					<Page pageNumber={i + 1} />
					<hr />
				</div>
			);
		}
		return rows;
	};

	return (
		<div
			style={{
				minHeight: "99vh",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			{/* {data && ( */}
			<div style={{ overflow: "scroll" }}>
				<Document
					file={{
						url: data,
					}}
					onLoadSuccess={onDocumentLoadSuccess}
				>
					{numPages && <ShowPages />}
				</Document>
			</div>
			{/* )} */}
		</div>
	);
};

export default PdfView;
