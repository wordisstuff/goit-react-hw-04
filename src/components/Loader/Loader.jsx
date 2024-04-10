import { ThreeCircles } from "react-loader-spinner";

const Loader = () => {
  return (
    <>
      <ThreeCircles
        visible={true}
        height="100"
        width="100"
        color="#4fa94d"
        ariaLabel="three-circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </>
  );
};

export default Loader;
