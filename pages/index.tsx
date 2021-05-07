import styles from "../styles/Home.module.css";
function index() {
  return (
    <div className=" flex flex-col w-full bg-yellow-300 h-screen items-center justify-center">
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
        <div
          className={
            styles.glass +
            " absolute bottom-32 sm:bottom-0 h-1/5 w-11/12 bg-black"
          }
        ></div>
      </div>
    </div>
  );
}

export default index;
