import { Blocks, Calendar, Facebook, GanttChartSquare, Gem, GraduationCap, HomeIcon, Instagram, Linkedin, MailIcon, PhoneCall, Twitter, User2, Youtube } from "lucide-react";


export const siteOwner = "Chioma Adande"
export const phoneNumber = "+234 815 395 2231"
export const email = "chiomadande@gmail.com"
export const address = "321 Blue Avenue NY, USA"

export const site = {
  title: siteOwner,
  occupation: "Web Developer",
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
    description: "lorem ipsyum dolor sit amet cnnectuer endiplisisn elit, cdolomepa repllls"
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: "Web Design",
    description: "lorem ipsyum dolor sit amet cnnectuer endiplisisn elit, cdolomepa repllls"
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: "App Development",
    description: "lorem ipsyum dolor sit amet cnnectuer endiplisisn elit, cdolomepa repllls"
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
    review: "Reviews Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, corporis voluptatem facere reprehenderit quidem et? Officia ab suscipit alias repudiandae.",
  },
  {
    avatar: "/reviews/avatar-2.png",
    name: "Evelyn Anderson",
    job: "Interior Designer",
    review: "Reviews Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, corporis voluptatem facere reprehenderit quidem et? Officia ab suscipit alias repudiandae.",
  },
  {
    avatar: "/reviews/avatar-3.png",
    name: "Mike Andrew",
    job: "developer",
    review: "Reviews Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, corporis voluptatem facere reprehenderit quidem et? Officia ab suscipit alias repudiandae.",
  },
  {
    avatar: "/reviews/avatar-4.png",
    name: "Emeka Jeff",
    job: "Gamer",
    review: "Reviews Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, corporis voluptatem facere reprehenderit quidem et? Officia ab suscipit alias repudiandae.",
  },
  {
    avatar: "/reviews/avatar-5.png",
    name: "Joel Benson",
    job: "Seo Expert",
    review: "Reviews Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, corporis voluptatem facere reprehenderit quidem et? Officia ab suscipit alias repudiandae.",
  },
  {
    avatar: "/reviews/avatar-6.png",
    name: "Mary Jessica",
    job: "Fashionist",
    review: "Reviews Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, corporis voluptatem facere reprehenderit quidem et? Officia ab suscipit alias repudiandae.",
  },
]
