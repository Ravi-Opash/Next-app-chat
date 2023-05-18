import Header from "../Header/header";

const SignUp = (props) => {

  const onSubmitSignUp = (event) => {
      event.preventDefault();
      console.log(event);
  
      const data = {
        username: event.target[0].value,
        password: event.target[1].value,
      };
  
      props.onAddUserup(data);
  }

  return (
    <div>
      <Header />
      <div className="w-2/4 grid m-auto mt-40 mb-10 bg-blue-200 rounded">
        <form className="m-auto p-12 w-full" onSubmit={onSubmitSignUp}>
        <h2 className="mb-4 font-bold text-2xl">SignUp Here...!</h2>
          <span>
            <label className="block ">
              <b>UserName:</b>
            </label>
            <input className="w-full h-10 px-2 rounded" type="text" name="username" />
          </span>
          <span>
            <label className="block">
              <b>Password: </b>
            </label>
            <input className="w-full h-10 px-1 rounded " type="password" name="password" />
          </span>

          <button className="bg-blue-500 hover:bg-blue-700 text-white flex w-auto font-bold mt-4 px-4 py-2 rounded border border-blue-700">
            SignUp
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
