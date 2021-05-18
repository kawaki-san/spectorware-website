import Head from "next/head";
import DomainFinder from "../components/DomainFinder";
import TLDPrice from "../components/domains/TLDPrice";
import SupportBanner from "../components/SupportBanner";
function domains() {
  return (
    <div>
      <Head>
        <title>Domains</title>
        <meta
          name="description"
          content="Well priced domains for purchase renewal or transfer with no hidden costs. Get an easy to use domain management system and create as many subdomains as you need as per your hosting package and needs."
        />
        <meta
          name="keywords"
          content="cheap domains, transfer domain, register domain, renew domain"
        />
      </Head>
      <DomainFinder />
      <section>
        <div className="pt-6 container px-5">
          <h3 className="text-center uppercase font-semibold tracking-widest text-xs pb-4">
            Something great awaits...
          </h3>
          <h1 className="text-center uppercase tracking-widest text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold pb-2">
            You want{" "}
            <span className="text-accent lowercase font-black">.more</span>?
          </h1>
          <h3 className="text-center uppercase font-semibold tracking-widest text-xs pb-4">
            We have something for everyone
          </h3>
          <p className="text-center w-full md:w-3/4 mx-auto">
            Our domains are well priced for purchase, renewal or transfer with
            no hidden costs. Our domain management system is easy to use and
            allows you to create as many subdomains as you need as per your
            hosting package and needs. Once you find the perfect domain name, we
            lock it to avoid any unauthorised transfers.
          </p>
        </div>
      </section>
      <section className="pt-6">
        <div className="container px-5">
          <div className="flex flex-row flex-wrap justify-center pb-6">
            <TLDPrice name="com" price={13.19} />
            <TLDPrice name="org" price={15.59} />
            <TLDPrice name="net" price={15.83} />
            <TLDPrice name="info" price={17.27} />
          </div>
        </div>
      </section>
      <SupportBanner />
    </div>
  );
}

export default domains;
