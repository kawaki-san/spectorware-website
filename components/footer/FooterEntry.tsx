import Link from "next/link";

interface Entry {
  path: string;
  text: string;
}

function FooterEntry(link: Entry) {
  return (
    <li className="hover:text-gray-800 pt-1">
      <Link href={link.path}>{link.text}</Link>
    </li>
  );
}

export default FooterEntry;
