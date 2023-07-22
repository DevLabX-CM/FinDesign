import React from "react";
import Link from "next/link";
import Image from "next/image";
import { NavLinks } from "@/constant";
import AuthProviders from "./AuthProviders";

const NavBar = () => {


    const session  ={}

  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gap-10">
        <Link href="/">
          <Image src="/logo.svg" width={115} height={43} alt="Findesign" />
        </Link>

        <ul className="xl:flex hidden text-small gap-7">
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.key}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>

<div className="flexCenter gap-4" >

{session ? (
    <>
    user photo

    <Link href='/create-projet' >Share your work</Link>

    </>
) : (


    <AuthProviders/>

)}


</div>

    </nav>
  );
};

export default NavBar;
