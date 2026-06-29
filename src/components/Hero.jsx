import { useState, useEffect, useRef } from 'react'
import { Download, ArrowDown } from 'lucide-react'
import { personal, stats } from '../data'

const roles = ['Full-Stack Developer', 'AI/NLP Engineer', 'Android Developer', 'Software Developer']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const canvasRef = useRef(null)

  // Typewriter
  useEffect(() => {
    const current = roles[roleIndex]
    let timeout
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIndex((roleIndex + 1) % roles.length)
    }
    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIndex])

  // Particles
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
    const particles = Array.from({ length: 45 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 1,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.3 + 0.35,
    }))
    let animId
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        ctx.shadowBlur = 4
        ctx.shadowColor = `rgba(8,145,178,0.5)`
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(8,145,178,${p.opacity})`
        ctx.fill()
        ctx.shadowBlur = 0
        p.x += p.dx; p.y += p.dy
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1
      })
      animId = requestAnimationFrame(draw)
    }
    draw()
    return () => cancelAnimationFrame(animId)
  }, [])

  return (
    <section id="about" className="relative bg-white pt-24 pb-0 overflow-hidden border-b border-slate-100">
      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }} />
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-50 to-transparent rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-green-50 to-transparent rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-3 pb-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          {/* Left */}
          <div className="flex-1">
            {/* Available badge */}
            {/* <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold px-4 py-2 rounded-full mb-5">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              Available for work — Immediate joining
            </div> */}

            <p className="text-slate-400 text-sm font-medium mb-1">Hey there! I'm</p>
            <h1 className="text-5xl md:text-6xl font-black text-slate-900 leading-tight tracking-tight mb-3">
              Barath <span className="text-cyan-600">R</span>
            </h1>

            {/* Typewriter */}
            <div className="h-8 mb-4">
              <span className="text-xl font-semibold text-slate-600">
                {displayed}<span className="text-cyan-500 animate-pulse">|</span>
              </span>
            </div>

            <p className="text-slate-500 text-sm leading-relaxed mb-6 max-w-lg">
              A curious, problem-solving, creation-driven developer with 2.5+ years building
              production-grade systems at <span className="text-cyan-600 font-semibold">AU-KBC Research Centre, Anna University</span>.
              I don't just write code — I build things that matter.
            </p>

            {/* Chips */}
            <div className="flex flex-wrap gap-2 mb-7">
              {['React + Spring Boot','CRF Models','Native Android','WebSocket','NLP Pipelines'].map(c => (
                <span key={c} className="text-xs px-3 py-1.5 rounded-full bg-cyan-50 text-cyan-700 border border-cyan-200 font-medium">{c}</span>
              ))}
              <span className="text-xs px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-medium">▶ Play Store App Live</span>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-2 bg-cyan-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-cyan-700 transition-all hover:shadow-lg hover:shadow-cyan-200"
              >
                View my work <ArrowDown size={15} />
              </button>
              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-2 border-2 border-cyan-600 text-cyan-600 px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-cyan-50 transition-all"
              >
                Download resume <Download size={15} />
              </a>
            </div>
          </div>

          {/* Right — Avatar */}
          <div className="relative flex-shrink-0 animate-[float_3s_ease-in-out_infinite] mr-60" style={{ animation: 'float 3s ease-in-out infinite' }}>
            <style>{`@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}`}</style>
            {/* Top card */}
            <div className="absolute -top-4 -left-10 bg-white border border-slate-200 rounded-xl shadow-md px-3 py-2 z-10">
              <div className="text-xs text-slate-400">Experience</div>
              <div className="text-sm font-bold text-cyan-600">2.5+ Years</div>
            </div>
            {/* Avatar */}
            <div className="w-36 h-36 rounded-3xl bg-gradient-to-br from-cyan-500 to-cyan-700 flex items-center justify-center text-5xl font-black text-white shadow-2xl shadow-cyan-200">
              BR
            </div>
            {/* Bottom card */}
            <div className="absolute -bottom-4 -right-10 bg-white border border-slate-200 rounded-xl shadow-md px-3 py-2 z-10">
              <div className="text-xs text-slate-400">Multi Domain</div>
              <div className="text-sm font-bold text-emerald-600">Developer</div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 bg-cyan-600">
        {stats.map((s, i) => (
          <div key={i} className={`py-5 text-center ${i < stats.length - 1 ? 'border-r border-cyan-500' : ''}`}>
            <div className="text-3xl font-black text-white">{s.num}</div>
            <div className="text-xs text-cyan-100 mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}