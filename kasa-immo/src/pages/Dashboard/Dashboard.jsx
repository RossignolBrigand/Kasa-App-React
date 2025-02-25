import React from "react";
import { getAuthenticatedUser } from "../../lib/common";

//--------------------------------------

export default function Dashboard() {
	const userId = getAuthenticatedUser();

	return (
		<>
			<h1>This is the dashboard page</h1>
			<h2>Content !!!</h2>
			<p>This is the dashboard belonging to {userId} </p>
		</>
	);
}
