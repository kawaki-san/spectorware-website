interface TLD {
  name: string;
  price: number;
}

function TLDPrice(tld: TLD) {
  return (
    <div className="w-1/2 text-center 2xl:w-1/4">
      <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black">
        .<span className="text-accent">{tld.name}</span>
      </h1>
      <p className="pt-1">${tld.price} per year</p>
    </div>
  );
}

export default TLDPrice;
