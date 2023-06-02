import Image from "next/image"
import Link from "next/link"
import Burger from "../lib/burger"
import CocoonLogo from "public/header/cocoonDataLogo.png"

export default function NavBar() {
  return (
    <div className="flex flex-row">
      <div className="mt-2 mr-28">
        <Image
          src={CocoonLogo}
          alt="Cocoon Data"
        />
      </div>
      <div className="absolute p-2 cursor-pointer right-8 xl:hidden"><Burger /></div>
      <div className="flex-col hidden xl:flex">
        
        <div className="flex flex-row pb-10 ml-40 space-x-8">
          {navLinks.map((nav, i) => (
            <Link key={i} className="text-lg font-bold text-white" href={nav.url}>
              {nav.display}
            </Link>
          ))}
        </div>
        <div className="flex flex-row space-x-8">
          {navDropdowns.map((nav, i) => (
            <Link key={i} className="text-2xl font-bold text-lightGreen" href={nav.url}>
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
