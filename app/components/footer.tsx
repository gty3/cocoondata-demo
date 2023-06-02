import CocoonData from "./footer/cocoonData"
import SiteLinks from "./footer/siteLinks"
import Socials from "./footer/socials"

export default function Footer() {
  return (
    <div className="py-12 sm:py-24 bg-purple">
      <div className="flex justify-center">
        <div className="flex flex-col mx-4 md:space-x-24 md:flex-row max-w-7xl">
          <CocoonData />
          <SiteLinks />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col">
          <div className="flex justify-center">
            <Socials />
          </div>
          <div className="mx-4 mt-4 font-bold text-center text-white">
            Copyright © 2022 Cocoon Data Technologies Limited. All Rights
            Reserved.
          </div>
        </div>
      </div>
    </div>
  )
}
