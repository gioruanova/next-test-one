import { NavItem } from "@/components";
import { HomeIcon } from "@primer/octicons-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
  { label: "Pricing", path: "/pricing" },
];

export const Navbar = () => {
  return (
    <nav className="flex bg-sky-950 bg-opacity-30 p-2 m-2 rounded justify-between align-middle">
      <div className="flex items-center gap-2">
        <HomeIcon />
        <NavItem
          path={navItems[0].path}
          label={navItems[0].label}
          classStyle="text-2xl"
        ></NavItem>
      </div>

      <div className="flex justify-end mr-2 gap-3.5 self-center">
        {navItems.slice(1).map((item) => (
          <NavItem key={item.path} {...item} />
        ))}
      </div>
    </nav>
  );
};
