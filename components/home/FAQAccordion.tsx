import { AccordionEntry } from "../../global";
import SectionTitle from "../../components/SectionTitle";
import Accrdion from "../../components/Accrdion";
import styles from "../../styles/SupportBanner.module.css";

function FAQAccordion() {
  let FAQ1: AccordionEntry = {
    question: "How can I download a backup of my site?",
    answer:
      "Please login to your control panel and create a full backup. This may take a few minutes to generate a tar.gz file that will have all your site, email, database and settings. Once the backup is created, you can download it using ftp from your account home directory. You can also download partial backups of your home directory or databases from the control panel.",
  };
  let FAQ2: AccordionEntry = {
    question: "Do you have curl installed in your php?",
    answer: "Yes, we do.",
  };
  let FAQ3: AccordionEntry = {
    question: "Where do I upload my website files?",
    answer:
      "To upload your 'homepage' or website materials, the stuff you actually want the world to see, upload that into the 'public_html' directory. You can of course create other sub directories and files there as well which will all be web accessible. /public_html - This is where your site files will go. /public_ftp - Files for your anonymous FTP. /www - same as your public_html directory",
  };
  let FAQ4: AccordionEntry = {
    question: "Do you support Wordpress sites?",
    answer: "Yes, we do.",
  };
  let FAQ5: AccordionEntry = {
    question: "I uploaded my page but it's not working!",
    answer:
      "Make sure that you are uploading to the public_html or www folder.  Only the files placed within these folders will be viewable by the public.",
  };
  return (
    <div className={styles.darkbg + " text-gray-50"}>
      <SectionTitle
        comment="Got some questions?"
        title="Readily available knowledgebase"
      />
      <Accrdion entries={[FAQ1, FAQ2, FAQ3, FAQ4, FAQ5]} />
    </div>
  );
}

export default FAQAccordion;
