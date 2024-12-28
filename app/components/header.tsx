import Image from "next/image";
import logo from "./image/logo.jpg"

export default function Header() {
  return (
 
      <Image  src={logo} alt="Image Header"
      className="object-cover w-full max-h-80"
     ></Image>

  );
}

