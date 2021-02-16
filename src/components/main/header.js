import React from "react";
import { useState } from "react";
import logo from "../../assets/logo.svg";
import header_menu from "../../assets/header_menu.svg";
import header_close from "../../assets/header_close.svg";
import "../../styles/header.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
	header_reset,
	homepage_decrement,
	reset_answers,
	reset_questions,
	reset_user,
	reset_results,
	reset_recommendations,
} from "../../store/actions";
function Header({
	headerState,
	header_reset,
	homepage_decrement,
	reset_answers,
	reset_questions,
	reset_user,
	reset_results,
	reset_recommendations,
}) {
	const [menuOpened, changeMenuOpened] = useState(false);
	return (
		<nav className="navbar navbar-default" id="header-main">
			<div className="container-fluid">
				<div className="navbar-header">
					<div
						className="navbar-toggle collapsed"
						data-toggle="collapse"
						data-target=".navbar-collapse"
						style={{ borderWidth: 0, padding: 0 }}
					>
						<img
							style={{ width: !menuOpened ? 40 : 0 }}
							onClick={() => changeMenuOpened(!menuOpened)}
							src={header_menu}
							alt="menu"
						/>
						<img
							style={{ height: menuOpened ? 20 : 0 }}
							onClick={() => changeMenuOpened(!menuOpened)}
							src={header_close}
							alt="menu"
						/>
					</div>
					<Link onClick={header_reset} className="navbar-brand a" to="/">
						<img src={logo} alt="Logo" />
					</Link>
				</div>
				<div className="collapse navbar-collapse mobile-menu">
					<ul className="nav navbar-nav navbar-right ">
						<li>
							<Link
								className={headerState === 0 ? "a active" : "a"}
								to="/knowStatus"
								onClick={() => homepage_decrement()}
							>
								Know Your Digital Status
							</Link>
						</li>
						<li>
							<Link
								className={headerState === 1 ? "a active" : "a"}
								to="/services"
							>
								Explore Services
							</Link>
						</li>
						<li>
							<Link
								className={headerState === 2 ? "a active" : "a"}
								to="/knowledgeCenter"
							>
								Knowledge Center
							</Link>
						</li>
						<li>
							<Link
								className={headerState === 3 ? "a active" : "a"}
								to="/successStories"
							>
								Success Stories
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

const mapStateToProps = (state) => {
	return {
		headerState: state.headerState,
	};
};

export default connect(mapStateToProps, {
	header_reset,
	homepage_decrement,
	reset_answers,
	reset_questions,
	reset_user,
	reset_results,
	reset_recommendations,
})(Header);
