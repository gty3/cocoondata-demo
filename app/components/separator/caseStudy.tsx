import Image from "next/image"
import LockCrosshair from "/public/separator/lockCrosshair.png"
import Button from "../lib/button"

export default function CaseStudy() {
  return (
    <div>
      <div className="flex justify-center mb-6">
        <Image src={LockCrosshair} alt="Lock crosshair"></Image>
      </div>
      <div className="flex justify-center">
        <div className="max-w-xl text-3xl md:text-4xl leading-[3rem] text-center text-white font-extralight">
          <div>Cybersecurity and Financial Services</div>
        </div>
      </div>
      <div className="flex justify-center mt-10 md:mt-[108px]">
        <Button color="green">DOWNLOAD WHITE PAPER</Button>
      </div>
    </div>
  )
}
