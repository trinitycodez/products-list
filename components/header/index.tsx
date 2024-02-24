"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";


type props = {
  isRoute?:string
}

const Header: FC<props> = ({isRoute}) => {
  
  const links = [
    { path: "/", name: "Home", style: "mr-4" },
    { path: `/products/${isRoute? isRoute: "1"}`, name: "Products", style: "mr-4" },
  ];

  const pathname = usePathname();

  return (
    <>
      <header className="shadow-sm mb-16">
        <div className="justify-end app-container items-center py-4 md:py-5 flex">
          <div className="sm:flex gap-10 hidden sm:text-xs md:text-[16px] font-[700] text-app-text-black">
            {links.map((cur, i) => (
              <Link
                key={i}
                className={
                  pathname === cur.path
                    ? `${cur.style} border-b-2 border-app-primary text-app-primary whitespace-nowrap w-[30px] leading-6`
                    : "leading-6"
                }
                href={cur.path}
              >
                {cur.name}
              </Link>
            ))}
          </div>

        </div>
      </header>

    </>
  );
};

export default Header;
