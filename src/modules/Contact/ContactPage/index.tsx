import { address, email, phoneNumber } from "@/constants"
import { HomeIcon, MailIcon, PhoneCall } from "lucide-react"
import React from 'react'
import ContactForm from "../components/ContactForm"

const ContactPage = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
          <div className="flex flex-col justify-center">
            <h3 className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Say Hello 👋
            </h3>
            <h1 className="h1 max-w-md mb-8">Let&apos;s Work Together.</h1>
            <p className="subtitle max-w-[400px]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim ullam laudantium deserunt ad a. Ratione!
            </p>
          </div>

          <div className="hidden xl:flex w-full bg-contact_light dark:bg-contact_dark bg-contain bg-top bg-no-repeat">
          </div>
        </div>
        <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
          <div className="flex flex-col gap-y-4 xl:gap-y-12 mb-12 xl:mb-24 text-base xl:text-lg">
            <div className="flex items-center gap-x-8">
              <MailIcon size={18} className="text-primary" />
              <p>{email}</p>
            </div>
            <div className="flex items-center gap-x-8">
              <PhoneCall size={18} className="text-primary" />
              <p>{phoneNumber}</p>
            </div>
            <div className="flex items-center gap-x-8">
              <HomeIcon size={18} className="text-primary" />
              <p>{address}</p>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

export default ContactPage
