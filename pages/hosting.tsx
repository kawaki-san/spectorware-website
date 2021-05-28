import { useState } from "react";
import Feature from "../components/hosting/Feature";
import SectionTitle from "../components/SectionTitle";
import ToggleSwitch from "../components/ToggleSwitch";
import Link from "next/link";
import Package from "../components/hosting/Package";
function hosting() {
  let [checked, setChecked] = useState(false);
  let vortex1 = "2GB storage";
  let vortex2 = "1 Domain";
  let vortex3 = "20 Databases";
  let vortex4 = "15 Email Boxes";

  return (
    <div>
      <SectionTitle
        comment="No contracts, No surprise fees"
        title="Simple, transparent pricing"
      ></SectionTitle>
      <div className="container px-5 py-24 mx-auto">
        <div className="rounded-lg bg-gray-50">
          <div className="flex items-center justify-center w-full mb-12">
            {/* <div className="list">
              <ToggleSwitch
                checked={checked}
                onChange={setChecked}
                id="annual-mon"
                option_labels={["Monthly", "Yearly"]}
              />

              <Feature />
              <Feature />
              <Feature /> 
            </div> */}
            <Package
              name="Vortex"
              price_mon={1.2}
              price_ann={12.2}
              annual={true}
              features={[vortex1]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default hosting;
