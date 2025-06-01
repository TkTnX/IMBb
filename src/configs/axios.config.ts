import axios from "axios";





export const movieApi = axios.create({
	baseURL: process.env.TRAKT_BASE_URL,
	headers: {
		"Content-Type": "application/json",
		"trakt-api-version": "2",
		"trakt-api-key": process.env.TRAKT_CLIENT_ID
	}
})

export const axiosInstance = axios.create({
	baseURL: "http://localhost:3000/api",
	headers: {
		"Content-Type": "application/json"
	}
})