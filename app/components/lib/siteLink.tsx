import Link from "next/link"

export default function SiteLink({
  name,
  href,
  i,
}: {
  name: string
  href: string
  i: number
}) {
  return (
    <Link className="hover:text-lightGreen" href={href} key={i}>
      {name}
    </Link>
  )
}
