import WhitePaper from "./separator/whitePaper"
import CaseStudy from "./separator/caseStudy"

export default function Separator() {
  return (
    <div className="bg-purple">
      <div className="flex justify-center py-12 md:mt-16 md:py-20">
        <div className="flex flex-col max-w-6xl space-y-12 tracking-tight md:space-x-20 md:flex-row md:tracking-none">
          <WhitePaper />
          <CaseStudy />
        </div>
      </div>
    </div>
  )
}
