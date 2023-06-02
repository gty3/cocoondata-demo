import Image from "next/image"
import TextSide from "./body/textSide"
import LadyInOffice from "public/header/Lady-in-office-with-team.png"

export default function Body() {
  return (
    <div className="grid lg:space-x-20 lg:grid-cols-2">
      <div className="max-w-lg">
        <TextSide />
      </div>
        <Image src={LadyInOffice} className="row-start-1 mb-10 lg:mt-4 lg:row-auto lg:mb-0" alt="Lady in office with team" />
    </div>
  )
}
