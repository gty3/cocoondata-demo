import Image from "next/image";
import cocoonLogo from "public/footer/cocoonDataLogo2.png"
import Button from "../lib/button";

export default function CocoonData() {
  return (
    <div>
      <Image src={cocoonLogo} alt="cocoonLogo" />
      <div className="text-lg text-white">
      {"Cocoon Data is a global technology company providing an ultra secure, encrypted file sharing platform, that enables business and Government to identify, protect, and control access to sensitive data."}
      </div>
      <Button color="green">SUBSCRIBE</Button>
    </div>
  )
}