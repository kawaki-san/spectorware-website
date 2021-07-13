import Head from "next/head";
import { config, dom } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
interface MetaInfo {
  page_title?: string;
  page_description?: string;
  page_keywords?: string;
}

function CustomHead(meta: MetaInfo) {
  return (
    <Head>
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      <meta name="keywords" content={meta.page_keywords} />
      <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={meta.page_description} />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <link
        rel="shortcut icon"
        href="/7237492031/favicon.svg"
        type="image/x-icon"
      />
      <title>{meta.page_title}</title>
      <style>{dom.css()}</style>
    </Head>
  );
}

CustomHead.defaultProps = {
  page_title: "Web Hosting | SpectorWare",
  page_description:
    "Get your website live in just a few clicks. Need a domain name? Fast web hosting? An intuitive site builder? SpectorWare has got you covered.",
  page_keywords:
    "websites, hosting, domains, sitebuilder, free sitebuilder, cheap domains",
};

export default CustomHead;
