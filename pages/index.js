import Image from "next/image";
import data from "../data.json";
import Link from "next/link";
import LinkCard from "@/components/Linkcard";
import Socials from "@/components/Socials";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialGithub } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className=" antialiased ">
        <div className="flex flex-col items-center mx-auto w-full mt-16 justify-center space-y-4 ">
          {" "}
          <Image
            className="rounded-full"
            alt={data.name}
            src={data.avatar}
            width={100}
            height={100}
          />{" "}
          <div className="font-bold text-2xl text-white pb-10">{data.name}</div>
          {data.links.map((link) => (
            <LinkCard key={link.href} {...link} />
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
}
