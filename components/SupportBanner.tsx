import styles from "../styles/SupportBanner.module.css";
function SupportBanner() {
  return (
    <section className={styles.darkbg + " text-center text-gray-50"}>
      <p className=" py-5">
        Need assistance? Send us an email at{" "}
        <a
          href="mailto:support@spectorware.com"
          className="underline text-accent"
        >
          support@spectorware.com
        </a>
      </p>
    </section>
  );
}

export default SupportBanner;
