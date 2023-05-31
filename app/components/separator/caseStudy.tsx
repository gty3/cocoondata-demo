import Image from "next/image"
import LockCrosshair from "/public/separator/lockCrosshair.png"

export default function WhitePaper() {
  return (
    <div>
      <Image src={LockCrosshair} alt="Lock crosshair"></Image>
    </div>
  )
}
