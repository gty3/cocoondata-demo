import Image from "next/image"
import CMMC from "public/badges/badge1.png"
import ITAR from "public/badges/badge2.png"
import ISO from "public/badges/badge3.png"
import FIPS from "public/badges/badge4.png"
import HIPAA from "public/badges/badge5.png"

export default function Body() {
  return (
    <div className="flex flex-row justify-center mt-40 space-x-20">
      {badges.map((badge) => (
        <Image src={badge.src} alt={badge.alt} />
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
