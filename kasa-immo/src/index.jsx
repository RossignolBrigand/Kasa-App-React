///-------------------------------------------------------------------------------------------------
/// This component contains the app architecture in the form of a Router and the Layout component.
/// The nested Routes are nested within the Layout component which renders the Header and Footer.
/// ------------------------------------------------------------------------------------------------

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { APP_ROUTES } from "./utils/constants";

import "./index.scss";
import "./styles/base/_base.scss";
import reportWebVitals from "./reportWebVitals";

import Layout from "./layout/Layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import LogementPage from "./pages/LogementPage/LogementPage";
import Error from "./pages/Error/Error";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";

//----------------------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Router basename="/OpenClassrooms_Projet_05">
			<Routes>
				{/* Routes with commo layout  */}
				<Route element={<Layout />}>
					<Route exact path="/" element={<Home />}></Route>
					<Route path={APP_ROUTES.ABOUT} element={<About />}></Route>
					<Route
						path={`${APP_ROUTES.LOGEMENTS}/:id`}
						element={<LogementPage />}></Route>
					<Route path={APP_ROUTES.LOGIN} element={<Login />}></Route>
				</Route>
				{/* Route for dashboard */}
				<Route path={APP_ROUTES.DASHBOARD} element={<Dashboard />}></Route>
				{/* Routes for error */}
				<Route path={APP_ROUTES.ERROR} element={<Error />}></Route>
				<Route path="*" element={<Navigate to={APP_ROUTES.ERROR} />}></Route>
			</Routes>
		</Router>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
