import PropTypes from "prop-types";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router";

import "./_layout.scss";

function Layout({ children }) {
	return (
		<div className="container">
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}

Layout.propTypes = {
	children: PropTypes.element,
};

export default Layout;
