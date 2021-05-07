import NavHeader from "../NavHeader";
import CustomHead from "./CustomHead";

function PageLayout({ children }: any) {
  return (
    <div>
      <CustomHead />
      <NavHeader />
      <div className="container">{children}</div>
    </div>
  );
}

export default PageLayout;
