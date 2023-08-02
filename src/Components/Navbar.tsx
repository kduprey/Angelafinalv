import Link from "next/link";

function Navbar() {
  return (
    <nav className="flex-between" w-full mb-16 pt-3>
      <Link href="/" className="flex gap-2 flex-center">
        <img
          src="/public/images/AM.png"
          alt="Logo"
          width={30}
          height={30}
          className="object-contain"
        ></img>
      </Link>
    </nav>
  );
}

export default Navbar;
