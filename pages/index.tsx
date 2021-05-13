import Link from "next/link";
import SectionTitle from "../components/SectionTitle";
import Slider from "../components/Slider";
import styles from "../styles/Home.module.css";

function index() {
  return (
    <div className="home">
      <div
        className={
          styles.root +
          " container flex flex-col w-full h-screen items-center justify-center"
        }
      >
        <div
          className={
            styles.hero +
            " w-full h-full relative bg-contain bg-no-repeat bg-center flex flex-row items-center justify-center"
          }
        >
          <img
            src="/7237492031/9337378.webp"
            className={
              styles.img + " pb-11 hidden bg-red-500  w-full h-auto relative"
            }
          />
          <h1
            className={
              styles.heading +
              " pb-11 font-black text-white text-center absolute text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
            }
          >
            Are you <span>online?</span>
          </h1>
          <div
            className={
              styles.glass +
              " shadow-2xl absolute bottom-32 sm:bottom-0 h-1/5 w-11/12 md:w-8/12 lg:w-1/2 rounded-lg border-2 border-gray-50 text-center px-2 flex flex-col items-center justify-evenly"
            }
          >
            <h2 className="text-2xl sm:text-3xl font-semibold">
              If it's <span className="font-black">performance </span>you
              like...
            </h2>

            <div
              className={
                styles.button +
                " px-4 cursor-pointer rounded-lg border-transparent inline-flex hover:border-gray-100 border-2 shadow-sm"
              }
            >
              <svg
                className="h-4 mt-1"
                width="32"
                height="27"
                viewBox="0 0 32 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0)">
                  <path
                    d="M25.9596 7.92565H20.9055V4.62159C20.9055 2.18871 18.6425 0.216187 15.8514 0.216187C13.0603 0.216187 10.7974 2.18871 10.7974 4.62159V7.92565H5.74334L3.21631 26.6486H28.4866L25.9596 7.92565ZM12.0609 4.62159C12.0609 2.79996 13.7616 1.31754 15.8514 1.31754C17.9413 1.31754 19.642 2.79996 19.642 4.62159V7.92565H12.0609V4.62159ZM6.05795 24.4459L7.98986 10.1283H10.7974V11.7804C10.7974 12.0843 11.0804 12.3311 11.4291 12.3311C11.7779 12.3311 12.0609 12.0843 12.0609 11.7804V10.1283H19.642V11.7804C19.642 12.0843 19.925 12.3311 20.2737 12.3311C20.6225 12.3311 20.9055 12.0843 20.9055 11.7804V10.1283H23.713L25.6449 24.4459H6.05795Z"
                    fill="#F7F7FF"
                  />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect
                      width="30.3243"
                      height="26.4324"
                      fill="white"
                      transform="translate(0.689453 0.216187)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <p className="font-medium text-white text-sm">Shop Now</p>
            </div>
          </div>
        </div>
      </div>
      <section className={styles.dark_section + "  w-screen h-1/2 mt-8"}>
        <div className="container p-6 text-center">
          <SectionTitle
            comment=" First things first..."
            title="Your domain name awaits..."
          />
          <p>Don't have one yet? No problem. We'll find one for you.</p>
          <div className="p-4">
            <div className="flex w-full justify-center items-end">
              <div className="relative lg:w-3/4 xl:w-1/2 w-3/4">
                <input
                  type="text"
                  id="hero-field"
                  name="hero-field"
                  placeholder="mynewdomain"
                  className="w-full rounded font-medium text-gray-900 py-1 px-3 leading-8 duration-200 ease-in-out focus:border-pink-500 focus:ring focus:outline-none ring-pink-100 shadow-2xl"
                />
                <button
                  type="submit"
                  className="absolute right-0 top-0 mt-3 mr-4"
                >
                  <svg
                    className="text-gray-600 h-4 w-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    id="Capa_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 56.966 56.966"
                    width="512px"
                    height="512px"
                  >
                    <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <p>
            Got one? You might be looking to{" "}
            <span className="text-accent font-medium underline">
              <Link href="/">transfer</Link>
            </span>{" "}
            to us.
          </p>
        </div>
      </section>
      <section>
        <SectionTitle title="Why Spectorware?" comment="You were thinking..." />
      </section>
      <section className="sliders">
        <Slider />
      </section>
    </div>
  );
}

export default index;
