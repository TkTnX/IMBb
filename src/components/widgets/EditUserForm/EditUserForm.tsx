"use client"

import { Upload } from "lucide-react"
import Image from "next/image"

import { Skeleton } from "@/components/ui/skeleton"

import { useEditUser } from "@/hooks/useEditUser"

export const EditUserForm = () => {
	const { onSubmit, onImageChange, onClickOpen, openEdit, user, loading } =
		useEditUser()

	return (
		<form onSubmit={onSubmit} className='mt-10 max-w-1/2'>
			<label
				htmlFor='image'
				className='flex items-center gap-2 cursor-pointer w-fit'
			>
				{loading ? (
					<Skeleton className='md:w-[140px] md:h-[140px] w-[90px] h-[90px] rounded-full' />
				) : (
					<Image
						alt={user?.username || "User"}
						className='rounded-full md:w-[140px] md:h-[140px] w-[90px] h-[90px]'
						src={user?.image || "/images/no-avatar.jpg"}
						width={140}
						height={140}
					/>
				)}

				<div>
					<p>
						Upload an image in JPG or PNG format with a max size of
						25MB.
					</p>
					<p className='flex items-center gap-1 p-3 rounded-xl border border-main-yellow text-main-yellow hover:bg-main-yellow/30 mt-5 w-fit'>
						<Upload /> Upload image
					</p>
				</div>
				<input
					onChange={onImageChange}
					accept='image/jpeg, image/png'
					max={2500000}
					id='image'
					name='image'
					type='file'
					hidden
				/>
			</label>
			<div className='border-y border-y-background-light-transparent-100 py-4 mt-4'>
				<div className='flex items-center gap-2'>
					<b>Username</b>{" "}
					{loading ? (
						<Skeleton className='w-[100px] h-6' />
					) : (
						user?.username
					)}{" "}
					<button
						onClick={() => onClickOpen("username")}
						type='button'
						className='text-main-blue ml-auto'
					>
						Edit
					</button>
				</div>
				{openEdit === "username" && (
					<div className='border pl-2 rounded-xl mt-4 w-fit overflow-hidden'>
						<input
							name='username'
							placeholder='New username...'
							className='outline-none flex-1 '
						/>
						<button
							disabled={loading}
							className='p-2  bg-main-blue text-white disabled:opacity-80 disabled:pointer-events-none'
							type='submit'
						>
							Save
						</button>
					</div>
				)}
			</div>
			<div className=' border-y border-y-background-light-transparent-100 py-4 '>
				<div className='flex items-center gap-2'>
					<b>Bio</b>
					<button
						onClick={() => onClickOpen("bio")}
						type='button'
						className='text-main-blue ml-auto '
					>
						Edit
					</button>
				</div>
				{loading ? <Skeleton className='w-full h-12' /> : user?.bio}{" "}
				{openEdit === "bio" && (
					<div className='border pl-2 rounded-xl mt-4 overflow-hidden h-fit flex items-stretch w-full'>
						<textarea
							name='bio'
							placeholder='New bio...'
							className='outline-none flex-1 min-h-[100px] max-h-[200px] p-2 w-full'
						/>
						<button
							disabled={loading}
							className='p-2  bg-main-blue text-white disabled:opacity-80 disabled:pointer-events-none'
							type='submit'
						>
							Save
						</button>
					</div>
				)}
			</div>
		</form>
	)
}
