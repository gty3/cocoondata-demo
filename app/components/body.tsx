import BadgeBar from "./body/badgeBar"
import StoryBook from "./body/storyBook"

export default function Body() {
  return (
    <div className="flex justify-center mt-32">
      <div className="max-w-6xl">
        <BadgeBar />
        <StoryBook />
      </div>
    </div>
  )
}
