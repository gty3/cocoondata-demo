export default function Button({
  color,
  children,
}: {
  color: string
  children: string
}) {
  const colorVariants: { [key: string]: string } = {
    green: "bg-[#c0edb6] hover:text-[#c0edb6] hover:bg-[#69727d]",
    purple: "bg-red-600 hover:bg-red-500",
  }

  return <button className={`${colorVariants[color]} px-8 py-1.5 rounded-3xl text-lg font-bold`}>{children}</button>
}
