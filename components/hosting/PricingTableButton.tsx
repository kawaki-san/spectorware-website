import Link from "next/link";

function PricingTableButton() {
  return (
    <Link href="/">
      <a className="flex items-center mt-auto text-white bg-pink border-0 py-2 px-4 w-full focus:outline-none hover:bg-pink rounded">
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
      </a>
    </Link>
  );
}

export default PricingTableButton;
