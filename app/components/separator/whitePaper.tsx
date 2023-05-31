import Image from "next/image"
import CheckList from "/public/separator/padIcon.png"

export default function CaseStudy() {
  return (
    <div>
        <Image src={CheckList} alt="checklist"></Image>
    </div>
  )
}