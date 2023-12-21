import { NextPage } from "next";
import Link from "next/link";

const Basic: NextPage = () => {
  const pages = [
    { name: "Getting Started", path: "/basic/getting-started" },
    { name: "Adapting based on Props", path: "/basic/adapting-based-on-props" },
    { name: "Extending Styles", path: "/basic/extending-styles" },
  ];

  return (
    <ul>
      {pages.map((page) => (
        <li>
          <Link href={page.path}>{page.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Basic;
