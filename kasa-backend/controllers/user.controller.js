const User = require("../models/User.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const env = require("dotenv").config();

exports.getUser = (req, res, next) => {
	try {
		console.log("200 get user route success");
		res.status(200).json({ message: "get user success" });
	} catch (error) {
		return res.status(500).json({ error });
	}
};

// Signup Logic
exports.signupUser = (req, res) => {
	const password = req.body.password;
	if (Buffer.byteLength(password, "utf-8") > 72) {
		return res.status(400).json({ error: "Le mot de passe est trop long !" });
	}
	bcrypt
		.hash(password, 20)
		.then((hash) => {
			const user = new User({
				email: req.body.email,
				password: hash,
			});
			user.save()
				.then(() => res.status(201).json({ message: "Utilisateur créé !" }))
				.catch((error) => {
					console.error("Error saving user:", error); // Log details
					res.status(400).json({
						error: error.message || "Bad Request",
					});
				});
		})
		.catch((error) => {
			console.error("Error hashing password:", error); // Log details
			res.status(500).json({ error: "Server Error" });
		});
};

exports.loginUser = (req, res) => {
	User.findOne({ email: req.body.email })
		.then((user) => {
			if (user === null) {
				res.status(401).json({
					message: "Paire identifiant/mot de passe incorrecte",
				});
			} else {
				bcrypt
					.compare(req.body.password, user.password)
					.then((valid) => {
						if (!valid) {
							res.status(401).json({
								message: "Paire identifiant/mot de passe incorrecte",
							});
						} else {
							res.status(200).json({
								userId: user._id,
								token: jwt.sign(
									{ userId: user._id },
									process.env.JWT_SECRET_KEY,
									{ expiresIn: "24h" }
								),
							});
						}
					})
					.catch((error) =>
						res.status(500).json({
							error: "Error while trying to find user",
						})
					);
			}
		})
		.catch((error) => res.status(500).json({ error: "Db side error" }));
};
