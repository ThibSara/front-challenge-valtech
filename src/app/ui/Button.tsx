import Link from "next/link";

const Button = ({ text, href, ariaLabel, target }) => (
  <Link
    href={href}
    aria-label={ariaLabel}
    target={target}
    className=" border border-black hover:border-primary shadow-sm transition-colors duration-300 bg-white hover:bg-primary px-8 py-3.5 text-sm font-semibold hover:text-white"
  >
    {text}
  </Link>
);

export default Button;
