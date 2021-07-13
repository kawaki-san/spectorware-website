import Link from "next/link";
import styles from "../styles/PromoBanner.module.css";

function PromoBanner() {
  return (
    <div className="bg-gray-900 text-center py-4 lg:px-4">
      <div
        className="p-2 bg-pink-400 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
        role="alert"
      >
        <span
          className={
            styles.button +
            " flex rounded-full bg-green2-500 uppercase px-2 py-1 text-xs font-bold mr-3"
          }
        >
          PROMO
        </span>
        <span className=" mr-2 text-left flex-auto">
          Get 2 months free with 2MONF or 4MON50 (annual cycles) for hosting
          packages
        </span>
        <Link href="https://spectorware.com/whmcs/index.php?rp=/store/hosting-plans">
          <svg
            className="fill-current opacity-75 h-4 w-4 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default PromoBanner;
