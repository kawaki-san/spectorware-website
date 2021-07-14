import Link from "next/link";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";
import { AccordionEntry } from "../global";

interface AccordionEntries {
  entries: AccordionEntry[];
}

export default function Accrdion(entries: AccordionEntries) {
  return (
    <Accordion className="mt-4 pb-10 mx-auto lg:w-2/3 w-full overflow-auto">
      <div>
        {entries.entries.map((entry) => {
          return (
            <AccordionItem key={entry.question}>
              <AccordionItemHeading>
                <AccordionItemButton>{entry.question} </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>{entry.answer}</p>
              </AccordionItemPanel>
            </AccordionItem>
          );
        })}
        <div className="pt-8 text-base text-center">
          Looking for something a little different? Checkout our{" "}
          <Link href="https://spectorware.com/whmcs/index.php?rp=/knowledgebase">
            <a className="text-accent hover:underline">knowledgebase.</a>
          </Link>
        </div>
      </div>
    </Accordion>
  );
}
