import { BehindTheScenesFeature } from "../../global";
import styles from "../../styles/HostingFeatures.module.css";
function BackgroundFeatures(features: BehindTheScenesFeature) {
  return (
    <div className="xl:w-1/4 md:w-1/2 p-4">
      <div className={styles.lightdarkbg + " p-6 rounded-lg"}>
        <img
          className="h-40 rounded w-full object-contain object-center mb-6"
          src={features.app_logo}
          alt={features.alt_logo}
        />
        <h3 className="tracking-widest text-accent uppercase text-xs font-medium title-font">
          {features.app_name}
        </h3>
        <h2 className="text-lg text-gray-100 font-medium title-font mb-4">
          {features.feature_name}
        </h2>
        <p className="leading-relaxed text-base text-gray-200">
          {features.description}
        </p>
      </div>
    </div>
  );
}

export default BackgroundFeatures;
