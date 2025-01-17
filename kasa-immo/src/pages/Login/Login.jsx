import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, signupSchema } from "../../lib/zod/zod-config";
import { handleLogin, handleSignUp } from "../../utils/login";

import "./_login.scss";

function LoginPage() {
	const [isSignUp, setIsSignup] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: zodResolver(isSignUp ? signupSchema : loginSchema) });

	const onSubmit = (data, event) => {
		// Prevent the default form submission behavior
		event.preventDefault();
		if (isSignUp) {
			// Handle sign-up logic here
			console.log("Sign-up data:", data);
			handleSignUp(data);
		} else {
			// Handle login logic here
			console.log("Login data:", data);
			handleLogin(data);
		}
	};

	return (
		<div className="login-container">
			<h1 className="login-title">{isSignUp ? "Sign Up" : "Login"}</h1>
			<form onSubmit={handleSubmit((data, event) => onSubmit(data, event))}>
				<div>
					<label>Email</label>
					<input
						type="email"
						{...register("email")}
					/>
					{errors.email && <p>{errors.email.message}</p>}
				</div>
				<div>
					<label>Password</label>
					<input
						type="password"
						{...register("password")}
					/>
					{errors.password && <p>{errors.password.message}</p>}
				</div>
				{isSignUp && (
					<div>
						<label>Confirm Password</label>
						<input
							type="password"
							{...register("confirmPassword")}
						/>
						{errors.confirmPassword && (
							<p>{errors.confirmPassword.message}</p>
						)}
					</div>
				)}

				<button type="submit">{isSignUp ? "Sign Up" : "Login"}</button>
			</form>

			<button
				className="signUp-btn"
				onClick={() => setIsSignup((prev) => !prev)}>
				{isSignUp
					? "Already have an account? Log In"
					: "Don't have an account yet ? Please register."}
			</button>
		</div>
	);
}

export default LoginPage;
