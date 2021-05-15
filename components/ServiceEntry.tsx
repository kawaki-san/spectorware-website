interface Service {
  title: string;
  body: string;
}

function ServiceEntry(service: Service) {
  return (
    <div className="flex flex-col pb-2 sm:pb-4 lg:pb-6 w-full sm:w-1/2 sm:px-6 lg:w-1/3">
      <h2 className="text-center uppercase font-semibold tracking-widest text-sm pb-4">
        {service.title}
      </h2>
      <p>{service.body}</p>
    </div>
  );
}

export default ServiceEntry;
