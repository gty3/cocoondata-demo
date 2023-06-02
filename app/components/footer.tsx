import CocoonData from "./footer/cocoonData"
import SiteLinks from "./footer/siteLinks"
import Socials from "./footer/socials"

export default function Footer() {
  return (
    <div className="py-24 bg-purple">
      <div className="flex justify-center">
        <div className="flex flex-row space-x-24 max-w-7xl">
          <CocoonData />
          <SiteLinks />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col">
          <div className="flex justify-center">
            <Socials />
          </div>
          <div className="mt-4 font-bold text-white">
            Copyright © 2022 Cocoon Data Technologies Limited. All Rights
            Reserved.
          </div>
        </div>
      </div>
    </div>
  )
}
