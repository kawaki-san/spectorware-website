import SectionTitle from "../components/SectionTitle";
import Package from "../components/hosting/Package";
import { gql } from "@apollo/client";
import client from "../api/apollo-client";
import { useState } from "react";
function hosting({ plan }: PackageList) {
  const [annual, setAnnual] = useState(false);

  return (
    <div>
      <SectionTitle
        comment="No contracts, No surprise fees"
        title="Simple, transparent pricing"
      />
      <div className="container px-5 py-20 mx-auto overflow-hidden">
        <div className="flex flex-col text-center w-full mb-20">
          <div className="flex mx-auto border-2 border-pink-500 rounded overflow-hidden mt-6">
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
        <div className="flex flex-wrap -m-4 flex flex-row justify-center">
          {plan.map((pack) => (
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
            />
          ))}
        </div>
      </div>
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
