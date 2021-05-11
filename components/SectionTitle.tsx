interface Title {
  comment: string;
  title: string;
}

function SectionTitle(title: Title) {
  return (
    <div>
      <h3 className="text-center uppercase font-semibold tracking-widest text-xs pb-4">
        {title.comment}
      </h3>
      <h1 className="text-center uppercase tracking-widest text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold pb-2">
        {title.title}
      </h1>
    </div>
  );
}

export default SectionTitle;
