import WhitePaper from "./separator/whitePaper"
import CaseStudy from "./separator/caseStudy"

export default function Separator() {
  return (
    <div className="bg-[#2e0161]">
      <div className="flex justify-center py-20 mt-20">
        <div className="flex flex-row max-w-6xl space-x-20">
          <WhitePaper />
          <CaseStudy />
        </div>
      </div>
    </div>
  )
}
