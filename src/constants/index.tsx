import { Calendar, Facebook, GraduationCap, HomeIcon, Instagram, Linkedin, MailIcon, PhoneCall, Twitter, User2, Youtube } from "lucide-react";


export const siteOwner = "Example"
export const phoneNumber = "+234 815 395 2231"
export const email = "Example@gmail.com"
export const address = "321 Blue Avenue NY, USA"

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

export const infoData = [
  {
    icon: <User2 size={20} />,
    text: siteOwner,
  },
  {
    icon: <PhoneCall size={20} />,
    text: phoneNumber,
  },
  {
    icon: <MailIcon size={20} />,
    text: email,
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 10 mar, 1998",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Master on Computer Science",
  },
  {
    icon: <HomeIcon size={20} />,
    text: address,
  },
]