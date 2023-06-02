import SiteLink from "../../lib/siteLink"

export default function OtherLinks() {
  return (
    <div className="flex flex-col">
      {otherLinks.map((link, i) => (
        <SiteLink {...link} key={i} />
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
