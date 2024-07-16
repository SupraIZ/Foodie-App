"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./nav-link.module.css";

export default function NavLink(props) {
  const path = usePathname();
  return (
    <Link
      href={props.href}
      className={
        path.startsWith(props.href)
          ? `${classes.link} ${classes.active}`
          : classes.active
      }
    >
      {props.children}
    </Link>
  );
}
