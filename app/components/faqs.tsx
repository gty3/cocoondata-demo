import Accordian from "./faqs/accordian"
import Button from "./lib/button"

export default function FAQs() {
  return (
    <div className="bg-[#f2f2f0] pb-16 md:pb-28">
      <div className="flex justify-center pt-12 pb-6 text-3xl tracking-tight text-center md:tracking-normal md:pb-16 md:text-4xl md:pt-24 text-purple font-extralight">
        Frequently asked questions
      </div>
      <Accordian />
      <div className="mt-12 md:mt-28 text-purple">
        <div className="flex justify-center text-3xl text-center md:text-4xl">Stay updated</div>
        <div className="flex justify-center my-5 text-center">
          The latest news, articles, and resources, sent straight to your inbox.
        </div>
        <div className="flex justify-center">
          <Button color="purple">SIGN ME UP</Button>
        </div>
      </div>
    </div>
  )
}
