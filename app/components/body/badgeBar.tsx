import Image from "next/image"
import CMMC from "public/body/badges/badge1.png"
import ITAR from "public/body/badges/badge2.png"
import ISO from "public/body/badges/badge3.png"
import FIPS from "public/body/badges/badge4.png"
import HIPAA from "public/body/badges/badge5.png"

export default function BadgeBar() {
  return (
    <div className="flex flex-col items-center justify-center mb-10 space-y-2 md:space-y-0 md:mb-20 md:space-x-20 md:flex md:flex-row">
      {badges.map((badge, i) => (
        <div key={i} className="flex flex-col justify-center">
        <Image  src={badge.src} alt={badge.alt} />
        </div>
      ))}
    </div>
  )
}

const badges = [
  { src: CMMC, alt: "CMMC" },
  { src: ITAR, alt: "ITAR" },
  { src: ISO, alt: "ISO" },
  { src: FIPS, alt: "FIPS" },
  { src: HIPAA, alt: "HIPAA" },
]
