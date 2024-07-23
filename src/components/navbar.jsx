"use client";
import { FaLink } from "react-icons/fa";
import logo from "../../public/solar_link-circle-bold.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoPersonCircleOutline } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";
const Navbar = () => {
  const path = usePathname();
  return (
    <div className="sm:p-6 max-w">
      <nav className="flex rounded-xl items-center justify-between px-6 sm:py-6 py-4  bg-[--white]">
        <div className="flex items-center gap-[6px]">
          <Image src={logo} alt="logo" className="min-w-8 w-[32px] h-[32px] sm:w-[26px] sm:h-[26px] sm:min-w-0 "/>
          <h1 className="text-[24px] font-bold hidden sm:inline">devlinks</h1>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/links"
            className={`${
              path === "/links" && "bg-[--purple-light] active"
            } flex items-center gap-2 px-[27px] py-[11px] rounded-lg transition-all`}
          >
            <FaLink
              className={`${
                path === "/links" && " fill-[--purple]"
              } sm:w-[15px] sm:h-[15px]`}
              size={"20px"}
            />
            <div className="font-semibold hidden sm:inline">Links</div>
          </Link>

          <Link
            href="/profile"
            className={`${
              path === "/profile" && "bg-[--purple-light] active"
            } flex items-center gap-2 px-[27px] py-[11px] rounded-lg transition-all`}
          >
            <IoPersonCircleOutline
              className={`${
                path === "/profile" && " fill-[--purple]"
              } sm:w-[16px] sm:h-[16px]`}
              size={"20px"}
            />
            <div className="font-semibold hidden sm:inline">Profile Details</div>
          </Link>
        </div>

        <Link
          href="/preview"
          className="sm:px-[27px] px-[16px] font-semibold py-[11px] rounded-lg border border-[--purple] hover:bg-[--purple-light]"
        >
          <div className="hidden sm:inline text-[--purple]">
            Preview
          </div>
          <div className="sm:hidden">
            <MdOutlineRemoveRedEye size={"20px"}/>
          </div>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
