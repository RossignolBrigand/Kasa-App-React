import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES, API_ROUTES } from "../../utils/constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, signupSchema } from "../../lib/zod-config";
import { signIn, signUp } from "../../lib/common"; // Login/Signup logic
import { storeInLocalStorage, getFromLocalStorage } from "../../lib/common"; // Store userData
import { useUser } from "../../lib/customHooks";

import "./_login.scss";

//-----------------------------------------------------------------------------------------

function LoginPage() {
	const [isSignUp, setIsSignup] = useState(false);
	const navigate = useNavigate();
	const { authenticated, user } = useUser();

	if (user || authenticated) {
		navigate(APP_ROUTES.DASHBOARD);
	}

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: zodResolver(isSignUp ? signupSchema : loginSchema) });

	// Sign Button logic
	const onSubmit = (data, event) => {
		// Prevent the default form submission behavior
		if (isSignUp) {
			// Handle sign-up logic here
			signUp(data);
		} else {
			// Handle login logic here
			signIn(data);
		}
	};

	return (
		<div className="login-container">
			<h1 className="login-title">{isSignUp ? "Sign Up" : "Login"}</h1>
			<form onSubmit={handleSubmit((data, event) => onSubmit(data, event))}>
				<div>
					<label>Email</label>
					<input type="email" {...register("email")} />
					{errors.email && <p>{errors.email.message}</p>}
				</div>
				<div>
					<label>Password</label>
					<input type="password" {...register("password")} />
					{errors.password && <p>{errors.password.message}</p>}
				</div>
				{isSignUp && (
					<div>
						<label>Confirm Password</label>
						<input type="password" {...register("confirmPassword")} />
						{errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
					</div>
				)}

				<button type="submit">{isSignUp ? "Sign Up" : "Login"}</button>
			</form>

			<button className="signUp-btn" onClick={() => setIsSignup((prev) => !prev)}>
				{isSignUp
					? "Already have an account? Log In"
					: "Don't have an account yet ? Please register."}
			</button>
		</div>
	);
}

export default LoginPage;
