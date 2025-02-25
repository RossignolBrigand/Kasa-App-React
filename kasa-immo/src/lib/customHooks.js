import { useState, useEffect } from "react";
import { getAuthenticatedUser } from "./common";

/**
 * Custom hook to manage user authentication state.
 *
 * @returns {Object} An object containing the following properties:
 * - connectedUser: The currently connected user, or null if no user is connected.
 * - auth: A boolean indicating whether the user is authenticated.
 * - userLoading: A boolean indicating whether the user data is still loading.
 */
export function useUser() {
	const [connectedUser, setConnectedUser] = useState(null);
	const [auth, setAuth] = useState(false);
	const [userLoading, setUserLoading] = useState(true);

	useEffect(() => {
		async function GetUserDetails() {
			const { authenticated, user } = getAuthenticatedUser();
			setConnectedUser(user);
			setAuth(authenticated);
			setUserLoading(false);
		}
		GetUserDetails();
	}, []);

	return { connectedUser, auth, userLoading };
}
