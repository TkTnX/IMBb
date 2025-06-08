import { CommentItem } from "@/components/ui/CommentItem"
import { IComment } from "@/types/comment.interface"

type Props = {
    comments: IComment[]
}
export const ReviewsList = ({ comments }: Props) => {
  return (
    <div className='flex flex-col gap-4 w-full mt-6 overflow-y-auto max-h-[calc(100vh-250px)] pr-2'>
    {comments.map(comment => (
        <CommentItem
            key={comment.id}
            comment={comment}
        />
    ))}
</div>
  )
}
