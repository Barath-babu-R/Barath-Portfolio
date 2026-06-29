import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = ['About', 'Journey', 'Projects', 'Skills', 'Awards', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)

      // Detect which section is currently in view
      const offsets = links.map(l => {
        const el = document.getElementById(l.toLowerCase())
        if (!el) return { id: l, top: Infinity }
        return { id: l, top: Math.abs(el.getBoundingClientRect().top - 100) }
      })
      const nearest = offsets.reduce((a, b) => (a.top < b.top ? a : b))
      setActive(nearest.id)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">

        {/* ── Desktop nav links (centered) ── */}
        <div className="hidden md:flex items-center gap-1 mx-auto">
          {links.map(l => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className={`relative px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                active === l
                  ? 'text-cyan-600 bg-cyan-50'
                  : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {l}
              {active === l && (
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-cyan-600 rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* ── Desktop CTA ── */}
        <div className="hidden md:flex items-center">
          <button
            onClick={() => scrollTo('Contact')}
            className="bg-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-cyan-700 active:scale-95 transition-all shadow-sm shadow-cyan-100"
          >
            Hire me
          </button>
        </div>

        {/* ── Mobile hamburger ── */}
        <button
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 transition-colors ml-auto"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* ── Mobile menu (animated) ── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-slate-100 px-6 py-4 flex flex-col gap-1">
          {links.map(l => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className={`text-sm font-medium text-left px-3 py-2.5 rounded-lg transition-colors ${
                active === l
                  ? 'text-cyan-600 bg-cyan-50'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {l}
            </button>
          ))}

          {/* Mobile Hire me */}
          <div className="mt-3 pt-3 border-t border-slate-100">
            <button
              onClick={() => scrollTo('Contact')}
              className="w-full bg-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-cyan-700 transition-colors text-center"
            >
              Hire me
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}