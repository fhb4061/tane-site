import { Header } from "./components/Header";
import { Skills } from "./features/Skills";
import { Experiences } from "./features/Experiences";
import { About } from "./features/About";
import { Section } from "./components/Section";
import { Contact, MailIcon, MapPin, MessageSquareMore, PhoneCallIcon } from "lucide-react";


type PortfolioContact = {
  email: string;
  phone: string;
  linkedinUrl: string;
  linkedinLabel: string;
  location: string;
};

// usually get this from api maybe but will leave it here for simplicity
const contact: PortfolioContact = {
  email: "jonathanlopeti@gmail.com",
  phone: "+61 401 237 175",
  linkedinUrl: "https://www.linkedin.com/in/tane-lopeti",
  linkedinLabel: "linkedin.com/in/tane-lopeti",
  location: "Melbourne, Australia",
}

function App() {
  return (
    <div className="">
      <Header />
      <div className="flex flex-col items-center justify-center">
        <Section>
          <div className="mt-5">
            <div className="flex gap-2 items-center mb-5">
              <Contact className="size-5" />
              <h3 className="text-xl font-semibold">Contact</h3>
            </div>

            <ul className="space-y-2.5">
              <li className="grid items-center grid-cols-[30px_1fr]">
                <MailIcon className="size-4" />
                <a className="underline underline-offset-4 hover:text-zinc-300" href={`mailto:${contact.email}`}>
                  {contact.email}
                </a>
              </li>

              <li className="grid items-center grid-cols-[30px_1fr]">
                <MessageSquareMore className="size-4" />
                <a
                  className="underline underline-offset-4 hover:text-zinc-300"
                  href={contact.linkedinUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {contact.linkedinLabel}
                </a>
              </li>

              <li className="grid items-center grid-cols-[30px_1fr]">
                <PhoneCallIcon className="size-4" />
                {contact.phone}
              </li>

              <li className="grid items-center grid-cols-[30px_1fr]">
                <MapPin className="size-4" />
                {contact.location}
              </li>
            </ul>
          </div>
        </Section>
        <About />
        <Skills />
        <Experiences />
      </div>
    </div>
  )
}

export default App
