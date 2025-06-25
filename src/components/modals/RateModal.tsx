"use client"

import { AxiosError } from "axios"
import { Loader2, Star } from "lucide-react"
import { useRouter } from "next/navigation"
import { FormEvent, useEffect, useState } from "react"
import { toast } from "react-toastify"

import { useReviews } from "@/hooks/useReviews"

import {
	AlertDialog,
	AlertDialogContent,
	AlertDialogTitle,
	AlertDialogTrigger
} from "../ui/alert-dialog"
import { Textarea } from "../ui/textarea"

import { axiosInstance } from "@/configs/axios.config"
import { Review } from "@/generated/prisma"
import { cn } from "@/lib/utils"
import { useUserStore } from "@/stores/userStore"
import { IMovie, ITmdbMovie } from "@/types/movie.interface"

type Props = {
	children: React.ReactNode
	movie: ITmdbMovie
}

export const RateModal = ({ children, movie }: Props) => {
	const {
		onSubmit,
		loading,
		isRated,
		rating,
		setRating,
		openModal,
		setOpenModal,
		onRemoveReview
	} = useReviews(movie)



	return (
		<AlertDialog onOpenChange={setOpenModal} open={openModal}>
			<AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
			<AlertDialogContent className='pt-14'>
				<div
					className={`flex items-center justify-center gap-2  absolute -top-[50px] left-1/2 -translate-x-1/2`}
					style={{
						scale: rating ? rating * 0.1 + 0.8 : 1
					}}
				>
					<Star
						fill='var(--color-main-blue)'
						stroke='var(--color-main-blue)'
						size={85}
					/>
					<p className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-bold text-3xl'>
						{rating || "?"}
					</p>
				</div>
				<p className='text-main-yellow uppercase font-semibold text-xs text-center'>
					RATE THIS
				</p>
				<AlertDialogTitle className='text-white text-xl font-normal text-center'>
					{movie.title}
				</AlertDialogTitle>
				<form
					onSubmit={onSubmit}
					className='w-full flex flex-col gap-4'
				>
					<div className='flex items-center justify-center gap-2 '>
						{[...new Array(10)].map((_, index) => (
							<button
								type='button'
								onClick={() => setRating(index + 1)}
								key={index}
							>
								<Star
									className={cn(
										"",
										rating &&
											index + 1 <= rating &&
											"fill-main-blue stroke-main-blue"
									)}
								/>
							</button>
						))}
					</div>

					<Textarea
						placeholder='Your review...'
						className='max-h-[200px] border-text-secondary'
						defaultValue={isRated?.content || ""}
						name='content'
					/>

					<button
						type='submit'
						disabled={!rating || loading}
						className='rounded-3xl bg-main-yellow text-black flex items-center justify-center px-4 py-2 hover:opacity-80 disabled:bg-background-secondary disabled:text-text-primary disabled:hover:opacity-100 disabled:pointer-events-none'
					>
						{loading ? (
							<Loader2 className='animate-spin' />
						) : (
							"Rate"
						)}
					</button>
				</form>
				{isRated && (
					<button
						onClick={() => onRemoveReview(isRated.id)}
						disabled={loading}
						type='button'
						className='rounded-3xl flex items-center justify-center text-main-blue px-4 py-2 hover:bg-main-blue/30 disabled:opacity-80 disabled:hover:bg-transparent disabled:pointer-events-none'
					>
						{loading ? (
							<Loader2 className='animate-spin' />
						) : (
							"Remove rating"
						)}
					</button>
				)}
			</AlertDialogContent>
		</AlertDialog>
	)
}
