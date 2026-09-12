import TechnologyCard from "./TechnologyCard"
import StackSidebar from "./StackSidebar"

function TechnologySection({
    technologies,
    selectedTechnologies,
    onAddToStack,
    onRemoveFromStack,
    onRemoveAll,
}) {
    return (
        <section
            id="technologies"
            className="bg-white py-20"
        >
            <div className="mx-auto max-w-7xl px-5 lg:px-8">

                <div className="mb-10">
                    <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
                        Explore the{" "}
                        <span className="brand-gradient-text">
                            Technologies
                        </span>
                    </h2>

                    <p className="mt-2 text-slate-500">
                        Pick one technology per category to build your ideal stack.
                    </p>
                </div>

                <div className="grid gap-6 lg:grid-cols-[1fr_280px]">

                    {/* Your Stack - Mobile first, Desktop right */}
                    <div className="order-1 lg:order-2">
                        <StackSidebar
                            selectedTechnologies={selectedTechnologies}
                            onRemoveFromStack={onRemoveFromStack}
                            onRemoveAll={onRemoveAll}
                        />
                    </div>

                    {/* Technology Cards */}
                    <div className="order-2 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:order-1 xl:grid-cols-3">
                        {technologies.map((technology) => (
                            <TechnologyCard
                                key={technology.id}
                                technology={technology}
                                selectedTechnologies={selectedTechnologies}
                                onAddToStack={onAddToStack}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}

export default TechnologySection