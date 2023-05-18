import Header from "./Header/header";


const Home = () => {
  return (
    <div className="w-full">
      <Header />
      <div className="flex flex-col justify-center w-full pt-40">
        <h1 className="text-4xl m-auto"> Welcome to Global Chat </h1>
        <p className="m-auto" style={{color:"red", fontSize:'30px'}}>Please login to the app before start </p>
   
      </div>
    </div>
  );
};

export default Home;
