import { Footer } from "@/components/footer/footer"
import { CreateProjectSection } from "@/components/home/createProjectSection"
import { HomeBanner } from "@/components/home/homeBanner"
import { HomeQuote } from "@/components/home/homeQuote"
import { ImportRepoSection } from "@/components/home/importRepoSection"
import { ProjectTable } from "@/components/home/projectTable"
import { NextPage } from "next"
import React from "react"

const Page: NextPage = () => {
  return (
    <>
      <div className={`homepage_container`}>
        <div className="homepage_sections">
          <HomeBanner />
          <CreateProjectSection />
          <ImportRepoSection />
          <ProjectTable />
        </div>
        <HomeQuote />
        <Footer />
      </div>
    </>
  )
}

export default Page