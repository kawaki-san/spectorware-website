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
      <section
        className={styles.dark_section + " text-white w-screen h-1/2 mt-8"}
      >
        <div className="container p-6">
          <h3 className="text-center uppercase font-semibold tracking-widest text-xs pb-4">
            Under the hood
          </h3>
          <h1 className="text-center uppercase tracking-widest text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold pb-2">
            Powering SpectorWare Hosting
          </h1>
          <div className="under-the-hood flex flex-col w-full">
            <div className="w-1/2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              nesciunt libero, velit assumenda veniam molestias dignissimos,
              odit cupiditate aliquid recusandae, cum a totam vitae voluptatibus
              repellendus corporis ipsa? Obcaecati culpa doloremque adipisci
              eligendi id autem animi totam, voluptates eius vel ducimus
              architecto dolore exercitationem facilis. Non expedita doloribus
              perferendis, enim officia maxime porro cum unde, animi sunt ea
              nemo molestiae, ut recusandae. Dolor, doloremque illum quis culpa
              id veniam rem nisi sed cum quae voluptatem debitis delectus aut,
              ullam consectetur praesentium? Vitae amet alias fuga itaque sint
              consequuntur! Corrupti sint, atque nisi suscipit minima illo omnis
              corporis consequatur architecto blanditiis.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default index;
