import Image from "next/image"
import ARN from "public/reviews/badges/arn.png"
import DYNEEMA from "public/reviews/badges/dyneema.png"
import NJ from "public/reviews/badges/nj.png"
import REDHILL from "public/reviews/badges/redhill.png"

export default function BadgeBar() {
  return (
    <div className="flex flex-row justify-center mb-20 space-x-20">
      {badges.map((badge, i) => (
        <div className="flex flex-col justify-center">
        <Image key={i} src={badge.src} alt={badge.alt} />
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
