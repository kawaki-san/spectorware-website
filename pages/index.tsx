import Link from "next/link";
import Hero from "../components/home/Hero";
import SectionTitle from "../components/SectionTitle";
import ServiceEntry from "../components/ServiceEntry";
import Slider from "../components/Slider";

import styles from "../styles/Home.module.css";

function index() {
  return (
    <div className="home">
      <Hero />
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
      <section className="sliders mt-4 mb-4 w-screen">
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
    </div>
  );
}

export default index;
