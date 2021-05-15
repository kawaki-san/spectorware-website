import Rectangle from "../components/Rectangle";
import slider from "../styles/Slider.module.css";

function Slider() {
  return (
    <div>
      <div className={slider["slider-container"]}>
        <div className={slider.fast}>
          <Rectangle />
          <Rectangle />
          <Rectangle />
          <Rectangle />
          <Rectangle />
          <Rectangle />
          <Rectangle />
          <Rectangle />
          <Rectangle />
          <Rectangle />
          <Rectangle />
          <Rectangle />
          <Rectangle />
          <Rectangle />
          <Rectangle />
          <Rectangle />
          <Rectangle />
          <Rectangle />
          <Rectangle />
          <Rectangle />
          <Rectangle />
          <Rectangle />
          <Rectangle />
          <Rectangle />
          <Rectangle />
        </div>
      </div>
      <div className={slider["slider-container"]}>
        <div className={slider.slow}>
          <Rectangle />
          <Rectangle />
          <Rectangle />
          <Rectangle />
          <Rectangle />
          <Rectangle />
          <Rectangle />
          <Rectangle />
          <Rectangle />
          <Rectangle />
          <Rectangle />
          <Rectangle />
          <Rectangle />
          <Rectangle />
          <Rectangle />
          <Rectangle />
          <Rectangle />
          <Rectangle />
          <Rectangle />
          <Rectangle />
          <Rectangle />
          <Rectangle />
          <Rectangle />
          <Rectangle />
          <Rectangle />
          <Rectangle />
        </div>
      </div>
    </div>
  );
}

export default Slider;
