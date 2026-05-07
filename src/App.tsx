import { Header } from "./components/Header";
import { Skills } from "./features/Skills";
import { Experiences } from "./features/Experiences";
import { About } from "./features/About";
import { Contact } from "./features/Contact";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="mx-auto grid w-full max-w-6xl gap-14 px-5 py-14 sm:px-8 sm:py-5 lg:w-[90vw] lg:max-w-none lg:grid-cols-[minmax(300px,360px)_1fr] lg:gap-20 lg:px-10 lg:pt-6">
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="space-y-10">
            <div className="flex flex-col border-b pb-5">
              <h3 className="text-3xl uppercase font-bold">Jonathan Lopeti</h3>
              <span className="text-faded-fg font-semibold">Full-Stack Engineer</span>
            </div>
            <Contact />
          </div>
        </aside>

        <div className="space-y-14">
          <About />
          <Skills />
          <Experiences />
        </div>
      </div>
    </div>
  )
}

export default App
