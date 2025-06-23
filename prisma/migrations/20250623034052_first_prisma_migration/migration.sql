-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "image" TEXT,
    "bio" TEXT,
    "name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "watchListId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WatchList" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "movie_id" INTEGER NOT NULL,

    CONSTRAINT "WatchList_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WishlistMovie" (
    "id" SERIAL NOT NULL,
    "tmdbId" INTEGER NOT NULL,
    "slug" TEXT NOT NULL,
    "backdrop_path" TEXT NOT NULL,
    "genre_ids" TEXT[],
    "original_language" TEXT NOT NULL,
    "original_title" TEXT NOT NULL,
    "overview" TEXT NOT NULL,
    "popularity" INTEGER NOT NULL,
    "poster_path" TEXT NOT NULL,
    "release_date" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "video" BOOLEAN NOT NULL,
    "vote_average" INTEGER NOT NULL,
    "vote_count" INTEGER NOT NULL,

    CONSTRAINT "WishlistMovie_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_watchListId_key" ON "User"("watchListId");

-- CreateIndex
CREATE UNIQUE INDEX "WatchList_user_id_key" ON "WatchList"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "WatchList_movie_id_key" ON "WatchList"("movie_id");

-- AddForeignKey
ALTER TABLE "WatchList" ADD CONSTRAINT "WatchList_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WatchList" ADD CONSTRAINT "WatchList_movie_id_fkey" FOREIGN KEY ("movie_id") REFERENCES "WishlistMovie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
