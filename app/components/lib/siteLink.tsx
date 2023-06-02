import Link from "next/link"

export default function SiteLink({
  name,
  href
}: {
  name: string
  href: string
}) {
  return (
    <Link className="hover:text-lightGreen" href={href}>
      {name}
    </Link>
  )
}
