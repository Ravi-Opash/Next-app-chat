import avatar from "../../public/avatar.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Auth_Button from "./auth_Button";

const Header = () => {
  const location = useRouter();
  const onChatClick = () => {
    const name = localStorage.getItem("username");
    if (!name) {
      alert("Please Login first");
      location.push("/login");
    }
    else{
      location.push('/chat')
    }
  };

  return (
    <header className="py-4 fixed top-0 w-full bg-sky-400 px-32">
      <div className="flex justify-between">
        <Link href={"/setavatar"}>
          <Image src={avatar} alt="Avatar Image" width={50} height={50} />
        </Link>
        <ul className="text-stone-50 text-lg flex m-auto gap-10 font-bold">
          <li>
            <Link
              href="/"
              className={`${location.pathname === "/" ? "text-red-600" : ""}`}
            >
              Home
            </Link>
          </li>
          <li>
            <a
              onClick={onChatClick}
              className={`cursor-pointer ${
                location.pathname === "/chat" ? "text-red-600" : ""
              }`}
            >
              Chat
            </a>
          </li>
        </ul>

        <Auth_Button />
      </div>
    </header>
  );
};

export default Header;
