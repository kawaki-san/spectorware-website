import Link from "next/link";
import { motion } from "framer-motion";
import styles from "../../styles/TLDContainer.module.css";

interface Tld {
  tld: string;
  price: number;
  styler?: string;
  path: string;
}

const easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: easing,
    },
  },
};

function TLDContainer(tld: Tld) {
  return (
    <Link href={tld.path}>
      <motion.div
        exit={{ opacity: 0 }}
        initial="initial"
        animate="animate"
        variants={fadeInUp}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={
          styles["tld-container"] +
          " absolute w-3/12 sm:w-2/12 lg:w-2/12 2xl:w-48 rounded-md shadow-2xl flex flex-col items-center justify-center hover:cursor-pointer hover:border hover:border-gray-50 select-none " +
          tld.styler
        }
      >
        <h1 className="text-accent text-xl md:text-4xl font-black underline">
          {tld.tld}
        </h1>
        <h2 className=" text-xs md:text-xl">${tld.price}/yr</h2>
      </motion.div>
    </Link>
  );
}

export default TLDContainer;
