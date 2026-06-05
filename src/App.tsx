import { Skills } from "./features/Skills";
import { Experiences } from "./features/Experiences";
import { About } from "./features/About";
import { CertsAward } from "./features/CertsAward";
import { Hero } from "./features/Hero";
import { Contact } from "./features/Contact";

function App() {
  return (
    <div className="grid lg:grid-cols-[minmax(300px,500px)_1fr]">
      <aside className="sticky top-14 self-start">
        <div className="mx-10 mt-10">
          <header className="mb-10 flex flex-col gap-2 border-b border-primary pb-4">
            <h1 className="text-5xl font-extrabold">Jonathan Lopeti</h1>
            <span className="text-xl font-semibold">Senior Fullstack Developer</span>
          </header>

          <p className="mb-20 max-w-sm leading-relaxed">I specialise in React Typescript and Spring Boot Java to build product that improves business processes and user expereince.</p>

          <Contact />
        </div>
      </aside>
      <div className="min-h-screen">
        Content
      </div>
    </div>
  )
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

export default App
