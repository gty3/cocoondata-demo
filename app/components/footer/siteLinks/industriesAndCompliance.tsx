import Link from "next/link"
import SiteLink from "../../lib/siteLink"

export default function IndustriesAndCompliance() {
  return (
    <div className="flex flex-col">
      <h3 className="mb-3 font-bold">Industries</h3>
      {industryLinks.map((link, i) => (
        <SiteLink {...link} key={i} />
      ))}
      <Link href="/" className="mt-4 mb-3 font-bold">
        Compliance overview
      </Link>
      {complianceLinks.map((link, i) => (
        <SiteLink {...link} key={i} />
      ))}
    </div>
  )
}
const industryLinks = [
  {
    name: "Business",
    href: "/",
  },
  {
    name: "Governement",
    href: "/",
  },
  {
    name: "Defense",
    href: "/",
  },
  {
    name: "Education",
    href: "/",
  },
]

const complianceLinks = [
  {
    name: "ITAR compliance",
    href: "/",
  },
  {
    name: "CMMC 2.0 compliance",
    href: "/",
  },
  {
    name: "HIPAA",
    href: "/",
  },
]
