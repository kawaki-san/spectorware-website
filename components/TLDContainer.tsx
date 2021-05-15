import Link from "next/link";
import styles from "../styles/TLDContainer.module.css";

interface Tld {
  tld: string;
  price: number;
  styler?: string;
  path: string;
}

function TLDContainer(tld: Tld) {
  return (
    <Link href={tld.path}>
      <div
        className={
          styles["tld-container"] +
          " absolute w-3/12 sm:w-2/12 lg:w-2/12 2xl:w-48 rounded-md shadow-2xl flex flex-col items-center justify-center hover:cursor-pointer hover:border-pink-500 hover:ring hover:outline-none ring-pink-100 " +
          tld.styler
        }
      >
        <h1 className="text-accent text-xl md:text-4xl font-black underline">
          {tld.tld}
        </h1>
        <h2 className=" text-xs md:text-xl">${tld.price}/yr</h2>
      </div>
    </Link>
  );
}

export default TLDContainer;
