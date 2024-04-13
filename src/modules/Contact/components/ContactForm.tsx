import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRightIcon, MailIcon, MessageCircleIcon, User } from "lucide-react"
import React from 'react'

const ContactForm = () => {
  return (
    <form className="flex flex-col gap-y-4">
      <div className="relative flex items-center">
        <Input type="name" id="name" placeholder="Name" />
        <User className="absolute right-6" size={20} />
      </div>
      <div className="relative flex items-center">
        <Input type="email" id="email" placeholder="Email" />
        <MailIcon className="absolute right-6" size={20} />
      </div>
      <div className="relative flex items-center">
        <Textarea id="message" placeholder="Type your message here..." />
        <MessageCircleIcon className="absolute top-4 right-6" size={20} />
      </div>
      <Button type="button" className="flex items-center gap-x-2 group max-w-[166px]">
        Let&apos;s Talk
        <ArrowRightIcon size={20} className="group-hover:translate-x-2 transition-transform" />
      </Button>
    </form>
  )
}

export default ContactForm
