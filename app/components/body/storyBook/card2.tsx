import Image from "next/image"
import TextSide from "./card2/textSide"
import WomanServerRoom from "/public/body/woman-server-room.jpg"
import C from "/public/body/c.png"

export default function Card2() {
  return (
    <div className="flex flex-col items-center lg:flex-row bg-purple">
      <Image className="order-last lg:order-none" src={WomanServerRoom} alt="Two collegaues on computer" />
      <TextSide />
    </div>
  )
}
