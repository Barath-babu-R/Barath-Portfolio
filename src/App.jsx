import { useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import {
  StorySection,
  ExperienceSection,
  ProjectsSection,
  SkillsSection,
  AwardsSection,
  ContactSection,
  Footer,
} from './components/Sections'

export default function App() {
  const spotlightRef = useRef(null)

  // Cursor spotlight
  useEffect(() => {
    const el = spotlightRef.current
    if (!el) return
    const move = (e) => {
      el.style.left = `${e.clientX}px`
      el.style.top = `${e.clientY}px`
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  // Scroll reveal
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.08 }
    )
    document.querySelectorAll('.fade-in').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <>
      {/* Cursor spotlight */}
      <div ref={spotlightRef} className="cursor-spotlight hidden md:block" />

      <Navbar />

      <main>
        <Hero />
        <StorySection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <AwardsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  )
}
