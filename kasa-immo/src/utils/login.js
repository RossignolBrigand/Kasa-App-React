export const handleLogin = async (data) => {
	try {
		const userData = { email: data.email, password: data.password };
		const endpoint = "/api/auth/login";
		const response = await fetch(endpoint, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(userData),
		});

		if (!response.ok) {
			throw new Error("Failed to process request");
		}

		const result = await response.json();
		console.log(result); // Handle response
	} catch (error) {
		console.error(error.message);
	}
};

export const handleSignUp = async (data) => {
	const userData = { email: data.email, password: data.password };
	const endpoint = "/api/auth/signup";
	const response = fetch(endpoint, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(userData),
	})
		.then((response) => response.text()) // Get raw text response
		.then((data) => {
			try {
				const parsedData = JSON.parse(data); // Attempt to parse JSON
				console.log("Parsed Data:", parsedData);
			} catch (error) {
				console.error("Non-JSON Response:", data);
				throw new Error("Unexpected response format");
			}
		})
		.catch((error) => console.error("Error:", error));
	const result = await response.json();
	console.log(result); // Handle response
};
