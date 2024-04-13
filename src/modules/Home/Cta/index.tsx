import { Button } from "@/components/ui/button"
import Link from "next/link"
import React from 'react'

const Cta = () => {
  return (
    <section className="py-24 bg-tertiary dark:bg-secondary/40">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="h2 max-w-xl text-center mb-8">
            Prepared to turn your ideas into reality? I&apos;m here to help
          </h2>
          <Button asChild>
            <Link href="/contact">Contact Me</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Cta
