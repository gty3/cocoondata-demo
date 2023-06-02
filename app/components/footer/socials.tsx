import LinkedIn from 'public/footer/linkedIn.png'
import Twitter from 'public/footer/Twitter.png'
import Facebook from 'public/footer/Facebook.png'
import Image from 'next/image'


export default function Socials() {
  return (
    <div className="flex flex-row space-x-5 hover:cursor-pointer ">
      <Image className="hover:cursor-pointer" src={LinkedIn} alt="LinkedIn" />
      <Image className="hover:cursor-pointer" src={Twitter} alt="Twitter" />
      <Image className="hover:cursor-pointer" src={Facebook} alt="Facebook" />
    </div>
  )
}