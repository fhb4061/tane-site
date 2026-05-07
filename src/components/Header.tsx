export function Header() {
    return (
        <header className="flex backdrop-blur sticky top-0 items-center justify-between border-b h-20">
            <div className="p-3 flex justify-between items-center w-full">
                <div className="grid">
                    <h4 className="text-lg font-semibold uppercase">Jonathan Lopeti</h4>
                    <span className="text-zinc-400">Full-Stack Engineer</span>
                </div>
                <div>
                    Contact
                </div>
            </div>
        </header>
    )
}