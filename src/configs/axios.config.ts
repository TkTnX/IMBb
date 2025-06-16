import axios from "axios";





export const traktApi = axios.create({
	baseURL: process.env.TRAKT_BASE_URL,
	headers: {
		"Content-Type": "application/json",
		"trakt-api-version": "2",
		"trakt-api-key": process.env.TRAKT_CLIENT_ID
	}
})

export const tmdbApi = axios.create({
	baseURL: process.env.TMDB_BASE_URL,
	params: { language: "en-US" },
	headers: {
		accept: "application/json",
		Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`
	}
})

export const axiosInstance = axios.create({
	baseURL: "http://localhost:3000/api",
	headers: {
		"Content-Type": "application/json"
	}
})