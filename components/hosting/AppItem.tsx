import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { AppList } from "../../global";
library.add(fab);
function AppItem(apps: AppList) {
  return (
    <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
      <div className="rounded-lg h-64 overflow-hidden text-8xl md:text-7xl xl:text-9xl text-center hover:text-accent">
        <FontAwesomeIcon icon={["fab", apps.icon]} size="2x" />
      </div>
      <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
        {apps.title}
      </h2>
      <p className="text-base leading-relaxed mt-2">{apps.description}</p>
    </div>
  );
}

export default AppItem;
