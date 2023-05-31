import Card1 from "./storyBook/card1";
import Card2 from "./storyBook/card2";
import Card3 from "./storyBook/card3";


export default function StoryBook() {
  return (
    <div className="flex flex-col mb-20 space-y-10">
      <Card1 />
      <Card2 />
      <Card3 />
    </div>
  )
}