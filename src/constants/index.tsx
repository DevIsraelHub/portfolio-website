import { Blocks, Calendar, GanttChartSquare, Gem, GraduationCap, HomeIcon, Instagram, Linkedin, MailIcon, PhoneCall, User2 } from "lucide-react";
import { FaSquareXTwitter } from "react-icons/fa6";


export const siteOwner = "Francis Victoria"
export const phoneNumber = "+234 811 084 7104"
export const email = "victoriafrancis885@gmail.com"
export const address = "Lagos state, Nigeria"

export const site = {
  title: siteOwner,
  occupation: "Flutter Developer",
  description: `Hey, I'm ${siteOwner} an experienced software developer skilled in writing python code`,
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
    title: "LinkedIn",
    icon: <Linkedin />,
    href: "https://www.linkedin.com/in/francisvic/"
  },
  {
    title: "X",
    icon: <FaSquareXTwitter className="w-6 h-6" />,
    href: "https://x.com/vicogwa51012055"
  },
  {
    title: "Instagram",
    icon: <Instagram />,
    href: "https://www.instagram.com/victoria.francis.39948/"
  },
  // {
  //   title: "X",
  //   icon: <Twitter />,
  //   href: "/"
  // },
  // {
  //   title: "Youtube",
  //   icon: <Youtube />,
  //   href: "/"
  // },
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
    text: "Born on 18 may, 1998",
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

export const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "Example University",
        role: "Bachelor of Science",
        years: "2015 - 2018",
      },
      {
        university: "Another University",
        role: "Master of Arts",
        years: "2019 - 2021",
      },
      {
        university: "Yet Another University",
        role: "Ph.D in Computer Science",
        years: "2021 - 2025",
      },
    ]
  },
  {
    title: "experience",
    data: [
      {
        company: "ABC Inc.",
        role: "Software Engineer",
        years: "2018 - 2020",
      },
      {
        company: "XYZ Corporation",
        role: "Senior Developer",
        years: "2020 - 2022",
      },
      {
        company: "Tech Innovators",
        role: "Lead Developer",
        years: "2022 - Present",
      },
    ]
  },
]

export const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "HTML, CSS",
      },

      {
        name: "Front-end Development",
      },
      {
        name: "Javascript, PHP",
      },
      {
        name: "Back-end Development",
      },

    ]
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/figma.svg",
      },
      {
        imgPath: "/about/notion.svg",
      },
      {
        imgPath: "/about/wordpress.svg",
      },
    ]
  }
]

export const serviceData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: "Web Design",
    description: "Experienced in UI/UX designs with the use of figma software and other designing software like Adobe."
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: "Web Development",
    description: "Expert in web development. writing clean and neat code. Building modern looking website with the latest technologies"
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: "App Development",
    description: "Skilled in building fast and reliable mobile apps with Flutter."
  },
]

export const projectData = [
  {
    image: "/work/3.png",
    category: "react.js",
    name: "Nexa Website",
    descripiton: "Lorem, ipsum dolor sit amet consectetur fuest laborum libero. Message aut explicabo",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "next.js",
    name: "Solstics Website",
    descripiton: "Lorem, ipsum dolor sit amet consectetur fuest laborum libero. Message aut explicabo",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "next.js",
    name: "Ecommerce Website",
    descripiton: "Lorem, ipsum dolor sit amet consectetur fuest laborum libero. Message aut explicabo",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "next.js",
    name: "Admin Website",
    descripiton: "Lorem, ipsum dolor sit amet consectetur fuest laborum libero. Message aut explicabo",
    link: "/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "next.js",
    name: "Commas Website",
    descripiton: "Lorem, ipsum dolor sit amet consectetur fuest laborum libero. Message aut explicabo",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "next.js",
    name: "Nuella Website",
    descripiton: "Lorem, ipsum dolor sit amet consectetur fuest laborum libero. Message aut explicabo",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "next.js",
    name: "Mangry Website",
    descripiton: "Lorem, ipsum dolor sit amet consectetur fuest laborum libero. Message aut explicabo",
    link: "/",
    github: "/",
  },
]

export const reviewData = [
  {
    avatar: "/reviews/avatar-1.png",
    name: "Richard Thompson",
    job: "Chef",
    review: `I'm beyond impressed with ${siteOwner}'s work ethic and talent. He transformed my outdated website into a modern masterpiece in no time. His attention to detail and commitment to delivering excellence sets him apart from the rest. I highly recommend him to anyone in need of top-notch web development services!`,
  },
  {
    avatar: "/reviews/avatar-2.png",
    name: "Evelyn Anderson",
    job: "Interior Designer",
    review: `${siteOwner} did a commendable job on my website. While the delivery was slightly delayed, the quality of work and attention to detail were exceptional. I appreciate his dedication and expertise in bringing my vision to life.`,
  },
  {
    avatar: "/reviews/avatar-3.png",
    name: "Mike Andrew",
    job: "developer",
    review: `${siteOwner} is an incredibly talented web develioper. His attention to detail and creative flair are unmatched. Working with Ejeh was a breeze, as he listened to my needs and provided expert guidance throughout the process. I highly recommend Ejeh for anyone looking to elevate their online presence.`,
  },
  {
    avatar: "/reviews/avatar-4.png",
    name: "Emeka Jeff",
    job: "Gamer",
    review: `I'm beyond impressed with ${siteOwner}'s work ethic and talent. He transformed my outdated website into a modern masterpiece in no time. His attention to detail and commitment to delivering excellence sets him apart from the rest. I highly recommend him to anyone in need of top-notch web development services!`,
  },
  // {
  //   avatar: "/reviews/avatar-5.png",
  //   name: "Joel Benson",
  //   job: "Seo Expert",
  //   review: `${siteOwner} did a commendable job on my website. While the delivery was slightly delayed, the quality of work and attention to detail were exceptional. I appreciate his dedication and expertise in bringing my vision to life.`,
  // },
  {
    avatar: "/reviews/avatar-6.png",
    name: "Mary Jessica",
    job: "Fashionist",
    review: `${siteOwner} is an absolute genius! I approached him with a tight deadline for my project, and he not only met it but also delivered exceptional quality. His communication throughout the process was commendable, making the entire experience smooth and stress-free. Highly recommended!`,
  },
]
