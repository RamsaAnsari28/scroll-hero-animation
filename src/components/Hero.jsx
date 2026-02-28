"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function Hero() {
  const heroRef = useRef(null)
  const headlineRef = useRef(null)
  const statsRef = useRef([])
  const visualRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {

      // Headline stagger animation
      gsap.fromTo(
        headlineRef.current.children,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.07,
          ease: "power4.out"
        }
      )

      // Stats entry animation
      gsap.fromTo(
        statsRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          delay: 0.8,
          ease: "power3.out"
        }
      )

      // Visual entry animation
      gsap.from(visualRef.current, {
        y: 50,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.6
      })

      // Orb parallax
      gsap.to("#orb", {
        y: -200,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1
        }
      })

      // Scroll-driven movement
      gsap.to(visualRef.current, {
        x: window.innerWidth,
        rotation: 10,
        scale: 1.2,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1
        }
      })

      // Fade headline on scroll
      gsap.to(headlineRef.current, {
        opacity: 0.3,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1
        }
      })

      // Fade stats on scroll (NEW - cinematic touch)
      gsap.to(statsRef.current, {
        opacity: 0,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top center",
          end: "bottom top",
          scrub: 1
        }
      })

      // Slight hero scale for depth
      gsap.to(heroRef.current, {
        scale: 0.98,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1
        }
      })

    }, heroRef)

    return () => ctx.revert()
  }, [])

  const headline = "FUTURE DRIVEN".split("")

  return (
    <section
      ref={heroRef}
      className="relative h-screen flex flex-col justify-center items-center bg-black text-white overflow-hidden"
    >

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-black to-purple-900 opacity-70"></div>

      {/* Glowing orb */}
      <div
        id="orb"
        className="absolute w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20 top-20 left-20"
      />

      {/* Headline */}
      <h1
        ref={headlineRef}
        className="
          relative z-10
          text-3xl
          sm:text-5xl
          md:text-6xl
          lg:text-7xl
          xl:text-8xl
          2xl:text-9xl
          font-extrabold
          tracking-[0.18em]
          sm:tracking-[0.25em]
          text-center
          px-6
        "
      >
        {headline.map((letter, index) => (
          <span key={index}>
            {letter === " " ? "\u00A0" : letter}
          </span>
        ))}
      </h1>

      {/* Stats */}
      <div className="relative z-10 flex gap-16 mt-12">
        {[
          { number: "150K+", label: "Users Worldwide" },
          { number: "99%", label: "Performance Boost" },
          { number: "4.9★", label: "Client Rating" }
        ].map((stat, i) => (
          <div
            key={i}
            ref={(el) => (statsRef.current[i] = el)}
            className="text-center"
          >
            <h2 className="text-3xl font-bold">{stat.number}</h2>
            <p className="text-sm opacity-70 mt-2">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Moving visual element */}
      <div
        ref={visualRef}
        className="absolute bottom-20 left-0 w-64 h-20 bg-white rounded-full z-10"
      />

    </section>
  )
}