import TLDContainer from "./TLDContainer";
import styles from "../../styles/Hero.module.css";
import { TLDList } from "../../global";

function Hero({ domains }: TLDList) {
  return (
    <section
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
            " pb-11 font-black text-white text-center absolute text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl z-10"
          }
        >
          Are you <span>online?</span>
        </h1>

        <TLDContainer
          path="/"
          tld={domains[0].name}
          price={domains[0].cost}
          styler="right-0 mb-28 lg:right-24 xl:right-40 2xl:right-72 "
        />
        <TLDContainer
          path="/"
          tld={domains[1].name}
          price={domains[1].cost}
          styler="top-48 left-0 right-0 m-auto xs:top-36 sm:top-10 md:top-14 lg:top-12 xl:top-14"
        />
        <TLDContainer
          path="/"
          tld={domains[2].name}
          price={domains[2].cost}
          styler="left-0 mb-20 lg:left-24 xl:left-40 2xl:left-72 "
        />

        <div
          className={
            styles.glass +
            " shadow-2xl absolute bottom-32 sm:bottom-0 h-1/5 w-11/12 md:w-8/12 lg:w-1/2 rounded-lg border-2 border-gray-50 text-center px-2 flex flex-col items-center justify-evenly"
          }
        >
          <h2 className="text-xl lg:text-2xl xl:text-3xl font-semibold">
            Everything you need for your online{" "}
            <span className="font-black">journey</span>.
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
    </section>
  );
}

export default Hero;
