import FooterEntry from "./FooterEntry";

interface Entry {
  path: string;
  text: string;
}

interface Column {
  heading: string;
  entry: Entry[];
}

function FooterColumn(col: Column) {
  return (
    <div className="pb-6 w-1/2 sm:w-1/3">
      <h2 className="uppercase font-semibold tracking-widest text-sm pb-4">
        {col.heading}
      </h2>
      <ul className="footer-text text-xs font-medium">
        {col.entry.map((entry: Entry) => {
          return (
            <FooterEntry key={entry.path} path={entry.path} text={entry.text} />
          );
        })}
      </ul>
    </div>
  );
}

export default FooterColumn;
