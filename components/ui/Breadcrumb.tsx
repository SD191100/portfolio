//"use client";
//
//import Link from "next/link";
//import { usePathname } from "next/navigation";
//import { ArrowRight } from "lucide-react";
//
//const Breadcrumb = () => {
//  const pathname = usePathname(); // Get the current route
//  const pathSegments = pathname.split("/").filter((segment) => segment); // Remove empty segments
//
//  return (
//    <div className="flex items-center gap-4 text-neutral-700 text-xl dark:text-neutral-300 ">
//      <Link href="/" className="font-normal hover:underline transition">
//        Home
//      </Link>
//      {pathSegments.map((segment, index) => {
//        const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
//        const isLast = index === pathSegments.length - 1;
//
//        return (
//          <div key={path} className="flex items-center gap-4">
//            <ArrowRight color="#a1a1a1" />
//            {isLast ? (
//              <span className="font-semibold text-black dark:text-white">{decodeURIComponent(segment)}</span>
//            ) : (
//              <Link href={path} className="hover:underline transition">
//                {decodeURIComponent(segment)}
//              </Link>
//            )}
//          </div>
//        );
//      })}
//    </div>
//  );
//};
//
//export default Breadcrumb;
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";

const Breadcrumb = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment);

  return (
    <div className="flex items-center gap-4 text-neutral-700 text-xl dark:text-neutral-300">
      <Link href="/" className="font-normal hover:underline transition">
        Home
      </Link>
      {pathSegments.map((segment, index) => {
        const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
        const isLast = index === pathSegments.length - 1;

        const isFolderSegment = segment === "folder";

        return (
          <div key={path} className="flex items-center gap-4">
            <ArrowRight color="#a1a1a1" />
            {isLast || isFolderSegment ? (
              <span
                className={`${
                  isLast ? "font-semibold text-black dark:text-white" : ""
                }`}
              >
                {decodeURIComponent(segment)}
              </span>
            ) : (
              <Link href={path} className="hover:underline transition">
                {decodeURIComponent(segment)}
              </Link>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
