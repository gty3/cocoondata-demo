import Button from "@/app/components/lib/button"

export default function TextSide() {
  return (
    <div className="bg-purple pr-16">
      <div className="max-w-sm mx-16 my-12">
        <div className="mb-10 text-5xl text-white font-extralight">Ultra-scalable</div>
        <div className="mb-6 text-white">
          {
            "From organizations starting their data security journey to Custom Clouds – Cocoon Data has a scalable offering to keep your data safe and compliant. Our pay-as-you-go subscription offers an immediate cloud service to go-live today. Our custom, cloud-agnostic solution offers unparalleled security deployed on the IaaS of your choice. From SMB to ultra-secure defense and intelligence communities – we have you secured."
          }
        </div>
        <Button color="green">LEARN MORE</Button>
      </div>
      
    </div>
  )
}
