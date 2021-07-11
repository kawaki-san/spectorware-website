import Rectangle from "../components/Rectangle";
import slider from "../styles/Slider.module.css";
import LiteSpeedIcon from "./icons/LiteSpeed";
import MariaDBIcon from "./icons/MariaDB";

function Slider() {
  return (
    <div>
      <div className={slider["slider-container"]}>
        <div className={slider.fast}>
          <Rectangle icon="cpanel" />
          <Rectangle icon="git" />
          <Rectangle icon="laravel" />
          <Rectangle icon="node-js" />
          <Rectangle icon="cloudflare" />
          <Rectangle icon="react" />
          <Rectangle icon="drupal" />
          <Rectangle icon="joomla" />
          <Rectangle icon="wordpress" />
          <MariaDBIcon icon="jetBackup" />
          <Rectangle icon="vuejs" />
          <Rectangle icon="python" />
          <LiteSpeedIcon icon="cpanel" />
          <Rectangle icon="js" />
          <Rectangle icon="npm" />
          <Rectangle icon="php" />
          <Rectangle icon="weebly" />
          <Rectangle icon="cpanel" />
          <Rectangle icon="git" />
          <Rectangle icon="laravel" />
          <Rectangle icon="node-js" />
          <Rectangle icon="cloudflare" />
          <Rectangle icon="react" />
          <Rectangle icon="drupal" />
          <Rectangle icon="joomla" />
          <Rectangle icon="wordpress" />
          <Rectangle icon="vuejs" />
          <Rectangle icon="python" />
        </div>
      </div>
      {/* <div className={slider["slider-container"]}>
        <div className={slider.slow}>
          <LiteSpeedIcon icon="cpanel" />
          <Rectangle icon="git" />
          <Rectangle icon="laravel" />
          <Rectangle icon="node-js" />
          <Rectangle icon="cloudflare" />
          <Rectangle icon="react" />
          <Rectangle icon="drupal" />
          <Rectangle icon="joomla" />
          <Rectangle icon="wordpress" />
          <MariaDBIcon icon="jetBackup" />
          <Rectangle icon="vuejs" />
          <Rectangle icon="python" />
          <Rectangle icon="paypal" />
          <Rectangle icon="js" />
          <Rectangle icon="npm" />
          <Rectangle icon="php" />
          <Rectangle icon="weebly" />
          <Rectangle icon="cpanel" />
          <Rectangle icon="git" />
          <Rectangle icon="laravel" />
          <Rectangle icon="node-js" />
          <Rectangle icon="cloudflare" />
          <Rectangle icon="react" />
          <Rectangle icon="drupal" />
          <Rectangle icon="joomla" />
          <Rectangle icon="wordpress" />
          <Rectangle icon="vuejs" />
          <Rectangle icon="python" />
        </div>
      </div> */}
    </div>
  );
}

export default Slider;
