import Image, { StaticImageData } from "next/image"
import Cary from "/public/reviews/cary.png"
import Christopher from "/public/reviews/christopher.png"
import Nigel from "/public/reviews/nigel.png"
import BadgeBar from "./reviews/badgeBar"

export default function Reviews() {
  return (
    <div className="flex justify-center mt-12 mb-6 md:mt-24">
      <div className="flex flex-col max-w-6xl m-4">
        <div className="flex justify-center mb-10 text-4xl md:text-5xl text-purple font-extralight ">
          Customer reviews
        </div>
        <div className="mb-20 space-y-12">
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
    <div className="flex flex-col p-3 border border-gray-100 rounded-lg shadow-lg md:p-6 md:flex-row shadow-gray-300">
      <div className="flex justify-center flex-none mb-6 md:mb-0 md:block">
        <Image height={165} width={165} src={image} alt={name} />
      </div>

      <div className="flex flex-col mx-2 md:ml-6 text-purple">
        <div className="font-semibold">{quote}</div>
        <div className="my-4 text-xl font-bold md:text-3xl">{name}</div>
        <div className="text-xl font-light">{job}</div>
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
