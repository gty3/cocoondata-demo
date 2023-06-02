import Link from "next/link"

export default function Product() {
  return (
    <div>
      <h3 className="text-bold">Product</h3>
      {productLinks.map((link, i) => (
        <Link href={link.href} key={i}>
          {link.name}
        </Link>
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