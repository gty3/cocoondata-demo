import Button from "@/app/components/lib/button"

export default function TextSide() {
  return (
    <div className="bg-purple md:pr-16">
      <div className="max-w-sm mx-4 my-12 md:mx-16">
        <div className="mb-10 text-5xl text-white font-extralight">Ultra-secure</div>
        <div className="mb-6 text-white">
          {
            "End-to-end protection at the individual file level powers the Cocoon Data encrypted file sharing platform. Additional security options let you add document watermarks and limit access by location, IP address, date, and more. You can now feel safe sharing and collaborating on documents with colleagues both inside and outside of your organization."
          }
        </div>
        <Button color="green">LEARN MORE</Button>
      </div>
      
    </div>
  )
}
