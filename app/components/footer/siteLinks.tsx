import Product from "./siteLinks/product"
import Industries from "./siteLinks/industriesAndCompliance"
import OtherLinks from "./siteLinks/otherLinks"

export default function SiteLinks() {
  return (
    <div>
      <div className="flex flex-row text-white">
        <Product />
        <Industries />
        <OtherLinks />
      </div>
    </div>
  )
}
