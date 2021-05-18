import FooterColumn from "./FooterColumn";

interface Entry {
  path: string;
  text: string;
}

function Footer() {
  const date = new Date().getFullYear();
  let sw1: Entry = {
    path: "/",
    text: "Home",
  };
  let sw2: Entry = {
    path: "/domains",
    text: "Domains",
  };
  let sw3: Entry = {
    path: "/hosting",
    text: "Hosting",
  };
  let sw4: Entry = {
    path: "/",
    text: "Client Area",
  };
  let sw5: Entry = {
    path: "/",
    text: "Contact",
  };
  let m1: Entry = {
    path: "/",
    text: "Website Development",
  };
  let m2: Entry = {
    path: "/",
    text: "System Development",
  };
  let m3: Entry = {
    path: "/",
    text: "App Development",
  };
  let m4: Entry = {
    path: "/",
    text: "Branding",
  };

  let s1: Entry = {
    path: "/",
    text: "Product Support",
  };
  let s2: Entry = {
    path: "/",
    text: "Consultation",
  };
  let s3: Entry = {
    path: "/",
    text: "FAQs",
  };
  let s4: Entry = {
    path: "/",
    text: "Report Abuse",
  };
  return (
    <section className="px-5 bg-gray-50 pt-6">
      <div className="container flex flex-row flex-wrap justify-center pb-6">
        <FooterColumn heading="Spectorware" entry={[sw1, sw2, sw3, sw4, sw5]} />
        <FooterColumn heading="More" entry={[m1, m2, m3, m4]} />
        <FooterColumn heading="Support" entry={[s1, s2, s3, s4]} />
      </div>
      <hr />
      <div className="footer-text font-medium text-xs py-1">
        Copyright &copy; {date} SpectorWare. All rights reserved.
      </div>
    </section>
  );
}

export default Footer;
