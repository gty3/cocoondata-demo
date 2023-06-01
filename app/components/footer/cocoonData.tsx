import Image from "next/image";
import cocoonLogo from "public/cocoonDataLogo.png"
export default function CocoonData() {
  return (
    <div>
      <Image src={cocoonLogo} alt="cocoonLogo" />
      <div className="text-white">
      {"Cocoon Data is a global technology company providing an ultra secure, encrypted file sharing platform, that enables business and Government to identify, protect, and control access to sensitive data."}
      </div>
    </div>
  )
}