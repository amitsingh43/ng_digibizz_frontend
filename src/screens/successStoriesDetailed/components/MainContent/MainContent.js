import Content from "./Content";

const MainContent = ({ story }) => {
	const { blog } = story;
	const styles = { fontSize: 16, lineHeight: 2 };
	return (
		<div className="main-content col-lg-10" style={styles}>
			{blog.map((data, index) => (
				<Content data={data} key={index} />
			))}
		</div>
	);
};


export default MainContent;
