import Image from "next/image"
import Link from "next/link"

export default function NavBar() {
  return (
    <div className="flex flex-row">
      <div className="mt-2 mr-28">
        <Image
          src="/cocoonDataLogo.png"
          height={74}
          width={209}
          alt="Cocoon Data"
        />
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row pb-10 ml-40 space-x-8">
          {navLinks.map((nav) => (
            <Link className="text-lg font-bold text-white" href={nav.url}>
              {nav.display}
            </Link>
          ))}
        </div>
        <div className="flex flex-row space-x-8">
          {navDropdowns.map((nav) => (
            <Link className="text-[#c0edb6] text-2xl font-bold" href={nav.url}>
              {nav.display}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

const navLinks = [
  {
    display: "Sign up",
    url: "",
  },
  {
    display: "Login",
    url: "",
  },
  {
    display: "Partners",
    url: "",
  },
  {
    display: "Support",
    url: "",
  },
  {
    display: "About us",
    url: "",
  },
  {
    display: "Contact us",
    url: "",
  },
]

const navDropdowns = [
  {
    display: "Product",
    url: "",
  },
  {
    display: "Industries",
    url: "",
  },
  {
    display: "Compliance",
    url: "",
  },
  {
    display: "Pricing",
    url: "",
  },
  {
    display: "Resources",
    url: "",
  },
]
