import Head from "next/head";
import useFetch from "./useFetch";

const Services = () => {
  const { data: services, error } = useFetch("http://localhost:8000/services");

  return (
    <>
      <Head>
        <title>Marisa Howard | Services and Training</title>
      </Head>
      <div className="services">
        <h2>Services and Training</h2>
        <div className="wrapper"></div>
        {/* {error && <div>{error}</div>} */}
        {services &&
          services.map((service) => (
            <h3 key={service.id}>{service.servicename}</h3>
          ))}
      </div>
    </>
  );
};

export default Services;
