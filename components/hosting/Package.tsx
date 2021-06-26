import BillingCycle from "./BillingCycle";
import Feature from "./Feature";
import PricingTableButton from "./PricingTableButton";
import Link from "next/link";
function Package(plan: HostingPackage) {
  const popular_plan = "vortex";
  var databases = "";
  var mailboxes = "";
  if (plan.databases >= 999) {
    databases = "Unlimited databases";
  } else {
    databases = plan.databases + " databases";
  }
  if (plan.mailboxes >= 999) {
    mailboxes = "Unlimited mailboxes";
  } else {
    mailboxes = plan.mailboxes + " mailboxes";
  }
  var features = [
    plan.storage + "GB storage",
    databases,
    mailboxes,
    plan.domains + " domain(s)",
    plan.subdomains + " subdomains",
  ];
  return (
    <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
      {plan.name == new String(popular_plan).valueOf() ? (
        <div className="h-full p-6 rounded-lg border-2 border-pink-500 flex flex-col relative overflow-hidden">
          <span className="absolute top-0 right-0 px-3 py-1 text-xs tracking-widest text-white rounded-bl bg-pink">
            POPULAR
          </span>
          <h2 className="mb-1 text-sm font-medium tracking-widest uppercase title-font">
            {plan.name}
          </h2>
          <h1 className="flex items-center pb-4 mb-4 text-5xl leading-none text-gray-900 border-b border-gray-200">
            {plan.toggleCycle ? (
              <span>${plan.cost_ann.toFixed(2)}</span>
            ) : (
              <span>${plan.cost_mon.toFixed(2)}</span>
            )}
            {plan.toggleCycle ? (
              <BillingCycle cycle="/yr" />
            ) : (
              <BillingCycle cycle="/mo" />
            )}
          </h1>
          {features.map((entry) => {
            return <Feature key={entry} title={entry} />;
          })}
          <Link href="/">
            <button className="flex items-center mt-auto text-white bg-pink border-0 py-2 px-4 w-full focus:outline-none hover:bg-pink rounded">
              Checkout
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-auto"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </Link>
          <p className="text-xs text-gray-500 mt-3">
            Literally you probably haven't heard of them jean shorts.
          </p>
        </div>
      ) : (
        <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
          <h2 className="mb-1 text-sm font-medium tracking-widest uppercase title-font">
            {plan.name}
          </h2>
          <h1 className="flex items-center pb-4 mb-4 text-5xl leading-none text-gray-900 border-b border-gray-200">
            {plan.toggleCycle ? (
              <span>${plan.cost_ann.toFixed(2)}</span>
            ) : (
              <span>${plan.cost_mon.toFixed(2)}</span>
            )}
            {plan.toggleCycle ? (
              <BillingCycle cycle="/yr" />
            ) : (
              <BillingCycle cycle="/mo" />
            )}
          </h1>
          {features.map((entry) => {
            return <Feature key={entry} title={entry} />;
          })}
          <PricingTableButton />
          <p className="text-xs text-gray-500 mt-3">
            Literally you probably haven't heard of them jean shorts.
          </p>
        </div>
      )}
    </div>
  );
}

export default Package;
