import Image from "next/image"
import CheckList from "/public/separator/padIcon.png"
import Button from "../lib/button"

export default function WhitePaper() {
  return (
    <div className="">
      <div className="flex justify-center mb-6">
        <Image src={CheckList} alt="checklist"></Image>
      </div>
      <div className="flex justify-center">
        <div className="max-w-xl text-3xl md:text-4xl leading-[3rem] text-center text-white font-extralight">
          <div>What Defense Contractors need to know about the US Government's CMMC requirements</div>
        </div>
        {/* <div className="flex justify-center mt-6"></div> */}
      </div>
      <div className="flex justify-center mt-10">
        <Button color="green">DOWNLOAD WHITE PAPER</Button>
      </div>
    </div>
  )
}
