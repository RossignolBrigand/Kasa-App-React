const API_URL = "http://localhost:4200";

export const API_ROUTES = {
	SIGN_UP: `${API_URL}/api/auth/signup`,
	SIGN_IN: `${API_URL}/api/auth/login`,
	LOGEMENTS: `${API_URL}/api/logements`,
	ABOUT: `${API_URL}/api/about`,
};

export const APP_ROUTES = {
	HOME: "/",
	LOGIN: "/login",
	LOGEMENTS: "/logements",
	DASHBOARD: "/dashboard",
	ABOUT: "/about",
	ERROR: "/error",
};
