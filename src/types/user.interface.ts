import { User, WatchlistMovie } from "@/generated/prisma"

export interface IUser extends User {
	watchList: {
		movies: WatchlistMovie[]
	}
}
