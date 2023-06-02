import SiteLink from "../../lib/siteLink"

export default function Product() {
  return (
    <div className="flex flex-col">
      <h3 className="mb-3 font-bold">Product</h3>
      {productLinks.map((link, i) => (
        <SiteLink {...link} i={i} />
      ))}
    </div>
  )
}

const productLinks = [
  {
    name: "Overview",
    href: "/",
  },
  {
    name: "Collaboration",
    href: "/",
  },
  {
    name: "Security",
    href: "/",
  },
  {
    name: "Admin & policies",
    href: "/",
  },
  {
    name: "Cocoon Private Cloud",
    href: "/",
  },
]