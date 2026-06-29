import { useEffect, useRef, useState } from 'react'
import { story, experience, projects, awards, personal } from '../data'
import { Mail, Phone, MapPin, Github, Linkedin, Send, ExternalLink } from 'lucide-react'

// ── Scroll reveal hook ──────────────────────────────────────────────
function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add('visible') }, { threshold: 0.1 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

// ── Section wrapper ─────────────────────────────────────────────────
function Section({ id, children, bg = 'bg-white', className = '' }) {
  const ref = useReveal()
  return (
    <section id={id} className={`${bg} border-b border-slate-100 ${className}`}>
      <div ref={ref} className="fade-in w-full max-w-[1400px] mx-auto px-3 py-10">{children}</div>
    </section>
  )
}

function SectionHeader({ tag, title, highlight, sub, dark = false }) {
  return (
    <div className="mb-10">
      <span className={`text-xs font-bold uppercase tracking-widest ${dark ? 'text-cyan-400' : 'text-cyan-600'}`}>{tag}</span>
      <h2 className={`text-3xl font-black mt-1 mb-2 ${dark ? 'text-white' : 'text-slate-900'}`}>
        {title} <span className={dark ? 'text-cyan-400' : 'text-cyan-600'}>{highlight}</span>
      </h2>
      {sub && <p className={`text-sm leading-relaxed ${dark ? 'text-slate-400' : 'text-slate-500'}`}>{sub}</p>}
    </div>
  )
}

// ── Story ────────────────────────────────────────────────────────────
const storyColors = {
  cyan:   { border: 'border-cyan-400',   bg: 'bg-cyan-50',   badge: 'bg-cyan-100 text-cyan-700' },
  green:  { border: 'border-emerald-400',bg: 'bg-emerald-50',badge: 'bg-emerald-100 text-emerald-700' },
  purple: { border: 'border-violet-400', bg: 'bg-violet-50', badge: 'bg-violet-100 text-violet-700' },
  orange: { border: 'border-amber-400',  bg: 'bg-amber-50',  badge: 'bg-amber-100 text-amber-700' },
}

export function StorySection() {
  return (
    <Section id="journey" bg="bg-slate-50">
      <SectionHeader tag="My Story" title="From curiosity to" highlight="production systems" sub="From a college student tinkering with side projects and winning hackathons, to a developer building production systems at a university research centre — my journey has been anything but ordinary. I've worked alongside researchers, shipped apps that real people use, and taken on client projects independently outside of work. Every step pushed me further than the last." />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {story.map((s) => {
          const c = storyColors[s.color]
          return (
            <div key={s.num} className={`relative bg-white rounded-2xl border-t-4 ${c.border} p-6 shadow-sm hover:shadow-md transition-shadow`}>
              <div className="absolute top-4 right-5 text-5xl font-black text-slate-100 select-none">{s.num}</div>
              <div className="text-3xl mb-3">{s.icon}</div>
              <div className="text-xs font-bold text-cyan-600 uppercase tracking-wide mb-1">{s.year}</div>
              <h3 className="text-base font-bold text-slate-900 mb-0.5">{s.title}</h3>
              <p className="text-xs text-slate-400 italic mb-3">{s.subtitle}</p>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">{s.text}</p>
              <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${c.badge}`}>{s.highlight}</span>
            </div>
          )
        })}
      </div>
    </Section>
  )
}

// ── Experience ───────────────────────────────────────────────────────
export function ExperienceSection() {
  return (
    <Section id="experience" bg="bg-white">
      <SectionHeader tag="Experience" title="My professional" highlight="journey" sub="A timeline of how I've grown — from college learning to leading production systems at a research institution." />
      <div className="relative pl-6 border-l-2 border-slate-100">
        {experience.map((e, i) => (
          <div key={i} className="relative mb-10 last:mb-0">
            <div className={`absolute -left-[25px] top-1 w-4 h-4 rounded-full border-4 ${e.active ? 'bg-cyan-600 border-cyan-200' : 'bg-slate-400 border-slate-100'}`} />
            <div className="bg-slate-50 rounded-2xl p-6 hover:shadow-sm transition-shadow">
              <div className={`text-xs font-bold mb-1 ${e.active ? 'text-cyan-600' : 'text-slate-400'}`}>{e.date}</div>
              <h3 className="text-base font-bold text-slate-900">{e.title}</h3>
              <p className="text-sm text-cyan-600 font-medium mb-3">{e.company}</p>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">{e.desc}</p>
              <div className="flex flex-wrap gap-2">
                {e.tags.map(t => <span key={t} className="text-xs px-2.5 py-1 bg-white border border-slate-200 rounded-md text-slate-600">{t}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

// ── Projects ─────────────────────────────────────────────────────────
const badgeStyles = {
  live:     'bg-emerald-50 text-emerald-700 border border-emerald-200',
  client:   'bg-amber-50 text-amber-700 border border-amber-200',
  research: 'bg-cyan-50 text-cyan-700 border border-cyan-200',
}

export function ProjectsSection() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(null) // 'left' | 'right'
  const [animating, setAnimating] = useState(false)
  const total = projects.length
  const VISIBLE = 3

  const navigate = (dir) => {
    if (animating) return
    setDirection(dir)
    setAnimating(true)
    setTimeout(() => {
      setCurrent(i =>
        dir === 'right'
          ? (i + VISIBLE) % total
          : (i - VISIBLE + total) % total
      )
      setAnimating(false)
      setDirection(null)
    }, 350)
  }

  const visibleProjects = Array.from({ length: VISIBLE }, (_, i) =>
    projects[(current + i) % total]
  )

  // Slide-out class applied before index changes, slide-in after
  const slideClass = animating
    ? direction === 'right'
      ? 'animate-slide-out-left'
      : 'animate-slide-out-right'
    : 'animate-slide-in'

  return (
    <Section id="projects" bg="bg-slate-50">
      <SectionHeader
        tag="Projects"
        title="Things I've"
        highlight="built"
        sub="From research-grade NLP platforms to Play Store apps and medical imaging tools — every project here is real, production-grade, and built with purpose."
      />

      <div className="relative flex items-center gap-3">
        {/* Left arrow */}
        <button
          onClick={() => navigate('left')}
          disabled={animating}
          className="flex-shrink-0 w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-600 hover:border-cyan-400 hover:text-cyan-600 hover:shadow-md transition-all disabled:opacity-40"
        >
          ‹
        </button>

        {/* Cards container */}
        <div className="flex-1 overflow-hidden">
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 ${slideClass}`}>
            {visibleProjects.map((p, i) => (
              <div
                key={`${p.name}-${current}-${i}`}
                className="bg-white rounded-2xl border border-slate-200 p-6 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-50 transition-all hover:-translate-y-1 flex flex-col"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center text-2xl">{p.icon}</div>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${badgeStyles[p.badgeType]}`}>{p.badge}</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1">{p.name}</h3>
                <p className="text-xs font-semibold text-cyan-600 mb-3">{p.role}</p>
                <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-1">{p.desc}</p>
                <div className="bg-cyan-50 rounded-lg px-3 py-2 text-xs text-cyan-700 font-medium mb-4">{p.impact}</div>
                <div className="flex flex-wrap gap-1.5">
                  {p.stack.map(t => (
                    <span key={t} className="text-xs px-2 py-0.5 bg-slate-100 text-slate-600 rounded-md">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right arrow */}
        <button
          onClick={() => navigate('right')}
          disabled={animating}
          className="flex-shrink-0 w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-600 hover:border-cyan-400 hover:text-cyan-600 hover:shadow-md transition-all disabled:opacity-40"
        >
          ›
        </button>
      </div>

      {/* Dot indicators — grouped by page */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: Math.ceil(total / VISIBLE) }).map((_, i) => (
          <button
            key={i}
            onClick={() => !animating && setCurrent(i * VISIBLE)}
            className={`h-2 rounded-full transition-all duration-300 ${
              Math.floor(current / VISIBLE) === i
                ? 'bg-cyan-600 w-5'
                : 'bg-slate-300 hover:bg-slate-400 w-2'
            }`}
          />
        ))}
      </div>

      <style>{`
        @keyframes slideInFromRight {
          from { opacity: 0; transform: translateX(60px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInFromLeft {
          from { opacity: 0; transform: translateX(-60px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideOutToLeft {
          from { opacity: 1; transform: translateX(0); }
          to   { opacity: 0; transform: translateX(-60px); }
        }
        @keyframes slideOutToRight {
          from { opacity: 1; transform: translateX(0); }
          to   { opacity: 0; transform: translateX(60px); }
        }
        .animate-slide-in        { animation: slideInFromRight 0.35s ease both; }
        .animate-slide-out-left  { animation: slideOutToLeft   0.35s ease both; }
        .animate-slide-out-right { animation: slideOutToRight  0.35s ease both; }
      `}</style>
    </Section>
  )
}

// ── Skills ───────────────────────────────────────────────────────────
const capabilities = [
  {
    icon: '🌐',
    title: 'Web Applications',
    color: 'from-blue-500 to-cyan-500',
    lightBg: 'bg-blue-50',
    border: 'border-blue-200',
    accent: 'text-blue-700',
    tagBg: 'bg-blue-100 text-blue-700',
    tools: [
      { name: 'React.js', note: 'UI & SPA' },
      { name: 'Spring Boot', note: 'Backend APIs' },
      { name: 'WebSocket', note: 'Real-time' },
      { name: 'REST APIs', note: 'Integration' },
      { name: 'SQL / MySQL', note: 'Relational DB' },
      { name: 'MongoDB', note: 'Document DB' },
      { name: 'Tailwind CSS', note: 'Styling' },
    ],
    proof: ['Discourse Platform', 'LCAuthoring Interface'],
  },
  {
    icon: '🤖',
    title: 'AI / NLP Systems',
    color: 'from-cyan-500 to-teal-500',
    lightBg: 'bg-cyan-50',
    border: 'border-cyan-200',
    accent: 'text-cyan-700',
    tagBg: 'bg-cyan-100 text-cyan-700',
    tools: [
      { name: 'CRF Models', note: 'Sequence labelling' },
      { name: 'NLP Pipelines', note: 'Text processing' },
      { name: 'NER / POS Tagging', note: 'Annotation' },
      { name: 'Anaphora Resolution', note: 'Co-reference' },
      { name: 'OpenCV', note: 'Image processing' },
      { name: 'Python', note: 'ML scripting' },
    ],
    proof: ['Anna University Chatbot', 'Research Data Pipeline'],
  },
  {
    icon: '📱',
    title: 'Mobile & Android',
    color: 'from-emerald-500 to-green-500',
    lightBg: 'bg-emerald-50',
    border: 'border-emerald-200',
    accent: 'text-emerald-700',
    tagBg: 'bg-emerald-100 text-emerald-700',
    tools: [
      { name: 'Android Mobile Application', note: 'Java SDK' },
      { name: 'Android TV Application', note: 'Large screen' },
      { name: 'Translation Models', note: 'On-device AI' },
    ],
    proof: ['Bhashayatra', 'VisionX'],
  },
  {
    icon: '🛠️',
    title: 'Dev Tools & Infra',
    color: 'from-violet-500 to-purple-500',
    lightBg: 'bg-violet-50',
    border: 'border-violet-200',
    accent: 'text-violet-700',
    tagBg: 'bg-violet-100 text-violet-700',
    tools: [
      { name: 'Git', note: 'Version control' },
      { name: 'Docker', note: 'Containerisation' },
      { name: 'Web Scraping', note: 'Data pipelines' },
      { name: 'Firebase', note: 'Auth & storage' },
      { name: 'On-premise Deploy', note: 'Zero cloud' },
    ],
    proof: ['Discourse Platform', 'Research Data Pipeline'],
  },
]

export function SkillsSection() {
  return (
    <Section id="skills" bg="bg-slate-50">
      <SectionHeader
        tag="Skills & Capabilities"
        title="Here's What"
        highlight="I Work With"
        sub="Organised by what I can deliver — not just a list of buzzwords. Every tool here has been used in a real, shipped project."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {capabilities.map((cap) => (
          <div key={cap.title} className="bg-white border border-slate-100 rounded-2xl overflow-hidden hover:border-cyan-300 hover:shadow-md transition-all hover:-translate-y-1 flex flex-col">
            {/* Header */}
            <div className={`bg-gradient-to-r ${cap.color} p-4`}>
              <div className="text-2xl mb-1">{cap.icon}</div>
              <h3 className="text-sm font-black text-white">{cap.title}</h3>
            </div>

            {/* Tools list */}
            <div className="p-4 flex-1">
              <div className="space-y-2.5">
                {cap.tools.map(t => (
                  <div key={t.name} className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-700">{t.name}</span>
                    <span className="text-xs text-slate-400">{t.note}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

// ── Awards ───────────────────────────────────────────────────────────
export function AwardsSection() {
  return (
    <Section id="awards" bg="bg-slate-50">
      <SectionHeader tag="Honors & Awards" title="Recognition along" highlight="the way" sub="A few milestones that marked my journey from college to professional developer." />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {awards.map((a) => (
          <div key={a.title} className="bg-white rounded-2xl border border-slate-100 p-5 flex gap-4 items-start hover:shadow-sm transition-shadow">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0" style={{ background: a.bg }}>{a.icon}</div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 mb-1">{a.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{a.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

// ── Contact ──────────────────────────────────────────────────────────
export function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', company: '', message: '' })
  const [status, setStatus] = useState('')

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) { setStatus('error'); return }
    setStatus('sending')
    // EmailJS integration — replace with your own service/template IDs
    try {
      const res = await fetch(`https://api.emailjs.com/api/v1.0/email/send`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: import.meta.env.VITE_EMAILJS_SERVICE_ID,
          template_id: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          user_id: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
          template_params: { from_name: form.name, from_email: form.email, subject: form.subject, company: form.company, message: form.message },
        }),
      })
      if (res.ok) { setStatus('success'); setForm({ name: '', email: '', subject: '', company: '', message: '' }) }
      else setStatus('failed')
    } catch { setStatus('failed') }
  }

  return (
    <Section id="contact" bg="bg-white">
      <SectionHeader tag="Contact" title="Let's build something" highlight="together" sub="Open to full-time roles, freelance projects, and collaborations. Reach out — I respond fast!" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-slate-50 rounded-2xl overflow-hidden border border-slate-100">
        {/* Left */}
        <div className="bg-gradient-to-br from-cyan-600 to-cyan-800 p-8 text-white">
          <h3 className="text-xl font-bold mb-2">Get in touch 👋</h3>
          <p className="text-cyan-100 text-sm leading-relaxed mb-8">
            I'm actively looking for Software Developer roles across India. Whether you have a job opening, a project idea, or just want to connect — my inbox is always open!
          </p>
          {[
            { icon: <Mail size={16}/>, text: personal.email },
            { icon: <Phone size={16}/>, text: personal.phone },
            { icon: <MapPin size={16}/>, text: personal.location },
            { icon: <Github size={16}/>, text: 'github.com/Barath-babu-R', link: personal.github },
            { icon: <Linkedin size={16}/>, text: 'linkedin.com/in/barath-r', link: personal.linkedin },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-white/15 rounded-lg flex items-center justify-center flex-shrink-0">{item.icon}</div>
              {item.link
                ? <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-sm text-cyan-100 hover:text-white flex items-center gap-1">{item.text} <ExternalLink size={11}/></a>
                : <span className="text-sm text-cyan-100">{item.text}</span>
              }
            </div>
          ))}
        </div>

        {/* Right — Form */}
        <form onSubmit={handleSubmit} className="p-8 flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-3">
            <input name="name" value={form.name} onChange={handleChange} placeholder="Your name *" className="px-3 py-2.5 text-sm border border-slate-200 rounded-lg bg-white outline-none focus:border-cyan-400 transition-colors" />
            <input name="email" value={form.email} onChange={handleChange} placeholder="Your email *" className="px-3 py-2.5 text-sm border border-slate-200 rounded-lg bg-white outline-none focus:border-cyan-400 transition-colors" />
          </div>
          <input name="subject" value={form.subject} onChange={handleChange} placeholder="Subject — e.g. Job opportunity at XYZ" className="px-3 py-2.5 text-sm border border-slate-200 rounded-lg bg-white outline-none focus:border-cyan-400 transition-colors" />
          <input name="company" value={form.company} onChange={handleChange} placeholder="Company / Organisation (optional)" className="px-3 py-2.5 text-sm border border-slate-200 rounded-lg bg-white outline-none focus:border-cyan-400 transition-colors" />
          <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your message — tell me about the role or project... *" rows={4} className="px-3 py-2.5 text-sm border border-slate-200 rounded-lg bg-white outline-none focus:border-cyan-400 transition-colors resize-none" />
          <button type="submit" className="flex items-center justify-center gap-2 bg-cyan-600 text-white py-3 rounded-lg text-sm font-semibold hover:bg-cyan-700 transition-colors">
            {status === 'sending' ? 'Sending...' : <><Send size={14}/> Send message</>}
          </button>
          {status === 'success' && <p className="text-xs text-emerald-600 font-medium text-center">✅ Message sent! I'll get back to you soon.</p>}
          {status === 'failed' && <p className="text-xs text-red-500 font-medium text-center">❌ Something went wrong. Please email directly.</p>}
          {status === 'error' && <p className="text-xs text-amber-600 font-medium text-center">⚠️ Please fill in all required fields.</p>}
        </form>
      </div>
    </Section>
  )
}

// ── Footer ───────────────────────────────────────────────────────────
export function Footer() {
  return (
    <footer className="bg-slate-900 text-white px-6 py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-xl font-black text-cyan-400">Barath R.</div>
        <p className="text-xs text-slate-400 text-center">© 2026 Barath R · Software Developer · Chennai, India</p>
        <div className="flex gap-5">
          <a href={personal.github} target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-cyan-400 transition-colors">GitHub</a>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-cyan-400 transition-colors">LinkedIn</a>
          <a href="/resume.pdf" download className="text-xs text-slate-400 hover:text-cyan-400 transition-colors">Resume</a>
        </div>
      </div>
      <p className="text-center text-xs text-slate-600 mt-4">Built with React + Vite + Framer Motion + Tailwind CSS</p>
    </footer>
  )
}