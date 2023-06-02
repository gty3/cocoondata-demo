import Link from "next/link"

export default function OtherLinks() {
  return (
    <div>
      {otherLinks.map((link, i) => (
        <Link href={link.href} key={i}>
          {link.name}
        </Link>
      ))}
    </div>
  )
}

const otherLinks = [
  {
    name: "Pricing",
    href: "/",
  },
  {
    name: "About Cocoon Data",
    href: "/",
  },
  {
    name: "Customers",
    href: "/",
  },
  {
    name: "Resources",
    href: "/",
  },
  {
    name: "Blog",
    href: "/",
  },
  {
    name: "Contact us",
    href: "/",
  },
  {
    name: "AWS Partner",
    href: "/",
  },
  {
    name: "Environmental / sustainabiliity",
    href: "/",
  },
  {
    name: "Whistleblower policy",
    href: "/",
  },
  {
    name: "Terms",
    href: "/",
  },
  {
    name: "Privacy Policy",
    href: "/",
  },
  {
    name: "Copyright Policy",
    href: "/",
  },
]
