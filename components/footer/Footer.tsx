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
  let m1: Entry = {
    path: "/domains",
    text: "Domains",
  };
  let m2: Entry = {
    path: "/hosting",
    text: "Website Hosting",
  };
  let sw4: Entry = {
    path: "https://spectorware.com/whmcs/",
    text: "Client Area",
  };
  let sw5: Entry = {
    path: "https://spectorware.com/whmcs/contact.php",
    text: "Contact",
  };
  let s1: Entry = {
    path: "https://spectorware.com/whmcs/index.php?rp=/knowledgebase",
    text: "FAQs",
  };
  let s3: Entry = {
    path: "https://spectorware.com/whmcs/contact.php",
    text: "Submit Ticket",
  };
  let s4: Entry = {
    path: "https://spectorware.com/whmcs/contact.php",
    text: "Report Abuse",
  };
  return (
    <section className="px-5 bg-gray-50 pt-6">
      <div className="container ">
        <div className="flex flex-col sm:flex-row flex-wrap justify-center pb-6">
          <FooterColumn heading="Spectorware" entry={[sw1, sw4, sw5]} />
          <FooterColumn heading="Products" entry={[m1, m2]} />
          <FooterColumn heading="Support" entry={[s1, s3, s4]} />
        </div>
      </div>
      <hr />
      <div className="footer-text font-medium text-xs py-1">
        Copyright &copy; {date} SpectorWare. All rights reserved.
      </div>
    </section>
  );
}

export default Footer;
