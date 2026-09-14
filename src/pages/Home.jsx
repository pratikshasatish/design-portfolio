import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Cursor from '../components/Cursor'

const projects = [
  {
    id: 1,
    title: "Modular Picture Frame",
    category: "Product Design · Engineering",
    year: "2024",
    description: "A modular, customizable frame system designed for maximum versatility and accessibility.",
    color: "#8b1a2a",
  },
  {
    id: 2,
    title: "Eventure App Wireframe",
    category: "UX/UI Design",
    year: "2024",
    description: "A mobile app wireframe to help users discover and engage with local events.",
    color: "#1a5a3a",
  },
  {
    id: 3,
    title: "The Hidden Chapter",
    category: "Systems Integration · Engineering",
    year: "2024",
    description: "A coffee table with a concealed motorized storage compartment activated by a hidden book-pull mechanism.",
    color: "#3a2a6b",
  },
  {
    id: 4,
    title: "Piano Playing Octopus Automaton",
    category: "Mechanical Engineering · Fabrication",
    year: "2024",
    description: "A fully 3D-printed hand-cranked automaton combining mechanical precision with artistic expression.",
    color: "#6b3a2a",
  },
  {
    id: 5,
    title: "Teaching Piano",
    category: "Product Design · Arduino",
    year: "2024",
    description: "A piano prototype combining visual and tactile feedback with Arduino-based tracking.",
    color: "#2a3a6b",
  },
  {
    id: 6,
    title: "Artist's Organizer",
    category: "Product Design · Fabrication",
    year: "2024",
    description: "A compact oil painting organizer designed to reduce clutter and maximize efficiency.",
    color: "#5a3a1a",
  },
  {
  id: 7,
  title: "Arc SSG",
  category: "Product Design · Hardware/Software",
  year: "2026",
  description: "A heads-up display goggle system that overlays real-time skiing data directly into the rider's line of sight.",
  color: "#0f3d4a",
},
]

const WORDS_TO_HIDE = [
  { word: 'PRATIKSHA', direction: 'horizontal', row: 0, col: 0 },
  { word: 'DESIGN', direction: 'horizontal', row: 3, col: 0 },
  { word: 'CRAFT', direction: 'horizontal', row: 6, col: 2 },
  { word: 'BUILD', direction: 'horizontal', row: 7, col: 4 },
  { word: 'CREATE', direction: 'horizontal', row: 8, col: 2 },
  { word: 'THINK', direction: 'vertical', row: 3, col: 9 },
  { word: 'UX', direction: 'horizontal', row: 9, col: 0 },
]

const RAW_GRID = [
  ['P','R','A','T','I','K','S','H','A','B'],
  ['W','X','Z','H','F','T','Q','A','Z','B'],
  ['D','J','Y','D','P','H','V','F','Y','U'],
  ['D','E','S','I','G','N','Z','J','L','T'],
  ['S','Z','K','R','Q','N','W','B','O','H'],
  ['I','G','J','W','C','K','A','F','T','I'],
  ['G','P','C','R','A','F','T','Z','Z','N'],
  ['N','Q','L','V','B','U','I','L','D','K'],
  ['Y','D','C','R','E','A','T','E','W','X'],
  ['U','X','A','Y','N','R','K','J','B','S'],
]

const CELL_MAP = (() => {
  const map = {}
  for (const { word, direction, row, col } of WORDS_TO_HIDE) {
    for (let i = 0; i < word.length; i++) {
      let r = row, c = col
      if (direction === 'horizontal') c = col + i
      else if (direction === 'vertical') r = row + i
      map[`${r}-${c}`] = word
    }
  }
  return map
})()

const GRID = RAW_GRID

// --- Skill wave config ---
const WAVE_LINES = [
  { amplitude: 190, frequency: 1.1, phase: 0,    color: "var(--burgundy)",       opacity: 0.5,  strokeWidth: 2.2 },
  { amplitude: 220, frequency: 0.9, phase: 0.5,  color: "var(--gold)",            opacity: 0.38, strokeWidth: 1.8 },
  { amplitude: 140, frequency: 1.4, phase: 1.0,  color: "var(--burgundy-light)",  opacity: 0.32, strokeWidth: 1.6 },
  { amplitude: 250, frequency: 0.7, phase: 0.3,  color: "var(--burgundy)",        opacity: 0.22, strokeWidth: 1.5 },
  { amplitude: 110, frequency: 1.7, phase: 1.4,  color: "var(--gold)",            opacity: 0.28, strokeWidth: 1.3 },
  { amplitude: 175, frequency: 1.0, phase: 0.8,  color: "var(--burgundy-light)",  opacity: 0.36, strokeWidth: 1.8 },
  { amplitude: 155, frequency: 1.3, phase: 1.8,  color: "var(--gold)",            opacity: 0.26, strokeWidth: 1.4 },
  { amplitude: 135, frequency: 2.0, phase: 0.6,  color: "var(--burgundy)",        opacity: 0.28, strokeWidth: 1.2 },
  { amplitude: 95,  frequency: 1.6, phase: 2.2,  color: "var(--burgundy-light)",  opacity: 0.3,  strokeWidth: 1.1 },
  { amplitude: 205, frequency: 0.8, phase: 1.1,  color: "var(--gold)",            opacity: 0.2,  strokeWidth: 1.5 },
  { amplitude: 120, frequency: 1.9, phase: 2.6,  color: "var(--burgundy)",        opacity: 0.24, strokeWidth: 1.1 },
  { amplitude: 165, frequency: 1.2, phase: 3.0,  color: "var(--burgundy-light)",  opacity: 0.3,  strokeWidth: 1.4 },
  { amplitude: 100, frequency: 2.3, phase: 0.9,  color: "var(--gold)",            opacity: 0.22, strokeWidth: 1 },
  { amplitude: 145, frequency: 1.5, phase: 1.6,  color: "var(--burgundy)",        opacity: 0.26, strokeWidth: 1.3 },
]

const WAVE_WIDTH = 1800
const WAVE_HEIGHT = 1100
const WAVE_POINTS = 140
const PHASE_STEPS = [0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2, 2 * Math.PI]

// y-offset of a wave at position t (0 = left edge, 1 = right edge), amplitude decays as t increases
function waveY(config, t, phaseShift) {
  const { amplitude, frequency, phase } = config
  return amplitude * Math.sin(frequency * t * Math.PI * 2 + phase + phaseShift)
}

function buildWavePath(config, phaseShift) {
  let d = ''
  for (let i = 0; i <= WAVE_POINTS; i++) {
    const t = i / WAVE_POINTS
    const x = t * WAVE_WIDTH
    const y = WAVE_HEIGHT / 2 + waveY(config, t, phaseShift)
    d += (i === 0 ? 'M' : 'L') + `${x.toFixed(1)},${y.toFixed(1)} `
  }
  return d.trim()
}

function WaveLine({ config, index }) {
  const paths = PHASE_STEPS.map(p => buildWavePath(config, p))
  return (
    <motion.path
      d={paths[0]}
      fill="none"
      stroke={config.color}
      strokeWidth={config.strokeWidth}
      strokeOpacity={config.opacity}
      strokeLinecap="round"
      animate={{ d: paths }}
      transition={{ duration: 8 + index * 1.3, repeat: Infinity, ease: 'linear' }}
    />
  )
}

const SKILLS_ON_WAVE = [
  { label: "Product Design",        t: 0.34, waveIndex: 4,  yOffset: 60 },
  { label: "UX / UI",               t: 0.48, waveIndex: 11, yOffset: 45 },
  { label: "CAD & Modeling",        t: 0.62, waveIndex: 2,  yOffset: -55 },
  { label: "Arduino & Electronics", t: 0.76, waveIndex: 9,  yOffset: 20 },
  { label: "Systems Thinking",      t: 0.92, waveIndex: 6,  yOffset: -15 },
]

function SkillLabel({ skill }) {
  const config = WAVE_LINES[skill.waveIndex]
  const labelDamping = 0.15
  const ys = PHASE_STEPS.map(p => waveY(config, skill.t, p) * labelDamping + skill.yOffset)
  const angles = PHASE_STEPS.map(p => {
    const dt = 0.01
    const dy = waveY(config, skill.t + dt, p) - waveY(config, skill.t, p)
    const dx = dt * WAVE_WIDTH
    return (Math.atan2(dy, dx) * 180) / Math.PI
  })

  return (
    <motion.div
      animate={{ y: ys, rotate: angles }}
      transition={{ duration: 8 + skill.waveIndex * 1.3, repeat: Infinity, ease: 'linear' }}
      style={{
  position: 'absolute',
  left: `${skill.t * 100}%`,
  top: '50%',
  fontSize: '16px',
  fontWeight: '600',
  letterSpacing: '0.06em',
  color: 'var(--text-primary)',
  whiteSpace: 'nowrap',
  fontFamily: 'monospace',
  textTransform: 'uppercase',
  transformOrigin: 'left center',
}}
    >
      {skill.label}
    </motion.div>
  )
}

function SkillWave() {
  return (
            <div style={{
  position: 'relative',
  width: '100%',
  height: '1100px',
  overflow: 'visible',
  WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 85%)',
maskImage: 'linear-gradient(to right, transparent 0%, black 85%)',
}}>
    <svg
        viewBox={`0 0 ${WAVE_WIDTH} ${WAVE_HEIGHT}`}
        preserveAspectRatio="none"
        style={{ width: '100%', height: '100%', position: 'absolute', top: '50%', left: 0, transform: 'translateY(-50%)' }}
      >
        {WAVE_LINES.map((config, i) => (
          <WaveLine key={i} config={config} index={i} />
        ))}
      </svg>

      {SKILLS_ON_WAVE.map(skill => (
        <SkillLabel key={skill.label} skill={skill} />
      ))}
    </div>
  )
}

function WordSearch() {
  const [hoveredWord, setHoveredWord] = useState(null)

  return (
    <div style={{ fontFamily: 'monospace', width: '100%' }}>
      {GRID.map((row, rowIdx) => (
        <div key={rowIdx} style={{ display: 'flex', justifyContent: 'space-between' }}>
          {row.map((letter, colIdx) => {
            const word = CELL_MAP[`${rowIdx}-${colIdx}`] || null
            const isHovered = word && hoveredWord === word
            return (
              <motion.span
                key={colIdx}
                onMouseEnter={() => { if (word) setHoveredWord(word) }}
                onMouseLeave={() => setHoveredWord(null)}
                animate={{
                  color: isHovered ? '#f5f0e8' : word ? '#6b5050' : '#2a1a1a',
                  backgroundColor: isHovered ? 'rgba(139, 26, 42, 0.2)' : 'transparent',
                  scale: isHovered ? 1.05 : 1,
                }}
                transition={{ duration: 0.12 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 'calc(100% / 12)',
                  aspectRatio: '1',
                  fontSize: 'clamp(14px, 2vw, 22px)',
                  fontWeight: '600',
                  cursor: word ? 'crosshair' : 'default',
                  userSelect: 'none',
                  borderRadius: '6px',
                }}
              >
                {letter}
              </motion.span>
            )
          })}
        </div>
      ))}
    </div>
  )
}

function ProjectRow({ project, index }) {
  const [hovered, setHovered] = useState(false)
  const navigate = useNavigate()

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="hoverable"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => navigate(`/project/${project.id}`)}
      style={{
        borderTop: `0.5px solid ${hovered ? project.color : 'var(--border)'}`,
        padding: '2.5rem 0',
        display: 'grid',
        gridTemplateColumns: '3rem 1fr auto',
        gap: '2rem',
        alignItems: 'flex-start',
        cursor: 'pointer',
        transition: 'border-color 0.3s',
        position: 'relative',
      }}
    >
      <span style={{
        fontSize: '11px',
        color: 'var(--text-muted)',
        fontFamily: 'monospace',
        paddingTop: '0.3rem',
      }}>
        {String(index + 1).padStart(2, '0')}
      </span>

      <div style={{ position: 'relative' }}>
        <motion.h3
          animate={{ x: hovered ? 12 : 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          style={{
            fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
            fontWeight: '600',
            letterSpacing: '-0.02em',
            marginBottom: '0.4rem',
            color: hovered ? 'var(--text-primary)' : 'var(--text-secondary)',
            transition: 'color 0.3s',
          }}
        >
          {project.title}
        </motion.h3>
        <motion.p
          animate={{ opacity: hovered ? 1 : 0, height: hovered ? 'auto' : 0 }}
          transition={{ duration: 0.2 }}
          style={{
            fontSize: '12px',
            color: 'var(--text-muted)',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            overflow: 'hidden',
            marginTop: hovered ? '0.4rem' : 0,
          }}
        >
          {project.description}
        </motion.p>
      </div>

      <div style={{ textAlign: 'right', paddingTop: '0.3rem' }}>
        <p style={{
          fontSize: '11px',
          color: 'var(--text-muted)',
          letterSpacing: '0.08em',
          marginBottom: '0.4rem',
        }}>
          {project.year}
        </p>
        <motion.div
          animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : 8 }}
          transition={{ duration: 0.2 }}
          style={{
            fontSize: '11px',
            color: 'var(--burgundy-light)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}
        >
          View →
        </motion.div>
      </div>

      <motion.div
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '0.5px',
          background: project.color,
          transformOrigin: 'left',
        }}
      />
    </motion.div>
  )
}

function Home() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <div style={{ cursor: 'none' }}>
      <Cursor />

      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '2rem 4rem',
        borderBottom: '0.5px solid var(--border)',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: 'rgba(17, 16, 8, 0.85)',
        backdropFilter: 'blur(12px)',
      }}>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            fontSize: '14px',
            letterSpacing: '0.08em',
            color: 'var(--text-secondary)',
          }}
        >
          PRATIKSHA SATISH
        </motion.span>
        <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
  {['Work', 'About', 'Contact'].map((item, i) => (
    <motion.a
      key={item}
      href={`#${item.toLowerCase()}`}
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: i * 0.1 }}
      className="hoverable"
      style={{
        fontSize: '13px',
        color: 'var(--text-secondary)',
        letterSpacing: '0.04em',
        transition: 'color 0.2s',
      }}
      onMouseEnter={e => e.target.style.color = 'var(--text-primary)'}
      onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
    >
      {item}
    </motion.a>
  ))}
  <motion.a
    href="/resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: -8 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: 0.3 }}
    className="hoverable"
    style={{
      fontSize: '13px',
      color: 'var(--burgundy-light)',
      letterSpacing: '0.04em',
      border: '0.5px solid var(--burgundy)',
      padding: '0.4rem 1rem',
      borderRadius: '2px',
      transition: 'all 0.2s',
    }}
    onMouseEnter={e => {
      e.currentTarget.style.background = 'var(--burgundy)'
      e.currentTarget.style.color = 'var(--text-primary)'
    }}
    onMouseLeave={e => {
      e.currentTarget.style.background = 'transparent'
      e.currentTarget.style.color = 'var(--burgundy-light)'
    }}
  >
    Résumé ↗
  </motion.a>
</div>
      </nav>

      <section ref={heroRef} style={{
  padding: '10rem 4rem 6rem',
  minHeight: '100vh',
  display: 'grid',
  gridTemplateColumns: '1fr 2fr',
  gap: '4rem',
  alignItems: 'center',
  overflow: 'hidden',
  position: 'relative',
}}>
        <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  style={{ alignSelf: 'center', position: 'relative', zIndex: 2 }}
>
          <motion.p
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  style={{
    fontSize: '14px',
    letterSpacing: '0.14em',
    color: 'var(--burgundy-light)',
    textTransform: 'uppercase',
    marginBottom: '1.5rem',
    whiteSpace: 'nowrap',
  }}
>
  Design Engineer · Colorado School of Mines · 2027
</motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{
              fontSize: 'clamp(3.5rem, 7vw, 7rem)',
              fontWeight: '700',
              lineHeight: '1.0',
              letterSpacing: '-0.03em',
              marginBottom: '2rem',
            }}
          >
            Pratiksha<br />
            <span style={{ color: 'var(--burgundy-light)' }}>Satish</span>
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              width: '40px',
              height: '1.5px',
              background: 'var(--burgundy)',
              marginBottom: '2rem',
              transformOrigin: 'left',
            }}
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{
              fontSize: '1.2rem',
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              maxWidth: '500px',
              marginBottom: '2rem',
            }}
          >
            Design is composition. Every detail plays a part.
          </motion.p>
          </motion.div>


              <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8, delay: 0.3 }}
  style={{
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '100vw',
    transform: 'translate(-50%, -50%)',
    zIndex: 1,
  }}
>
  <SkillWave />
  {/* <WordSearch /> */}
</motion.div>
      </section>

      <section id="work" style={{ padding: '6rem 4rem 8rem' }}>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{
            fontSize: '12px',
            letterSpacing: '0.14em',
            color: 'var(--text-muted)',
            textTransform: 'uppercase',
            marginBottom: '3rem',
          }}
        >
          Selected Work
        </motion.p>
        {projects.map((project, index) => (
          <ProjectRow key={project.id} project={project} index={index} />
        ))}
      </section>

      <section id="about" style={{
        padding: '8rem 4rem',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '4rem',
        borderTop: '0.5px solid var(--border)',
      }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/IMG_4461.JPG"
            alt="Pratiksha Satish"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '4px',
              filter: 'grayscale(20%)',
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}
        >
          <div>
            <p style={{
              fontSize: '12px',
              letterSpacing: '0.14em',
              color: 'var(--text-muted)',
              textTransform: 'uppercase',
              marginBottom: '2rem',
            }}>
              About
            </p>
            <p style={{
              fontSize: '1.1rem',
              color: 'var(--text-secondary)',
              lineHeight: '1.8',
              marginBottom: '1.5rem',
            }}>
              I'm Pratiksha Satish, a fourth-year Design Engineering student at Colorado School of Mines, pursuing a minor in Business & Entrepreneurship.            </p>
            <p style={{
              fontSize: '1.1rem',
              color: 'var(--text-secondary)',
              lineHeight: '1.8',
              marginBottom: '1.5rem',
            }}>
              I design products at the intersection of user experience, engineering, and technology. My work spans UX research, product design, and physical prototyping, where I focus on understanding user needs, defining meaningful problems, and building solutions that balance usability, functionality, and technical constraints.            </p>
            <p style={{
              fontSize: '1.1rem',
              color: 'var(--text-secondary)',
              lineHeight: '1.8',
              marginBottom: '1.5rem',
            }}>
              Throughout my undergraduate experience, I've worked on projects that have taught me to approach design holistically: asking the right questions before jumping to solutions, collaborating across disciplines, and considering the full lifecycle of a product from concept to implementation.
            </p>  
            <p style={{
              fontSize: '1.1rem',
              color: 'var(--text-secondary)',
              lineHeight: '1.8',
            }}>
              I'm also a singer. While it may seem separate from design, performing has shaped how I think about users and experiences. It taught me to understand an audience, anticipate emotions, and communicate with intention. I bring that same perspective into my design process by creating products that are not only effective, but intuitive and human-centered.
            </p>
          </div>

          <div>
            <p style={{
              fontSize: '12px',
              letterSpacing: '0.14em',
              color: 'var(--text-muted)',
              textTransform: 'uppercase',
              marginBottom: '1.5rem',
            }}>
              Skills
            </p>
            {[
              'Product Design',
              'UX / UI',
              'Physical Prototyping',
              'CAD & Modeling',
              'Arduino & Electronics',
              'Systems Thinking',
              'Fabrication',
              'Leadership',
            ].map((skill, i) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                style={{
                  borderTop: '0.5px solid var(--border)',
                  padding: '0.9rem 0',
                  fontSize: '14px',
                  color: 'var(--text-secondary)',
                  letterSpacing: '0.02em',
                }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="contact" style={{
        padding: '8rem 4rem',
        borderTop: '0.5px solid var(--border)',
      }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p style={{
            fontSize: '12px',
            letterSpacing: '0.14em',
            color: 'var(--text-muted)',
            textTransform: 'uppercase',
            marginBottom: '3rem',
          }}>
            Contact
          </p>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: '700',
            letterSpacing: '-0.03em',
            lineHeight: '1.1',
            marginBottom: '3rem',
            maxWidth: '600px',
          }}>
            Let's build something worth using.
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {[
              { label: 'Email', value: 'pratikshasatish@gmail.com', href: 'mailto:pratikshasatish@gmail.com' },
              { label: 'LinkedIn', value: 'linkedin.com/in/s-pratiksha', href: 'http://linkedin.com/in/s-pratiksha/' },
              { label: 'GitHub', value: 'github.com/pratikshasatish', href: 'https://github.com/pratikshasatish' },
            ].map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hoverable"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '1.5rem 0',
                  borderTop: '0.5px solid var(--border)',
                  color: 'var(--text-secondary)',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = 'var(--text-primary)'
                  e.currentTarget.style.borderTopColor = 'var(--burgundy)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = 'var(--text-secondary)'
                  e.currentTarget.style.borderTopColor = 'var(--border)'
                }}
              >
                <span style={{ fontSize: '12px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                  {link.label}
                </span>
                <span style={{ fontSize: '1rem', letterSpacing: '-0.01em' }}>
                  {link.value} →
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default Home