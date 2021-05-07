import Link from "next/link";
interface Entry {
  path: string;
  text: string;
}
function NavLink(link: Entry) {
  return (
    <div className=" px-8 py-2 mt-2 hover:text-white font-medium text-sm  text-gray-300 dark-mode:focus:text-white focus:border-white ">
      <Link href={link.path}>
        <a>{link.text}</a>
      </Link>
    </div>
  );
}

export default NavLink;
