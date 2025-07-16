"use client"
import CoreComponents from "@/components/CoreComponents"
import Hero from "@/components/Hero"
import GetStarted from "@/components/GetStarted"
import Link from "next/link"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#030303] bg-no-repeat pt-20 flex flex-col items-center">
      <div className="relative flex flex-col gap-8 items-center sm:items-start p-6 px-4 sm:px-6 pb-20 sm:p-20 container">
        <Hero />
        <div className="flex space-x-4 mt-2 mb-20 self-start">
          <Link
            href="#get-started"
            className="bg-white text-black px-4 sm:px-12 py-2 rounded-md disabled:opacity-50 cursor-pointer disabled:hover:cursor-default text-xs sm:text-base hover-shine"
          >
            Get Started
          </Link>
          <Link
            href="https://github.com/web3privacy/privacy-builder-pack"
            className="bg-white text-black px-4 sm:px-12 py-2 rounded-md disabled:opacity-50 cursor-pointer disabled:hover:cursor-default text-xs sm:text-base hover-shine"
          >
            Documentation
          </Link>
        </div>
        <CoreComponents />
        <GetStarted />
      </div>
    </main>
  )
}
