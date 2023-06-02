import Image from "next/image";
import TextSide from "./card3/textSide";
import TwoColleagues from "/public/body/Two-business-men-talking.jpg"

export default function Card3() {
  return (
    <div className="flex flex-col items-center lg:flex-row bg-purple">
    <TextSide />
    <Image src={TwoColleagues} alt="Two collegaues on computer"/>
  </div>
  )
}