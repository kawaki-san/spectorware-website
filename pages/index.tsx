import DomainFinder from "../components/DomainFinder";
import Hero from "../components/home/Hero";
import SectionTitle from "../components/SectionTitle";
import ServiceEntry from "../components/home/ServiceEntry";
import Slider from "../components/Slider";
import SupportBanner from "../components/SupportBanner";

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
      <DomainFinder />
      <SupportBanner />
    </div>
  );
}

export default index;
