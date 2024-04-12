import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";


export const siteOwner = "Example"
export const site = {
  title: siteOwner,
  occupation: "Developer",
  description: `A portfolio website of ${siteOwner}`,
  url: "http://localhost:3000/"
}

export const NavItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "My projects",
    href: "/projects",
  },
  {
    name: "Contact",
    href: "/contact",
  },
]

export const socialLink = [
  {
    title: "Facebook",
    icon: <Facebook />,
    href: "/"
  },
  {
    title: "Instagram",
    icon: <Instagram />,
    href: "/"
  },
  {
    title: "X",
    icon: <Twitter />,
    href: "/"
  },
  {
    title: "LinkedIn",
    icon: <Linkedin />,
    href: "/"
  },
  {
    title: "Youtube",
    icon: <Youtube />,
    href: "/"
  },
]