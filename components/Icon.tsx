import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/fontawesome-common-types";

interface FontIcon {
  icon_name: string;
}

function Icon(my_icon: FontIcon) {
  return (
    <div className=" inline-blockz h-10 w-24 border-2s border-blackx m-2 opacity-40 hover:opacity-100 transition-opacity cursor-pointer">
      <FontAwesomeIcon
        icon={["fab", my_icon.icon_name as IconName]}
        scale={1.2}
      />
    </div>
  );
}

export default Icon;
