import Image, { StaticImageData } from "next/image"
import Cary from "/public/reviews/cary.png"
import Christopher from "/public/reviews/christopher.png"
import Nigel from "/public/reviews/nigel.png"
import BadgeBar from "./reviews/badgeBar"

export default function Reviews() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col max-w-6xl">
        <div className="text-[#2e0161] text-5xl font-extralight mt-28 mb-10 flex justify-center">
          Customer reviews
        </div>
        <div className="mb-20 space-y-6">
          {customerReviews.map((review, i) => (
            <ReviewCard key={i} {...review} />
          ))}
        </div>
        <BadgeBar />
      </div>
    </div>
  )
}

const ReviewCard = ({
  quote,
  name,
  job,
  image,
}: {
  quote: string
  name: string
  job: string
  image: StaticImageData
}) => {
  return (
    <div className="flex flex-row border rounded-lg shadow-lg shadow-gray-300">
      <div className="p-6">
        <Image height={165} width={165} src={image} alt={name} />
      </div>

      <div className="flex flex-col">
        <div>{quote}</div>
        <div>{name}</div>
        <div>{job}</div>
      </div>
    </div>
  )
}

const customerReviews = [
  {
    quote:
      "“NJR Partners provides a fiduciary advisory service to endowments, foundations, families and investment professionals. We regularly need to permit trusted parties to view or download a sensitive document. Cocoon Data provides us with the control to do this simply while providing a detailed audit trail for compliance.”",
    name: "Nigel Renton",
    job: "Financial Advisor",
    image: Nigel,
  },
  {
    quote:
      "“As we all transition to work-from-home arrangements, it is more important than ever to ensure our information is protected. Cocoon Data’s cloud file sharing service is second to none!”",
    name: "The Hon. Christopher Pyne",
    job: "Former Australian Minister for Defence",
    image: Christopher,
  },
  {
    quote:
      "“I would recommend Cocoon Data to any organization that needs to be in compliance with ITAR, and am confident the product and company will stand up to that reference.”",
    name: "Cary Glover",
    job: "Cast-Rite Corporation | US Defense Contractor",
    image: Cary,
  },
]
