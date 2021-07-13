import SectionTitle from "../components/SectionTitle";
import Package from "../components/hosting/Package";
import { gql } from "@apollo/client";
import client from "../api/apollo-client";
import { useState } from "react";
import Features from "../components/hosting/Features";
import Head from "next/head";
import SupportedApps from "../components/hosting/SupportedApps";
import DeveloperTools from "../components/hosting/DeveloperTools";
import PromoBanner from "../components/PromoBanner";
import { HostingPackage, PackageList } from "../global";

function hosting({ plan }: PackageList) {
  const [annual, setAnnual] = useState(false);

  return (
    <div>
      <Head>
        <title>Hosting Plans | SpectorWare</title>
        <meta
          name="description"
          content="Web Hosting | WordPress Hosting | Business Hosting with free daily backups for up to 30 days."
        />
        <meta
          name="keywords"
          content="cheap domains, transfer domain, register domain, renew domain"
        />
      </Head>
      <section>
        <SectionTitle
          comment="No contracts, No surprise fees"
          title="Simple, transparent pricing"
        />
        <div className="container px-5 py-10 mx-auto overflow-hidden">
          <div className="flex flex-col text-center w-full mb-16">
            <div className="flex mx-auto border-2 border-pink-500 rounded overflow-hidden mt-2">
              <button
                className={
                  annual
                    ? "py-1 px-4 focus:outline-none"
                    : "py-1 px-4 bg-pink text-white focus:outline-none"
                }
                onClick={() => setAnnual(false)}
              >
                Monthly
              </button>
              <button
                className={
                  annual
                    ? "py-1 px-4 focus:outline-none bg-pink text-white"
                    : "py-1 px-4 focus:outline-none"
                }
                onClick={() => setAnnual(true)}
              >
                Annually
              </button>
            </div>
          </div>
          <div className="flex flex-wrap -m-4 flex-row justify-center">
            {plan.map((pack: HostingPackage) => (
              /*substring function removes the first dot eg .com becomes com 
               this is beacause the dot is already present and formatted differently in TLDPrice*/
              <Package
                key={pack.name}
                popular={pack.popular}
                cost_ann={pack.cost_ann}
                cost_mon={pack.cost_mon}
                databases={pack.databases}
                domains={pack.domains}
                mailboxes={pack.mailboxes}
                subdomains={pack.subdomains}
                storage={pack.storage}
                name={pack.name}
                toggleCycle={annual}
                quote={pack.quote}
                link={pack.link}
              />
            ))}
          </div>
        </div>
        <PromoBanner />
        <Features />
        <SupportedApps />
        <DeveloperTools />
      </section>
    </div>
  );
}

export default hosting;

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query packages {
        packages {
          name
          cost_mon
          cost_ann
          databases
          domains
          mailboxes
          subdomains
          popular
          storage
          quote
          link
        }
      }
    `,
  });

  return {
    props: {
      plan: data.packages,
    },
  };
}
