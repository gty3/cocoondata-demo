import Link from "next/link"

export default function IndustriesAndCompliance() {
  return (
    <div>
      <h3 className="text-bold">Industries</h3>
      {industryLinks.map((link, i) => (
        <Link href={link.href} key={i}>
          {link.name}
        </Link>
      ))}
      <Link href="/" className="text-bold">
        Compliance overview
      </Link>
      {complianceLinks.map((link, i) => (
        <Link href={link.href} key={i}>
          {link.name}
        </Link>
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
