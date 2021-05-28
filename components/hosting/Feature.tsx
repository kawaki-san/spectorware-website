interface Entry {
  title: string;
}
function Feature(feature: Entry) {
  return (
    <p className="flex items-center mb-2 text-gray-600">
      <span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-400 rounded-full">
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.5"
          className="w-3 h-3"
          viewBox="0 0 24 24"
        >
          <path d="M20 6L9 17l-5-5"></path>
        </svg>
      </span>
      {feature.title}
    </p>
  );
}

export default Feature;
