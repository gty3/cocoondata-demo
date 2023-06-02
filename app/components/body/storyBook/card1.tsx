import Image from "next/image";
import TextSide from "./card1/textSide";
import TwoColleagues from "/public/body/Two-collegaues-on-computer.jpg"

export default function Card1() {
  return (
    <div className="flex flex-col items-center bg-purple lg:flex-row">
      <TextSide />
      <Image src={TwoColleagues} alt="Two collegaues on computer"/>
    </div>
  )
}