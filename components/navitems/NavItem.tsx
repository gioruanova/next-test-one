"use client";

import Link from "next/link";
import React from "react";
import style from "./NavItem.module.css";
import { usePathname } from "next/navigation";

interface NavItemProps {
  path: string;
  label: string;
  classStyle?: string;
}

export const NavItem = ({ path, label, classStyle = "" }: NavItemProps) => {
  const pathName = usePathname();

  return (
    <Link
      href={path}
      className={`flex gap-2 items-center uppercase font-bold ${classStyle} 
      ${style.link} 
      ${pathName === path ? style["active-link"] : ""}`}
    >
      <span>{label}</span>
    </Link>
  );
};
