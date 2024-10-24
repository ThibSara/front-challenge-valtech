import Image from "next/image";
import Link from "next/link";
import PAGE_NAMES from "./../utils/PAGE_NAMES";

const Navbar = () => {
  return (
    <nav className="bg-primary" aria-label="navigation bar">
      <div className=" max-w-7xl flex px-20 sm:px-60 xl:px-120 py-4 items-center">
        <Link href={PAGE_NAMES.HOME} className="flex flex-row gap-2 group">
          <Image
            alt="Valtech Logo"
            src={"/images/valtech.svg"}
            width={180}
            height={40}
            className="sm:w-36  h-auto w-28"
          />
          <Image
            alt="Valtech Logo"
            src={"/images/logo.svg"}
            width={180}
            height={40}
            className="sm:w-40  h-auto w-8 transition-transform duration-500 group-hover:rotate-180"
          />
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
