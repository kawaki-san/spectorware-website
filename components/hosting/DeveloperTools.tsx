import Tool from "./Tool";

function DeveloperTools() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
            Extra Services and Server Information
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Some highlights of the free services you get when you pick us as
            your cloud hosting provider. Available in all our plans:
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          <Tool feature="Multiple PHP versions" />
          <Tool feature="MariaDB 10.3" />
          <Tool feature="BitNinja Server Security" />
          <Tool feature="Two factor authentication" />
          <Tool feature="PHP X-Ray support" />
          <Tool feature="Ruby application support" />
          <Tool feature="Git integration" />
          <Tool feature="Hotlink protection" />
          <Tool feature="IP address blocking" />
          <Tool feature="Website builder" />
        </div>
      </div>
    </section>
  );
}

export default DeveloperTools;
