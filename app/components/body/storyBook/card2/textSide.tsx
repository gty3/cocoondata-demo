import Button from "@/app/components/lib/button"

export default function TextSide() {
  return (
    <div className="bg-[#2e0161] pr-16">
      <div className="max-w-sm mx-16 my-12">
        <div className="mb-10 text-5xl text-white font-extralight">Ultra-easy</div>
        <div className="mb-6 text-white">
          {
            "No software or training is required to get started. Add users and recipients. Assign management roles. Designate special security options for file transfers. All without complexity. Cocoon Data is a cloud-based platform that also integrates seamlessly with Microsoft 365 for quick and easy collaboration."
          }
        </div>
        <Button color="green">LEARN MORE</Button>
      </div>
      
    </div>
  )
}
