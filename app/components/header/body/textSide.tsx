import Button from "../../lib/button"

export default function TextSide() {
  return (
    <div>
      <div className="text-white">
        <div className="text-xl font-extralight">
          Encrypted file sharing platform
        </div>
        <div className="mt-4 mb-6 md:mb-8 text-5xl leading-[3.5rem] font-extralight">
          Ultra-secure, ultra-easy, ultra-scalable.
        </div>
        <div>
          {
            "Cocoon Data is the ultra-secure, encrypted file sharing platform that’s easy to use and incredibly affordable. Engineered by military minds, Cocoon Data meets regulated document requirements for government, defense, healthcare, education, and many other businesses that need to share and collaborate on files. We believe data security and compliance should be accessible and affordable for all.  Our unique patented technology means, globally, we are the only one of our kind."
          }
        </div>
      </div>
      <div className="flex flex-col mt-8 mb-10 md:mt-16 md:space-x-10 md:flex-row md:mb-24">
        <div className="flex justify-center mb-8 md:mb-0"><Button color="green">GET STARTED</Button></div>
        <button className="p-2 text-lg font-bold text-white">WATCH VIDEO</button>
      </div>
    </div>
  )
}
