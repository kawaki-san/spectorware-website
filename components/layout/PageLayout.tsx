import NavHeader from "../NavHeader";
import CustomHead from "./CustomHead";

function PageLayout({ children }: any) {
  return (
    <div>
      <CustomHead />
      <NavHeader />
      <main>{children}</main>
    </div>
  );
}

export default PageLayout;
