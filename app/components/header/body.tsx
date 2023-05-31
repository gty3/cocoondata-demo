import Image from "next/image"
import TextSide from "./body/textSide"
import LadyInOffice from "public/header/Lady-in-office-with-team.png"

export default function Body() {
  return (
    <div className="grid grid-cols-2 space-x-20">
      <div className="max-w-lg">
        <TextSide />
      </div>
        <Image src={LadyInOffice} className="mt-4" alt="Lady in office with team" />
    </div>
  )
}
