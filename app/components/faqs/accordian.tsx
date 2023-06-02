export default function Accordian() {
  return (
    <div className="flex justify-center">
      <div className="w-[72rem] bg-white my-4">
          {QandAs.map((qanda, i) => (
            <div className="flex flex-col items-center my-8 cursor-pointer">
              <div className="w-16 h-1.5 bg-purple" />
              <div className="mt-2 mb-3 font-light text-purple" key={i}>
                {"Q: "}{qanda.question}
              </div>
              {i + 1 < QandAs.length && <div className="w-11/12 h-0.5 bg-purple" />}
            </div>
          ))}
      </div>
    </div>
  )
}

const QandAs = [
  {
    question: "How is Cocoon Data priced?",
    answer: "",
  },
  {
    question:
      "How does Cocoon Data compare to other popular file sharing platforms?",
    answer: "",
  },
  {
    question: "How do you keep our files secure?",
    answer: "",
  },
  {
    question: "Is Cocoon data easy to learn and easy to use?",
    answer: "",
  },
  {
    question: "How do I become a Cocoon Data Partner?",
    answer: "",
  },
]
