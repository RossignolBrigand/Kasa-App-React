import { useState } from "react";
import { API_ROUTES, APP_ROUTES } from "../utils/constants";
import axios from "axios";
import { json } from "react-router";

/**
 * Stores the provided token and userId in the local storage.
 *
 * @param {string} token - The token to be stored.
 * @param {string} userId - The user ID to be stored.
 */
export function storeInLocalStorage(token, userId) {
	localStorage.setItem("token", token);
	localStorage.setItem("userId", userId);
}

/**
 * Retrieves an item from the local storage.
 *
 * @param {string} item - The key of the item to retrieve from local storage.
 * @returns {string | null} The value of the item from local storage, or null if the item does not exist.
 */
export function getFromLocalStorage(item) {
	return localStorage.getItem(item);
}

/**
 * Retrieves the authenticated user from local storage.
 *
 * @async
 * @function getAuthenticatedUser
 * @returns {Promise<Object>} A promise that resolves to an object containing the authentication status and user information.
 * @property {boolean} authenticated - Indicates whether the user is authenticated.
 * @property {Object|null} user - The authenticated user's information, or null if not authenticated.
 * @property {string} user.userId - The ID of the authenticated user.
 * @property {string} user.token - The authentication token of the user.
 */
export async function getAuthenticatedUser() {
	const defaultReturnObject = { authenticated: false, user: null };
	try {
		const token = getFromLocalStorage("token");
		const userId = getFromLocalStorage("userId");
		if (!token) {
			return defaultReturnObject;
		}
		return { authenticated: true, user: { userId, token } };
	} catch (err) {
		console.error("getAuthenticatedUser, Something Went Wrong", err);
		return defaultReturnObject;
	}
}

export const signIn = async (data) => {
	try {
		const formData = JSON.stringify(data);
		const response = await axios.post(API_ROUTES.SIGN_IN, formData);
		if (!response?.data?.token) {
			console.log("Something went wrong during signing in: ", response);
			return { error: true, message: "Une erreur est survenue" };
		} else {
			storeInLocalStorage(response.data.token, response.data.userId);
		}
	} catch (err) {
		console.log("Some error occured during signing in: ", err);
		return { error: true, message: err.message };
	}
};

export const signUp = async (data) => {
	try {
		const formData = JSON.stringify(data);
		const response = await axios.post(API_ROUTES.SIGN_UP, formData);
		if (!response?.data?.token) {
			console.log("Something went wrong during signing up:", response);
			return { error: true, message: "Une erreur est survenue" };
		} else {
			return response.json();
		}
	} catch (err) {
		console.log(err);
		return { error: true, message: err.message };
	}
};
