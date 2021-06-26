import Icon from "./Icon";
import slider from "../styles/Slider.module.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faSplat } from "./icons/custom";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
library.add(fab);

function Slider() {
  return (
    <div>
      <div className={slider["slider-container"]}>
        <div className={slider.fast}>
          <Icon icon_name="git" />
          <Icon icon_name="cpanel" />
          <Icon icon_name="wordpress" />
          <Icon icon_name="node" />
          <Icon icon_name="joomla" />
          <Icon icon_name="php" />
          <Icon icon_name="cloudflare" />
          <Icon icon_name="laravel" />
          <Icon icon_name="drupal" />
          <Icon icon_name="html5" />
          <Icon icon_name="react" />
          <Icon icon_name="vuejs" />
          <Icon icon_name="angular" />
          {/* <Icon icon_name="splat" /> */}
        </div>
      </div>
      <div className={slider["slider-container"]}>
        <div className={slider.slow}>
          <Icon icon_name="git" />
          <Icon icon_name="cpanel" />
          <Icon icon_name="wordpress" />
          <Icon icon_name="node" />
          <Icon icon_name="joomla" />
          <Icon icon_name="php" />
          <Icon icon_name="cloudflare" />
          <Icon icon_name="laravel" />
          <Icon icon_name="drupal" />
          <Icon icon_name="html5" />
          <Icon icon_name="react" />
          <Icon icon_name="vuejs" />
          <Icon icon_name="angular" />
          {/* <Icon icon_name="splat" /> */}
          <Icon icon_name="git" />
          <Icon icon_name="cpanel" />
          <Icon icon_name="wordpress" />
          <Icon icon_name="node" />
          <Icon icon_name="joomla" />
          <Icon icon_name="php" />
          <Icon icon_name="cloudflare" />
          <Icon icon_name="laravel" />
          <Icon icon_name="drupal" />
          <Icon icon_name="html5" />
          <Icon icon_name="react" />
          <Icon icon_name="vuejs" />
        </div>
      </div>
    </div>
  );
}

export default Slider;
