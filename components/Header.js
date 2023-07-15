import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = ({name}) => {
  const router = useRouter();
     
	const onLogout = async () => {
		const resRaw = await fetch('/api/logout');
    console.log("hel",resRaw)
		const json = await resRaw.json();
		
		console.log("ee",json.isLoggedIn)
		if (json.isLoggedIn == false) {
			router.replace('/')
		}
	}
  return (
<header className="bg-white shadow flex justify-around items-center p-3">
  <Link href="/home">
    <div className="flex-shrink-0 flex gap-2 items-center">
      <img className="h-16 w-auto" src="/logo3d2.jpeg" alt="Logo" />
      <h2 className="text-black text-xl font-serif">BookTo3D</h2>
    </div>
  </Link>
  <div>
    <h2 className="font-serif text-black text-3xl lg:mr-12">{name}</h2>
  </div>
  <div>
    <div onClick={onLogout} className="cursor-pointer bg-red-600 p-3 text-white">Logout</div>
  </div>
</header>

  );
};

export default Header;
