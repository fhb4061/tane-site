import { Skills } from "./features/Skills";
import { Experiences } from "./features/Experiences";
import { About } from "./features/About";
import { CertsAward } from "./features/CertsAward";
import { Hero } from "./features/Hero";

function App() {
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
