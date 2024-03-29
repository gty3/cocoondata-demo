import Image from "next/image"
import ARN from "public/reviews/badges/arn.png"
import DYNEEMA from "public/reviews/badges/dyneema.png"
import NJ from "public/reviews/badges/nj.png"
import REDHILL from "public/reviews/badges/redhill.png"

export default function BadgeBar() {
  return (
    <div className="grid flex-col justify-center mb-10 space-y-10 lg:mb-20 lg:space-y-0 lg:space-x-20 grid-auto lg:flex lg:flex-row">
      {badges.map((badge, i) => (
        <div key={i} className="flex flex-col justify-center">
        <Image src={badge.src} alt={badge.alt} />
        </div>
      ))}
    </div>
  )
}

const badges = [
  { src: NJ, alt: "NJ RENTON & PARTNERS" },
  { src: DYNEEMA, alt: "DYNEEMA" },
  { src: ARN, alt: "ARNPRIOR" },
  { src: REDHILL, alt: "REDHILL" }
]
