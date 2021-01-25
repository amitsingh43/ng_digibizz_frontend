import React from "react";
import { useState } from "react";
import logo from "../../assets/logo.png";
import header_menu from "../../assets/header_menu.svg";
import header_close from "../../assets/header_close.svg";
import "../../styles/header.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { header_reset, homepage_decrement } from "../../store/actions";
function Header({ headerState, header_reset, homepage_decrement }) {
  const [menuOpened, changeMenuOpened] = useState(false);
  return (
    <nav class="navbar navbar-default" id="header-main">
      <div class="container-fluid">
        <div class="navbar-header">
          <div
            class="navbar-toggle collapsed"
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
          <Link onClick={header_reset} class="navbar-brand a" to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div class="collapse navbar-collapse mobile-menu">
          <ul class="nav navbar-nav navbar-right ">
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
                to="/knowledgePortal"
              >
                Knowledge Portal
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

export default connect(mapStateToProps, { header_reset, homepage_decrement })(
  Header
);
