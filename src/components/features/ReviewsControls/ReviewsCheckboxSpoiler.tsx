import { Checkbox } from "@/components/ui/checkbox"

export const ReviewsCheckboxSpoiler = () => {
  return (
      <label className="text-text-secondary rounded-lg py-2 px-4 bg-background-light-transparent-50 shadow-inset flex items-center gap-2.5 cursor-pointer ">
          <Checkbox className="data-[state=checked]:border-text-secondary border-text-secondary" />
          <span >Hide Spoilers</span>
   </label>
  )
}
