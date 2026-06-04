import { Skills } from "../features/Skills";
import { Experiences } from "../features/Experiences";
import { About } from "../features/About";
import { CertsAward } from "../features/CertsAward";
import { Hero } from "../features/Hero";
import type { PropsWithChildren } from "react";

export const TypographyH1 = ({ children }: PropsWithChildren) => {
  return (
    <h1 className="scroll-m-20 font-extrabold tracking-tight text-balance text-4xl md:text-7xl lg:text-7xl">
      {children}
    </h1>
  )
}

export const TypographyH2 = ({ children }: PropsWithChildren) => {
  return (
    <h2 className="scroll-m-20 text-6xl font-semibold tracking-tight first:mt-0">
      {children}
    </h2>
  )
}

export const TypographyH3 = ({ children }: PropsWithChildren) => {
  return (
    <h3 className="scroll-m-20 text-2xl font-bold tracking-wide">
      {children}
    </h3>
  )
}


export const Portfolio = () => {

  return (
    <div className="flex flex-col p-5 gap-5">
      <About />
      <Skills />
      <Experiences />
      <CertsAward />
    </div>
  );

  return (
    <div className="mx-auto grid w-full max-w-7xl gap-5 p-5 lg:grid-cols-[minmax(300px,360px)_1fr] lg:gap-20 lg:pt-6">
      <aside className="lg:sticky lg:top-24 lg:self-start">
        <Hero />
      </aside>

      <div className="space-y-7 lg:space-y-14">
        <About />
        <Skills />
        <Experiences />
        <CertsAward />
      </div>
    </div>
  )
}
