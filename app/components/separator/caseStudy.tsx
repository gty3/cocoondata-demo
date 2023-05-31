import Image from "next/image"
import LockCrosshair from "/public/separator/lockCrosshair.png"
import Button from "../lib/button"

export default function WhitePaper() {
  return (
    <div>
      <div className="flex justify-center mb-6">
      <Image src={LockCrosshair} alt="Lock crosshair"></Image>
      </div>
      <div className="max-w-xl text-4xl leading-[3rem] text-center text-white font-extralight">
        <div>Cybersecurity and Financial Services</div>
      </div>
      <div className="flex justify-center mt-28">
        <Button color="green">DOWNLOAD WHITE PAPER</Button>
      </div>
    </div>
  )
}
