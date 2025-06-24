import { Review, User, WatchlistMovie } from "@/generated/prisma";





export interface IUser extends User {
	watchList: {
		movies: WatchlistMovie[]
	}
	reviews: Review[]
}