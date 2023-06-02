import Accordian from "./faqs/accordian"
import Button from "./lib/button"

export default function FAQs() {
  return (
    <div className="bg-[#f2f2f0] pb-28">
      <div className="flex justify-center pt-24 pb-16 text-4xl text-purple font-extralight">
        Frequently asked questions
      </div>
      <Accordian />
      <div className="mt-28 text-purple">
        <div className="flex justify-center text-4xl">Stay updated</div>
        <div className="flex justify-center my-5">
          The latest news, articles, and resources, sent straight to your inbox.
        </div>
        <div className="flex justify-center">
          <Button color="purple">SIGN ME UP</Button>
        </div>
      </div>
    </div>
  )
}
