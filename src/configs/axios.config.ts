import axios from "axios"

export const movieApi = axios.create({
	baseURL: "https://api.themoviedb.org/3",
	headers: {
		accept: "application/json",
		Authorization:
			"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNjQwYjAzNjA0ZWQzOGNkZmI1ODQwNzhhNTk4ZGRlYyIsIm5iZiI6MTc0ODU3NjQwNS40NTIsInN1YiI6IjY4MzkyODk1ZDVhNzE2OGRmYTk2OGRjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.c3EsMpDZmLUmGhYlgBgYbfV_GgieLWDKrGI4fPZXv1s"
	}
})
