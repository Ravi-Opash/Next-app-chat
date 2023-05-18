import Link from "next/link";
import {useRouter} from 'next/router';

const Auth_Button = () => {
  const location = useRouter()
  const onLogOut = () => {
    localStorage.removeItem('username')
  }
  return (
      <div className="flex">
        <Link href='/signup' className={`bg-blue-500 hover:bg-blue-700 text-white flex font-bold mr-2 px-4 border border-blue-700 rounded ${location.pathname === '/signup' || location.pathname === '/chat' ? 'hidden' : ''}`}><p className="flex items-center">SignUp</p></Link>
        <Link href='/login' className={`bg-blue-500 hover:bg-blue-700 text-white flex font-bold px-4 border border-blue-700 rounded ${location.pathname === '/login' || location.pathname === '/chat' ? 'hidden' : ''}`}><p className="flex items-center">LogIn</p></Link>
        <Link href='/' onClick={onLogOut} className={`bg-blue-500 hover:bg-blue-700 text-white flex font-bold px-4 border border-blue-700 rounded ${location.pathname === '/chat' ? '' : 'hidden'}`}><p className="flex items-center">LogOut</p></Link>
      </div>
  );
};

export default Auth_Button;
