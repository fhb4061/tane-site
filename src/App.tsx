import { Header } from "./components/Header";
import { Skills } from "./features/Skills";
import { Experiences } from "./features/Experiences";
import { About } from "./features/About";

function App() {
  return (
    <div className="">
      <Header />
      <div className="mt-5 flex flex-col items-center justify-center">
        <About />
        <Skills />
        <Experiences />
      </div>
    </div>
  )
}

export default App
