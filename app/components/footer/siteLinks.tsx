import Product from "./siteLinks/product"
import Industries from "./siteLinks/industriesAndCompliance"
import OtherLinks from "./siteLinks/otherLinks"

export default function SiteLinks() {
  return (
    <div>
      <div className="flex flex-col mt-6 space-y-6 text-white sm:mt-20 sm:space-y-0 sm:flex-row sm:space-x-20">
        <Product />
        <Industries />
        <OtherLinks />
      </div>
    </div>
  )
}
