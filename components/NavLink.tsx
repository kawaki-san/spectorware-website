import Link from "next/link";
interface Entry {
  path: string;
  text: string;
}
function NavLink(link: Entry) {
  return (
    <div className="px-8 py-2 mt-2 text-sm font-medium text-gray-300  hover:text-white dark-mode:focus:text-white focus:border-white">
      <Link href={link.path}>
        <p className="cursor-pointer select-none ">{link.text}</p>
      </Link>
    </div>
  );
}

export default NavLink;
