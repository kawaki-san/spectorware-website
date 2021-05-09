import NavHeader from "../NavHeader";
import CustomHead from "./CustomHead";

function PageLayout({ children }: any) {
  return (
    <div className=" overflow-x-hidden">
      <CustomHead />
      <NavHeader />
      <div>{children}</div>
    </div>
  );
}

export default PageLayout;
