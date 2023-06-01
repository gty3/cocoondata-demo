import Body from "./header/body"
import NavBar from "./header/navbar"

export default function Header() {
  return (
    <div className="bg-purple">
      <div className="flex justify-center">
        <div className="max-w-6xl m-3">
          <div className="mt-6 mb-24">
            <NavBar />
          </div>
          <Body />
        </div>
      </div>
    </div>
  )
}
