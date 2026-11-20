import { Elsewhere } from "@/components/elsewhere";
import { ExperienceList } from "@/components/experience-list";
import { Intro } from "@/components/intro";
import { LatestBlog } from "@/components/latest-blog";
import { ProjectList } from "@/components/project-list";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <main className="mx-auto w-[calc(100%-2.5rem)] max-w-[34rem] pb-10 pt-32 text-[15px] leading-relaxed tracking-[-0.012em] transition-colors duration-300 max-[600px]:pt-[70px]" id="top">
      <Intro />
      <ProjectList />
      <ExperienceList />
      <LatestBlog />
      <Elsewhere />
      <SiteFooter />
    </main>
  );
}
