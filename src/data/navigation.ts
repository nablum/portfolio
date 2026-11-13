export interface NavItem {
  name: string;
  /** CSS selector of the section to scroll to. */
  href: `#${string}`;
}

export const navItems: NavItem[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];
