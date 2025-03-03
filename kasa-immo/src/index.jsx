///-------------------------------------------------------------------------------------------------
/// This component contains the app architecture in the form of a Router and the Layout component.
/// The nested Routes are nested within the Layout component which renders the Header and Footer.
/// ------------------------------------------------------------------------------------------------

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import "./index.scss";
import "./styles/base/_base.scss";
import reportWebVitals from "./reportWebVitals";

import Layout from "./layout/Layout/Layout";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import LogementPage from "./pages/LogementPage/LogementPage";
import Error from "./pages/Error/Error";

//----------------------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Router basename="/Kasa-App-React">
			<Layout>
				<Routes>
					<Route exact path="/" element={<Home />}></Route>
					<Route path="/about" element={<About />}></Route>
					<Route path="/logements/:id" element={<LogementPage />}></Route>
					<Route path="/error" element={<Error />}></Route>
					<Route path="*" element={<Navigate to="/error" />}></Route>
				</Routes>
			</Layout>
		</Router>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
