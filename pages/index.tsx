import Link from "next/link";
import SectionTitle from "../components/SectionTitle";
import ServiceEntry from "../components/ServiceEntry";
import Slider from "../components/Slider";
import TLDContainer from "../components/TLDContainer";
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
              " pb-11 font-black text-white text-center absolute text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl z-10"
            }
          >
            Are you <span>online?</span>
          </h1>
          <TLDContainer
            path="/"
            tld=".com"
            price={14}
            styler="right-0 mb-28 lg:right-24 xl:right-40 2xl:right-72 "
          />
          <TLDContainer
            path="/"
            tld=".org"
            price={15}
            styler="top-48 left-0 right-0 m-auto xs:top-36 sm:top-10 md:top-14 lg:top-12 xl:top-14"
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
      </div>
      <section>
        <div className="container text-center">
          <SectionTitle
            comment="Always there for you"
            title="There is no limit"
          />
          <div className="w-full flex flex-col  justify-center flex-wrap pt-2 text-left px-5 sm:flex-row">
            <ServiceEntry
              title="Create your own"
              body="Easily setup your website on our platform with our wide range of hosting
            and domain options. Whether you want a business email, e-commerce shop
            or something in-between. We've got you covered."
            />
            <ServiceEntry
              title="Let us help"
              body="Is your schedule too full? Do you simply wish to focus on the non-technical aspects of your business? Allow any of our technical consultants to set things up for you."
            />
            <ServiceEntry
              title="Peace of mind"
              body="Keep your mind at ease knowing that your digital presence is fully secured and regularly backed up. Free SSL certificates and checks by our experts will keep your data safe from hackers."
            />
          </div>
        </div>
      </section>
      <section className="sliders mt-4 mb-4">
        <Slider />
      </section>
      <section className={styles.pink_section + "  w-screen h-1/2"}>
        <div className="container text-center px-5">
          <SectionTitle
            comment="Like all things on the web..."
            title="It starts with a domain name"
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
          <p className="pb-4">
            Got one? You might be looking to{" "}
            <span className="text-accent font-medium underline">
              <Link href="/">transfer</Link>
            </span>{" "}
            to us.
          </p>
        </div>
      </section>
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

      <section className={styles.banner + " pt-6"}>
        <div className="container">
          <p className="font-semibold">We love to see our partners grow.</p>
          <div className="flex flex-row">
            <div className="w-1/2">
              <Link href="/">
                <div className="flex items-center cursor-pointer pt-3">
                  <svg
                    className="hidden h-10 md:block"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M42.1962 11.4298C42.1963 11.4371 42.1964 11.4435 42.1966 11.4508C41.9032 11.7405 41.6122 12.0326 41.3155 12.3191C40.9536 12.6679 40.586 13.0127 40.2208 13.3591C40.1596 13.4172 40.0976 13.4762 40.0362 13.5343L39.992 13.4882C40.6273 12.3524 39.4964 11.3284 39.4964 11.3284L39.4915 11.3237C39.513 11.3032 39.5337 11.2835 39.5552 11.2631C39.3841 11.0357 39.2204 10.8139 39.0512 10.5953C38.1612 9.44848 37.1772 8.37635 36.0705 7.40604C34.606 6.12148 32.9817 5.04894 31.1706 4.2275C29.4237 3.43494 27.5855 2.9098 25.6615 2.64561C24.3202 2.46172 22.9701 2.39652 21.6152 2.45558C18.4551 2.59227 15.4185 3.24008 12.5154 4.42386C12.4376 4.45564 12.3599 4.48822 12.2813 4.52075C12.2757 4.52244 12.2685 4.52258 12.2545 4.50908C12.587 4.35912 12.9162 4.20116 13.2529 4.05837C15.0652 3.28948 16.9456 2.714 18.8924 2.3271C20.6881 1.97057 22.5049 1.79436 24.3402 1.83402C27.5 1.90297 30.4992 2.57666 33.3108 3.93453C35.0365 4.76769 36.6015 5.81126 38.036 7.02931C39.5546 8.3187 40.8859 9.76325 42.0913 11.3112C42.1234 11.3526 42.161 11.3908 42.1962 11.4298Z"
                      fill="url(#paint0_linear)"
                    />
                    <path
                      d="M39.9921 13.4882L40.0363 13.5343C39.123 14.3999 38.2097 15.2655 37.2988 16.1343C37.119 16.3054 36.9547 16.4892 36.7664 16.6847C36.6108 16.412 36.4729 16.1841 36.3486 15.9496C35.5925 14.521 34.5895 13.2556 33.3958 12.1228C31.1489 9.99147 28.473 8.58653 25.3022 8.0403C24.0103 7.81778 22.7071 7.75999 21.3944 7.83457C19.4194 7.94768 17.5074 8.34541 15.6352 8.9305C14.3475 9.33208 13.0964 9.81869 11.8811 10.3806C11.6792 10.4746 11.5049 10.6279 11.3327 10.7691C10.5907 11.379 9.97257 12.0799 9.55322 12.9206C8.90658 14.2162 8.97506 15.4983 9.65536 16.7619C10.0821 17.5533 10.6669 18.2343 11.3332 18.8586C12.5619 20.0111 13.9839 20.9253 15.4757 21.7513C17.1951 22.7032 18.9946 23.5071 20.8333 24.2346C22.8204 25.0213 24.6664 26.0269 26.3728 27.2555C27.5455 28.0999 28.6059 29.0484 29.465 30.1811C30.0774 30.9884 30.5417 31.86 30.7686 32.8325C31.0496 34.0381 30.8971 35.2001 30.3511 36.3208C30.0331 36.973 29.6077 37.5597 29.109 38.1024C29.09 38.1236 29.0717 38.1449 29.0535 38.1661C29.0462 38.1614 29.0388 38.1566 29.0307 38.1511C29.0528 38.1185 29.0749 38.086 29.0979 38.0534C29.6259 37.3127 30.0484 36.5268 30.2722 35.6566C30.599 34.3849 30.4113 33.1739 29.7874 32.016C29.3466 31.1973 28.7508 30.4841 28.0608 29.8369C26.7193 28.5796 25.16 27.5996 23.5065 26.7372C22.2763 26.0961 20.9819 25.5913 19.6749 25.1053C17.5068 24.3003 15.4078 23.3596 13.4242 22.2067C12.2653 21.5331 11.1658 20.7844 10.1813 19.8986C9.19749 19.0136 8.3663 18.0248 7.85067 16.829C7.48275 15.9779 7.32244 15.0939 7.40358 14.1766C7.48406 13.2714 7.78561 12.4283 8.26299 11.64C8.89313 10.5995 9.72394 9.7173 10.7499 9.0025C10.999 8.82878 11.2998 8.71638 11.5835 8.58808C13.3822 7.77185 15.2378 7.0991 17.1737 6.6228C18.5535 6.28277 19.9535 6.05692 21.3781 5.97105C23.162 5.8631 24.9273 5.97794 26.6676 6.36499C29.0446 6.8936 31.1869 7.87399 33.104 9.28108C34.6934 10.4469 36.0406 11.8202 37.1505 13.3969C37.1686 13.4225 37.1891 13.4472 37.2146 13.4815C37.9736 12.7617 38.7286 12.0468 39.4916 11.3237L39.4965 11.3284C39.4965 11.3284 40.6273 12.3524 39.9921 13.4882Z"
                      fill="url(#paint1_linear)"
                    />
                    <path
                      d="M40.1587 31.1979C40.8927 32.9382 40.7339 34.6291 39.7914 36.2661C39.184 37.3193 38.354 38.203 37.3436 38.9353C37.1201 39.0966 36.8557 39.2117 36.6001 39.3291C34.7327 40.189 32.8033 40.8951 30.787 41.3879C29.2248 41.7701 27.6395 42.0042 26.0241 42.0565C23.177 42.1476 20.4611 41.6569 17.8982 40.4858C16.4272 39.8134 15.0955 38.9528 13.8871 37.9251C12.7204 36.933 11.7028 35.8235 10.839 34.5908C10.825 34.5708 10.8086 34.5517 10.784 34.5206C10.0043 35.2601 9.22862 35.9955 8.44496 36.7382L8.4354 36.7456C8.27705 36.5019 7.61888 35.3767 8.18101 34.2606V34.2598C9.17944 33.3123 10.1787 32.3656 11.1772 31.419C11.1978 31.3993 11.221 31.382 11.2545 31.3542C11.367 31.5517 11.481 31.7396 11.583 31.9333C12.179 33.0594 12.915 34.0988 13.7925 35.0514C15.6825 37.1024 17.9554 38.6341 20.7258 39.4918C21.787 39.82 22.8741 40.0407 23.9882 40.1238C24.6356 40.1717 25.2868 40.1978 25.9359 40.1933C26.81 40.1872 27.6781 40.0964 28.5415 39.9654C31.2091 39.5608 33.7203 38.7165 36.1374 37.6099C36.3778 37.5 36.5798 37.3076 36.7822 37.1353C37.4148 36.5987 37.9495 35.9887 38.3425 35.2782C39.0711 33.962 39.0714 32.641 38.383 31.3147C37.9756 30.5302 37.4087 29.8529 36.7602 29.2324C35.6227 28.1432 34.3085 27.2669 32.9245 26.4756C31.1363 25.4538 29.257 24.597 27.3283 23.8353C25.5359 23.1273 23.8459 22.2557 22.2685 21.1953C20.9615 20.3166 19.7602 19.3315 18.7775 18.1312C18.1175 17.3238 17.5928 16.4499 17.3068 15.4629C16.8722 13.9586 17.109 12.5342 17.9201 11.1814C18.2154 10.6893 18.5702 10.2373 18.9892 9.82489C18.9631 9.86154 18.9379 9.89819 18.9118 9.93485C18.4707 10.5517 18.1002 11.2014 17.8572 11.9097C17.3015 13.5298 17.5694 15.0469 18.5053 16.4794C19.0991 17.3878 19.865 18.155 20.7209 18.8507C22.1416 20.0036 23.7345 20.9105 25.401 21.7155C26.3755 22.1861 27.4016 22.5415 28.4144 22.9261C30.5341 23.7318 32.5965 24.6473 34.5426 25.7764C35.7853 26.4972 36.9598 27.3013 37.997 28.2686C38.911 29.12 39.6819 30.0661 40.1587 31.1979Z"
                      fill="url(#paint2_linear)"
                    />
                    <path
                      d="M8.43539 36.7456L8.44495 36.7382C8.55679 36.8882 8.66372 37.0326 8.77228 37.1763C9.65517 38.3409 10.6314 39.4325 11.7336 40.4231C13.2712 41.8041 14.987 42.9504 16.9163 43.8129C18.6387 44.5824 20.4445 45.0967 22.3353 45.3533C23.3187 45.4867 24.306 45.5579 25.3004 45.5606C28.765 45.5679 32.087 44.9159 35.2787 43.6627C35.4287 43.6041 35.5769 43.539 35.726 43.4772C35.7276 43.4764 35.7317 43.4803 35.7561 43.4937C35.3081 43.6904 34.8779 43.8911 34.437 44.0716C32.549 44.8464 30.5919 45.4157 28.5664 45.7747C27.458 45.9714 26.3411 46.0931 25.2145 46.1457C23.049 46.2463 20.918 46.052 18.8211 45.5459C16.2582 44.9272 13.929 43.8552 11.8071 42.3897C9.81792 41.0152 8.1128 39.3729 6.60183 37.5511C6.35644 37.2546 6.11986 36.9532 5.87845 36.6551C5.85708 36.6279 5.82933 36.6058 5.80402 36.5819C5.80378 36.5682 5.80359 36.5537 5.80341 36.54C5.97117 36.3747 6.13734 36.2078 6.30755 36.0448C6.79837 35.5749 7.29 35.1064 7.78242 34.6381C7.91526 34.512 8.04815 34.3858 8.181 34.2606C7.61887 35.3767 8.27705 36.5019 8.43539 36.7456Z"
                      fill="url(#paint3_linear)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="29.2811"
                        y1="7.21134"
                        x2="3.35049"
                        y2="22.1824"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#DA4357" />
                        <stop offset="0.185366" stopColor="#DA4357" />
                        <stop offset="1" stopColor="#f3f4f6" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear"
                        x1="27.5589"
                        y1="19.1595"
                        x2="-0.849167"
                        y2="35.5609"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#DA4357" />
                        <stop offset="0.185366" stopColor="#DA4357" />
                        <stop offset="1" stopColor="#f3f4f6" />
                      </linearGradient>
                      <linearGradient
                        id="paint2_linear"
                        x1="23.8582"
                        y1="26.8736"
                        x2="-4.42725"
                        y2="43.2042"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#DA4357" />
                        <stop offset="0.185366" stopColor="#DA4357" />
                        <stop offset="1" stopColor="#f3f4f6" />
                      </linearGradient>
                      <linearGradient
                        id="paint3_linear"
                        x1="21.868"
                        y1="38.9352"
                        x2="-4.07184"
                        y2="53.9115"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#DA4357" />
                        <stop offset="0.185366" stopColor="#DA4357" />
                        <stop offset="1" stopColor="#f3f4f6" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <a className="text-lg pr-8 font-semibold tracking-widest hover:text-black text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline">
                    SpectorWare
                  </a>
                </div>
              </Link>
            </div>
            <div className="w-1/2">
              <h3 className="text-center uppercase font-semibold tracking-widest text-xs pb-4">
                Leave it to the experts? No problem. Get in touch.
              </h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default index;
