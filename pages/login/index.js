import { useRouter } from "next/router";
import LogIn from "../../Components/LogIn/logIn";
import { Fragment } from "react";

function SignupPage(props) {

  const router = useRouter()

  async function checkUserHandler(enteredData) {
    const response = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify(enteredData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);
    localStorage.setItem('username', data.username)
    alert(data.message)
    router.push('/chat')
  }
  return (
    <Fragment>
      <LogIn onCheckUserup={checkUserHandler} />
    </Fragment>
  );
}

export default SignupPage;
