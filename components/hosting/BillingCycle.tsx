interface PricingPlan {
  cycle: string;
}

function PricingPlan(plan: PricingPlan) {
  return (
    <span className="ml-1 text-lg font-normal text-gray-500">{plan.cycle}</span>
  );
}

export default PricingPlan;
