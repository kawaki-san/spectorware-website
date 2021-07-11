import AppItem from "./AppItem";

function SupportedApps() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col">
          <div className="h-1 bg-gray-200 rounded overflow-hidden">
            <div className="w-24 h-full bg-pink"></div>
          </div>
          <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
            <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
              Apps, Apps and More Apps
            </h1>
            <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
              From Joomla, Drupal to Laravel; we're sure you'll be able to find
              a web solution that's perfect for your use case. Be it one click,
              or wizard based, we aim to provide the easiest setup you can find
              for your web applications.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <AppItem
            title="WordPress"
            icon="wordpress"
            description="WordPress hosting has never been easier. Preview your site before deployment and once it's up, you can rest easy knowing that your site has unbeatable performance thanks to the NVMe storage backing it."
          />
          <AppItem
            title="NodeJS"
            icon="node"
            description="Got a React or Vue application? An API with an Express backend? No worries. Use your remote SQL Database and keep your data centralised in your account."
          />
          <AppItem
            title="Python"
            icon="python"
            description="We also support Python applications. We have a setup wizard to guide on you on setting everything up. The wizard supports setting environment variables so you don't have to expose your confidential data."
          />
        </div>
      </div>
    </section>
  );
}

export default SupportedApps;
