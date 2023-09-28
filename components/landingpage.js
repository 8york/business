import useFetch from "./useFetch";

const LandingPage = () => {
  const { data, error } = useFetch("http://localhost:8000/about");
  console.log(data);
  return (
    <>
      {error && <div>{error}</div>}
      {console.log("hello")}
      {data && (
        <div className="about">
          <h2>{data.title}</h2>
          {console.log(data.title)}
          <p>{data.subtitle}</p>
          <p>{data.marisa}</p>
        </div>
      )}
    </>
  );
};

export default LandingPage;
