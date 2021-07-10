import Link from "next/link";
import SectionTitle from "../../components/SectionTitle";
import styles from "../../styles/HostingFeatures.module.css";
import BackgroundFeatures from "./BackgroundFeatures";
function Features() {
  return (
    <section className={styles.darkbg + " text-gray-50 body-font"}>
      <div className="container text-center text-gray-50">
        <SectionTitle comment="What do you get?" title="Application Suite" />
        <div className=" px-5 py-10 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full shadow-2xl drop-shadow-2xl"
                src="/7237492031/softac-scrngrb.webp"
              />
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-transparent text-gray-400">
                  <img
                    src="/7237492031/softaculousbox.webp"
                    alt="softaculous icon"
                  />
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font uppercase mt-4 text-gray-100 text-lg">
                    Softaculous Apps Installer
                  </h2>
                  <div className="w-12 h-1 bg-pink rounded mt-2 mb-4"></div>
                  <p className="text-base ">
                    Installing applications has never been this easy
                  </p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-lg mb-4 text-gray-200">
                  A point and click auto-installer. Just as easy as it's
                  supposed to be. Browse a collection of hundreds of web
                  applications ready to install on your domain. Uninstallation
                  and upgrades are just as easy. Apps are categorised, for your
                  convienience. Filter all from Blogs, Portals, Forums, Wikis,
                  E-Commerce, RSS and more to find{" "}
                  <span className="italic">just</span> what you need.
                </p>
                <a className="text-accent inline-flex items-center">
                  <Link href="https://www.softaculous.com/demos">
                    View Demo
                  </Link>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-100">
                Behind the scenes
              </h1>
              <div className="h-1 w-20 bg-pink rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-200">
              Concerned about system bottlenecks? All our accounts are allocated
              with 2CPUs and an additional 2GB of RAM. What does that mean?
              Well, you should be able to host your site and have it perform as
              fast as it can without any strain to the system.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <BackgroundFeatures
              app_logo="https://dummyimage.com/720x400"
              app_name="Next Generation of Solid State Drives"
              feature_name="NVMe Storage"
              alt_logo="content"
              description="Fingerstache flexitarian street art 8-bit waistcoat. Distillery
          hexagon disrupt edison bulbche."
            />
            <BackgroundFeatures
              app_logo="https://dummyimage.com/720x400"
              feature_name="Secure your site with HTTPS"
              app_name="Free SSL Certificates"
              alt_logo="content"
              description="Fingerstache flexitarian street art 8-bit waistcoat. Distillery
          hexagon disrupt edison bulbche."
            />
            <BackgroundFeatures
              app_logo="https://dummyimage.com/720x400"
              app_name="Your site is always available"
              feature_name="DDoS Protection"
              alt_logo="content"
              description="Fingerstache flexitarian street art 8-bit waistcoat. Distillery
          hexagon disrupt edison bulbche."
            />
            <BackgroundFeatures
              app_logo="https://dummyimage.com/720x400"
              app_name="LiteSpeed and LSCache"
              feature_name="Highly Performant Websites"
              alt_logo="content"
              description="Fingerstache flexitarian street art 8-bit waistcoat. Distillery
          hexagon disrupt edison bulbche."
            />
          </div>
        </div>
      </section>
    </section>
  );
}

export default Features;
