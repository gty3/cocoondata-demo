import Image from "next/image"
import CMMC from "public/body/badges/badge1.png"
import ITAR from "public/body/badges/badge2.png"
import ISO from "public/body/badges/badge3.png"
import FIPS from "public/body/badges/badge4.png"
import HIPAA from "public/body/badges/badge5.png"

export default function BadgeBar() {
  return (
    <div className="flex flex-row mb-20 space-x-20">
      {badges.map((badge, i) => (
        <Image key={i} src={badge.src} alt={badge.alt} />
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
