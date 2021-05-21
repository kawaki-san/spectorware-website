import { Component, useState } from "react";
import SectionTitle from "../components/SectionTitle";
import ToggleSwitch from "../components/ToggleSwitch";

function hosting() {
  let [checked, setChecked] = useState(false);

  return (
    <div>
      <SectionTitle
        comment="No contracts, No surprise fees"
        title="Simple, transparent pricing"
      ></SectionTitle>
      <div className="container px-5 py-24 mx-auto">
        <div className="bg-gray-50 rounded-lg">
          <div className="flex items-center justify-center w-full mb-12">
            <ToggleSwitch
              checked={checked}
              onChange={setChecked}
              id="annual-mon"
              option_labels={["Monthly", "Yearly"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default hosting;
