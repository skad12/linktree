import React from "react";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialGithub } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import Link from "next/link";
import data from "../data.json";
const Socials = (href) => {
  return (
    <>
      <Link href={href}>
        <div className="text-white flex text-center ">
          <TiSocialLinkedin />
          <TiSocialGithub />
          <TiSocialTwitter />
        </div>
      </Link>
    </>
  );
};

export default Socials;
