import Footer from "../footer/Footer";
import NavHeader from "../NavHeader";
import CustomHead from "./CustomHead";

function PageLayout({ children }: any) {
  return (
    <div className=" overflow-x-hidden">
      <CustomHead />
      <NavHeader />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default PageLayout;
