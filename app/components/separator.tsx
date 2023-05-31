import WhitePaper from "./separator/whitePaper"
import CaseStudy from "./separator/caseStudy"

export default function Separator() {
  return (
    <div className="bg-[#2e0161]">
      <div className="flex justify-center mt-20">
        <div>
          <WhitePaper />
          <CaseStudy />
        </div>
      </div>
    </div>
  )
}
