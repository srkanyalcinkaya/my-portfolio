"use client"

import LatestCode from "@/components/LatestCode"

export default function Home() {
  return (
   
     <>
      <div className="flex flex-col lg:justify-start justify-center items-center lg:items-start mt-5 lg:mt-10 w-full">
        <div className="flex items-center">
          <p className="flex items-center text-white text-3xl font-semibold">
          hey, I'm Serkan 👋
          </p>
        </div>
        <p className="text-white/50 text-md mt-3">
          I am a professional editor and software developer. I have been professionally interested in community management and development for 5 years, I have high level knowledge and experience in areas such as community management and social media management.
        </p>
      </div>
      <LatestCode/>
     </>
  )
}


