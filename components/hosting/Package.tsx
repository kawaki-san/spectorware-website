import BillingCycle from "./BillingCycle";
import Feature from "./Feature";

interface Plan {
  name: string;
  price_mon: number;
  price_ann: number;
  annual: boolean;
  is_popular?: boolean;
  features: string[];
}

function Package(plan: Plan) {
  return (
    <div className="w-full p-4 xl:w-1/4 md:w-1/2">
      <div className="relative flex flex-col h-full p-6 overflow-hidden border-2 border-pink-500 rounded-lg">
        {plan.is_popular ? (
          <span className="absolute top-0 right-0 px-3 py-1 text-xs tracking-widest text-white rounded-bl bg-pink">
            POPULAR
          </span>
        ) : null}
        <h2 className="mb-1 text-sm font-medium tracking-widest uppercase title-font">
          {plan.name}
        </h2>
        <h1 className="flex items-center pb-4 mb-4 text-5xl leading-none text-gray-900 border-b border-gray-200">
          {plan.annual ? (
            <span>${plan.price_ann}</span>
          ) : (
            <span>${plan.price_mon}</span>
          )}
          {plan.annual ? (
            <BillingCycle cycle="/yr" />
          ) : (
            <BillingCycle cycle="/mo" />
          )}
        </h1>

        {plan.features.map((entry) => {
          return <Feature key={entry} title={entry} />;
        })}

        <button className="flex items-center w-full px-4 py-2 mt-auto text-white border-0 rounded bg-pink focus:outline-none hover:bg-pink-600">
          Button
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
        <p className="mt-3 text-xs text-gray-500">
          Literally you probably haven't heard of them jean shorts.
        </p>
      </div>
    </div>
  );
}

export default Package;
