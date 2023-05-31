import Image from "next/image"
import TextSide from "./body/textSide"

export default function Body() {
  return (
    <div className="grid grid-cols-2 space-x-20">
      <div className="max-w-lg">
        <TextSide />
      </div>
      <Image
        src="/header/Lady-in-office-with-team.png"
        height={435}
        width={593}
        alt="Lady in office with team"
      />
    </div>
  )
}
