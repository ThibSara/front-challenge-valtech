import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-primary" aria-label="Navigation menu">
      <div className=" max-w-7xl flex px-20 sm:px-60 xl:px-120 py-4 items-center">
        <Link href={"/"} className="flex flex-row gap-2 group">
          <Image
            alt="Valtech Logo"
            src={"/images/valtech.svg"}
            width={129}
            height={32}
            className="sm:w-36  h-auto w-28"
          />
          <Image
            alt="Valtech Logo"
            src={"/images/logo.svg"}
            width={40}
            height={40}
            className="sm:w-40  h-auto w-8 transition-transform duration-500 group-hover:rotate-180"
          />
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
