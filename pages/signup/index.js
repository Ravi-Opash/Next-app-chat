import SignUp from "../../Components/LogIn/signUp";
import { Fragment } from "react";
import { useRouter } from "next/router";

function SignupPage(props) {
  const router = useRouter();

  async function addUserHandler(enteredData) {
    const response = await fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify(enteredData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);
    if(data.message){
      alert(data.message)
      router.push("/login");
    }else{
      alert(data.error)
      router.push("/signup")
    }


  }
  return (
    <Fragment>
      <SignUp onAddUserup={addUserHandler} />
    </Fragment>
  );
}

export default SignupPage;
