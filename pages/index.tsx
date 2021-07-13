import DomainFinder from "../components/DomainFinder";
import Hero from "../components/home/Hero";
import SectionTitle from "../components/SectionTitle";
import ServiceEntry from "../components/home/ServiceEntry";
import Slider from "../components/Slider";
import SupportBanner from "../components/SupportBanner";
import { gql } from "@apollo/client";
import client from "../api/apollo-client";
import PromoBanner from "../components/PromoBanner";
import FAQAccordion from "../components/home/FAQAccordion";
import HomeCTA from "../components/home/HomeCTA";
import { FeaturedTLD, TLDList } from "../global";

function index({ domains }: TLDList) {
  function shuffle(array: FeaturedTLD[]) {
    var currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }
  return (
    <div className="home">
      <PromoBanner />
      <Hero domains={shuffle(domains)} />
      <section>
        <div className="container text-center">
          <SectionTitle
            comment="The Best of all worlds"
            title="We've got you covered"
          />
          <div className="w-full flex flex-col  justify-center flex-wrap pt-2 text-left px-5 sm:flex-row">
            <ServiceEntry
              title="Easy Setup"
              body="Get your website up and running in a few clicks. Pick from any of our hosting and domain options. Use our free website builder to build your site without even a single line of code."
            />
            <ServiceEntry
              title="Secure WordPress Hosting"
              body="Take advantage of our automatic virus scans and free SSL certificates and protect the data you serve or the data your visitors share with your site from interception."
            />
            <ServiceEntry
              title="Flexible Backups"
              body="Your account is automatically backed up daily for up to 30 days. However, you are also at the liberty of scheduling your own backup whenever you'd like."
            />
          </div>
        </div>
      </section>
      <section className="sliders mt-4 mb-4 w-screen">
        <Slider />
      </section>
      <HomeCTA />
      <SupportBanner />
      <DomainFinder />

      <FAQAccordion />
    </div>
  );
}
export default index;

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query tlds {
        tlds {
          name
          cost
          featured
        }
      }
    `,
  });

  return {
    props: {
      domains: data.tlds.slice(0, 6),
    },
  };
}
