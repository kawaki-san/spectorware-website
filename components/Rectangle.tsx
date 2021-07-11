import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName, library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faJetBackup } from "./icons/custom";
library.add(fab, faJetBackup);
interface Icon {
  icon: IconName;
}
function Rectangle(apps: Icon) {
  return (
    <div className=" inline-block h-10 w-24 border-2s border-blackx m-2 opacity-40 hover:opacity-100 transition-opacity cursor-pointer">
      <FontAwesomeIcon icon={["fab", apps.icon]} size="3x" />
    </div>
  );
}

export default Rectangle;
