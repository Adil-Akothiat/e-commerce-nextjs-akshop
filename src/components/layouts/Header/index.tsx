"use client";
import ShopCardBar from "./ShopCartBar";
import SearchBar from "./SearchBar";
import MenuBar from "./Menu";
import Link from "next/link";
import { GoPerson } from "react-icons/go";

const Header = () => {
  return (
    <header className="navbar sticky top-0 z-[1000] bg-white px-1 md:px-10 lg:px-16 xl:px-24">
      <div className="navbar">
        <MenuBar />
        <div className="navbar-end">
          <Link
            href="/auth/signin"
            className="btn btn-ghost btn-circle text-xl text-slate-600"
          >
            <GoPerson />
          </Link>
          <SearchBar />
          <ShopCardBar />
        </div>
      </div>
    </header>
  );
};

export default Header;