import Hero from "@/components/Hero"

export default function Home() {
  return (
    <>
      <Hero />

      <section className="h-screen flex items-center justify-center bg-neutral-900 text-white">
        <div className="text-center">
          <h2 className="text-5xl font-bold tracking-widest mb-6">
            Innovation Continues
          </h2>
          <p className="opacity-70 max-w-xl mx-auto">
            Scroll-driven experiences built with performance and motion in mind.
          </p>
        </div>
      </section>

    </>
  )
}