import axios from "axios"

export const movieApi = axios.create({
	baseURL: "https://api.kinopoisk.dev/v1.4/movie",
	headers: {
		"X-API-KEY": process.env.KINOPOISK_API_KEY,
		Accept: "application/json"
	}
})

export const axiosInstance = axios.create({
	baseURL: "http://localhost:3000/api",
	headers: {
		"Content-Type": "application/json"
	}
})