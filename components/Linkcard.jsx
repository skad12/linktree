import React from "react";
import Link from "next/link";
import Image from "next/image";
import data from "../data.json";

function LinkCard({ social_media, name, image }) {
  return (
    <>
      <Link
        href={social_media.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="h-14 w-4/5 flex p-2 items-center bg-gray-100 shadow-md
          duration-300 hover:shadow-lg hover:scale-105 transition-all group-hover"
      >
        <div className="flex text-center w-full group">
          {image && (
            <Image
              className="rounded-md h-10 w-10"
              alt={name}
              src={image}
              width={40}
              height={40}
            />
          )}
          <p className=" font-semibold text-gray-800 w-full text-center ">
            {name}
          </p>
          <p className=" group-hover:opacity-100 opacity-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
          </p>
        </div>
      </Link>
    </>
  );
}

export default LinkCard;
