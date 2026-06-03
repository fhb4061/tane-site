import { ModeToggle } from "./ModeToggle";

export function Header() {
    return (
        <header className="flex backdrop-blur sticky top-0 items-center justify-between h-14 border-b border-primary">
            <div className="p-3 flex justify-between items-center w-full">
                <ModeToggle />
            </div>
        </header>
    )
}