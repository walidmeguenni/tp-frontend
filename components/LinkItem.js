import Link from "next/link";
import React from "react";

const LinkItem = ({ Item, link }) => {
  return (
    <Link
      href={link}
      className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4"
    >
      {Item}
    </Link>
  );
};

export default LinkItem;
