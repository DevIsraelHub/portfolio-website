import { Blocks, Calendar, GanttChartSquare, Gem, Globe, GraduationCap, HomeIcon, Instagram, Linkedin, MailIcon, PhoneCall, User2 } from "lucide-react";
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
    title: "Bold pro",
    icon: <Globe className="w-6 h-6" />,
    href: "https://bold.pro/my/victoria-francis-240423222213/690r"
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
        university: "Ado Ekiti state university",
        role: "Bachelor of Applied Science - BSc",
        years: "Dec 2017 - Nov 2022",
      },
      {
        university: "Ekiti state university",
        role: "BSc",
        years: "Dec 2017 - Jun 2022",
      },
    ]
  },
  {
    title: "experience",
    data: [
      {
        company: "Freelance",
        role: "Experience Python Developer",
        years: "Aug 2023 - present",
      },
      {
        company: "SWIFT NETWORKS LIMITED",
        role: "Technical Support Specialist",
        years: "Mar 2021 - Aug 2021",
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
        name: "Javascript, Typescript",
      },
      {
        name: "Python, Node js",
      },
      {
        name: "Django, Mongodb",
      },
      {
        name: "React js, Next js",
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
    review: `I'm beyond impressed with ${siteOwner}'s work ethic and talent. She transformed my outdated website into a modern masterpiece in no time. Her attention to detail and commitment sets her apart from the rest. I highly recommend her to anyone in need of top-notch web development services!`,
  },
  {
    avatar: "/reviews/avatar-2.png",
    name: "Evelyn Anderson",
    job: "Interior Designer",
    review: `${siteOwner} did a commendable job on my website. While the delivery was slightly delayed, the quality of work and attention to detail were exceptional. I appreciate her dedication and expertise in bringing my vision to life.`,
  },
  {
    avatar: "/reviews/avatar-3.png",
    name: "Mike Andrew",
    job: "developer",
    review: `${siteOwner} is an incredibly talented web developer. Her attention to details and creativity are unmatched. Working with Victoria was a breeze, as she listened to my needs and provided expert guidance throughout the process. I highly recommend Victoria to anyone looking to elevate their online presence.`,
  },
  {
    avatar: "/reviews/avatar-4.png",
    name: "Emeka Jeff",
    job: "Gamer",
    review: `I'm beyond impressed with ${siteOwner}'s work ethic and talent. She transformed my outdated website into a modern masterpiece in no time. Her attention to detail is very good. I highly recommend her to anyone in need of top-notch web development services!`,
  },
  // {
  //   avatar: "/reviews/avatar-5.png",
  //   name: "Joel Benson",
  //   job: "Seo Expert",
  //   review: `${siteOwner} did a commendable job on my website. While the delivery was slightly delayed, the quality of work and attention to detail were exceptional. I appreciate her dedication and expertise in bringing my vision to life.`,
  // },
  {
    avatar: "/reviews/avatar-6.png",
    name: "Mary Jessica",
    job: "Fashionist",
    review: `${siteOwner} is an absolute genius! I approached her with a tight deadline for my project, and she not only met it but also delivered exceptional quality. Her communication throughout the process was commendable, making the entire experience smooth and stress-free. Highly recommended!`,
  },
]
