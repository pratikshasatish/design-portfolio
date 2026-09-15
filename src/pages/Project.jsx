import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Cursor from '../components/Cursor'

const projects = [
  {
  id: 1,
  title: "Modular Picture Frame",
  category: "Product Design · Engineering",
  year: "2024",
  color: "#8b1a2a",
  role: "Product Designer & Engineer",
  skills: ["CAD & Modeling", "Product Design", "Sketching", "Prototyping", "Systems Design"],
  overview: "A modular, customizable frame system built for accessibility and scale. Interchangeable sections let users create different frame sizes and styles from one core system, aimed at families, frequent movers, and people with limited mobility or fine motor control.",
  problem: "How could new materials, mechanisms, and personalization make picture frames more usable and accessible?",
  process: "The frame uses interlocking sections for unlimited size and configuration options, snap-on borders for aesthetic customization, and a magnetic backing system that makes swapping photos easy for users with arthritis or fine motor challenges. An adjustable hanging mechanism simplifies leveling and reduces wall damage. Materials were chosen to stay lightweight, durable, and cost-effective at scale.",
  outcome: "A compact, shippable design paired with a website concept for virtual visualization, ordering, and accessory selection. Positioned as a patent-ready product for the elderly, families who move often, and people with disabilities.",
  takeaway: "This project pushed me to connect engineering decisions to market viability, not just function. I'm now exploring a patent filing and scaled production, with elderly users and frequent movers as the primary market.",
  images: [
    { src: '/ModularFrame/frame-subsystem-callouts.png', label: 'Subsystem Callouts' },
    { src: '/ModularFrame/frame-prototype-assembled.png', label: 'Assembled Prototype' },
    { src: '/ModularFrame/frame-prototype-parts.png', label: 'Component Breakdown' },
    { src: '/ModularFrame/frame-app-mockups.png', label: 'App & Website Mockups' },
  ],
},
  {
  id: 2,
  title: "Eventure App Wireframe",
  category: "UX/UI Design",
  year: "2024",
  color: "#1a5a3a",
  role: "UX Designer & Researcher",
  skills: ["UX Design", "Wireframing", "User Research", "Figma", "Prototyping"],
  overview: "A mobile app that helps users discover and plan local events, from organized business events to casual hangouts with friends. Built through a persona-driven design process focused on connecting communities without a cluttered interface.",
  problem: "Event apps typically cover either formal events or casual plans, never both. Users had no single place to see what friends were doing nearby, find local events, and create their own hangouts.",
  process: "I built user personas and mapped core flows before designing screens. The key insight: users needed two distinct modes, organized events and general hangouts, inside one shared interface. Navigation centers on a bottom tab bar, with map-first exploration as the primary entry point.",
  outcome: "A full wireframe covering 15+ screens: home, map exploration, search, event detail, event creation, profile, and settings. The design surfaces social context at every step, showing who you know at each event, to reduce friction in deciding whether to attend.",
  screens: [
    { src: '/Eventure/eventure-home.png', label: 'Home' },
    { src: '/Eventure/eventure-map.png', label: 'Map Exploration' },
    { src: '/Eventure/eventure-search-hangout.png', label: 'Hangout Events' },
    { src: '/Eventure/eventure-search-organized.png', label: 'Organized Events' },
    { src: '/Eventure/eventure-create.png', label: 'Create Event' },
    { src: '/Eventure/eventure-settings.png', label: 'Settings' },
  ],
  takeaway: "This project sharpened how I think about designing for social context, not just usability. People don't just want to find events, they want to know who else will be there, and that reshaped nearly every screen.",
  figmaLink: 'https://www.figma.com/proto/gYK0bVQjj8G6dFMRMn2B12/Eventure-App---Design-Components?node-id=1-470&t=UBEWxkfrAy1E2sC5-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A470',
},

  {
  id: 3,
  title: "The Hidden Chapter",
  category: "Systems Integration · Engineering",
  year: "2024",
  color: "#3a2a6b",
  role: "Systems Designer & Engineer",
  skills: ["Electronics", "CAD & SolidWorks", "Systems Integration", "3D Printing", "Fabrication"],
  overview: "A systems integration coffee table featuring a concealed, motorized storage compartment activated by a hidden book-pull mechanism. Designed to balance sleek aesthetics with practical functionality, the table integrates electronics, structural engineering, and precision mechanisms to securely store items while maintaining a seamless appearance.",
  problem: "Most furniture either prioritizes aesthetics or functionality — rarely both. The challenge was designing a table that looked completely normal while hiding a fully functional motorized compartment that could be triggered discreetly.",
  process: "We designed the scissor-lift mechanism in SolidWorks, 3D printed all structural components, and integrated a 12V geared motor with polarity reversal switch system. The hidden book-pull trigger was the most challenging part — it needed to feel natural while reliably activating the lift.",
  outcome: "A fully functional coffee table with a motorized scissor-lift compartment capable of supporting up to 20 lbs, with 8 inches of travel. The book-pull trigger activates seamlessly and the table maintains its aesthetic at all times.",
  video: '/HiddenChapter/hidden-chapter-demo.mp4',
  images: [
  { src: '/HiddenChapter/hidden-chapter-table.png', label: 'Final Table' },
  { src: '/HiddenChapter/hidden-chapter-mechanism.png', label: 'Scissor-Lift Mechanism' },
  { src: '/HiddenChapter/hidden-chapter-build.png', label: 'Build Process' },
],
  takeaway: "This project taught me to combine aesthetic design with complex engineering systems. Integrating electronics, CAD, and mechanical prototyping while ensuring durability and user safety was the core challenge — and the most rewarding part.",
}, 
{
  id: 4,
  title: "Piano Playing Octopus Automaton",
  category: "Mechanical Engineering · Fabrication",
  year: "2024",
  color: "#6b3a2a",
  role: "Mechanical Engineer & Designer",
  skills: ["CAD & Modeling", "Fabrication", "3D Printing", "Mechanical Design"],
  overview: "A fully 3D-printed hand-cranked automaton designed to resemble an octopus playing a piano, combining mechanical precision with artistic expression to create a dynamic, interactive display piece.",
  problem: "Purely mechanical automatons often feel static or lifeless; the challenge was creating a hand-cranked mechanism that could produce genuinely lifelike, synchronized motion — coordinating leg movement with music — rather than a single repetitive action.",
  process: "The automaton uses a PLA-printed frame and body to reduce friction and improve motion efficiency, a custom camshaft system with offset cams to achieve staggered, lifelike octopus leg motion, and an integrated printed gear system to synchronize crank rotation with both leg movement and piano key actuation. Hybrid material selection — PLA for structural components and wood for dowels — balances fluid motion with mechanical stability, and a music box mechanism with tempered steel tongs delivers clear, resonant musical tones.",
  outcome: "A fully functional hand-cranked automaton with a modular design for easy assembly, troubleshooting, and future upgrades, synchronizing octopus leg motion with piano key actuation and music box tones in a single hand-cranked mechanism.",
  takeaway: "This project challenged me to merge artistry and engineering by creating a functional, visually engaging automaton. I strengthened my skills in iterative redesign, material science, and precision motion design while learning to troubleshoot synchronization between mechanical and auditory systems. The experience highlighted the power of cross-disciplinary collaboration to solve complex design problems and inspired me to continue exploring mechanical art that blends form, function, and storytelling.",
},
{
  id: 5,
  title: "Teaching Piano",
  category: "Product Design · Arduino",
  year: "2024",
  color: "#2a3a6b",
  role: "Product Designer & Engineer",
  skills: ["CAD & Modeling", "Arduino & Electronics", "Product Design", "Prototyping"],
  overview: "A piano prototype designed to help beginners learn by combining visual and tactile feedback with Arduino-based tracking, creating an engaging, interactive learning experience.",
  problem: "Beginners learning piano often lack real-time feedback on note accuracy, making it hard to know if they're playing correctly without a teacher present.",
  process: "The prototype features real-time note tracking and a visual display to guide learners as they play, a user-friendly interface that simplifies complex concepts for beginners, and Arduino microcontroller integration for responsive and accurate key detection. It was built with a modular design to support future upgrades, including sound output and advanced feedback mechanisms.",
  outcome: "A functional 3D-printed piano prototype with working keys, paired with a hand-drawn note-tracking guide to test the visual feedback concept alongside the hardware.",
  takeaway: "This project taught me to merge hardware and software into an interactive educational tool. I developed skills in system integration, adaptive design, and user-centered development while identifying key improvements for future iterations. Moving forward, I aim to refine this prototype into a fully functional teaching aid capable of using visual cues to help people with hearing impairments learn piano — combining accessibility features with intuitive design to make music education more inclusive.",
},
{
  id: 6,
  title: "Artist's Organizer",
  category: "Product Design · Fabrication",
  year: "2024",
  color: "#5a3a1a",
  role: "Product Designer & Fabricator",
  skills: ["Woodworking", "CAD & Modeling", "Prototyping", "Space Planning"],
  overview: "A compact oil painting organizer designed to reduce clutter and maximize efficiency in small or shared studio spaces. The design integrates practical storage solutions with an intuitive layout, supporting both painting in progress and organized storage when not in use.",
  problem: "Painters working in small or shared studio spaces often struggle with cluttered, disorganized setups for palettes, brushes, and paints — slowing down workflow and making materials hard to access mid-painting.",
  process: "The organizer features a three-tier drawer system for wet palettes, clean brushes, and bulk storage of paints, mediums, and tools, an integrated paint rack and grooved brush holder for efficient access to frequently used supplies, and a hierarchical layout that positions paper towels, wet brushes, and paints for minimal movement while painting — all built into a compact, portable footprint optimized for small or multi-purpose studios.",
  outcome: "A fully built wooden organizer with a three-tier drawer system, integrated paint rack, and grooved brush holder, designed with modular potential for future customization — including left-handed configurations and expanded storage.",
  takeaway: "This project taught me how to combine user-focused design with practical engineering. Through iterative prototyping and usability testing, I learned to translate feedback into meaningful improvements while designing for diverse users. I strengthened my skills in space optimization, woodworking, and prototyping while keeping scalability in mind. Future iterations aim to expand accessibility, with features like modular attachments and customizable layouts to meet the needs of more artists.",
},
{
  id: 7,
  title: "Arc SSG",
  category: "Product Design · Hardware/Software",
  year: "2026",
  color: "#0f3d4a",
  role: "Market Research & App Development",
  skills: ["Market Research", "App Design", "UX Research", "Product Strategy", "Wireframing"],
  overview: "Arc SSG is a heads-up display (HUD) system for ski and snowboard goggles that overlays real-time data — speed, altitude, temperature, navigation, and phone notifications — directly into the rider's field of view. Designed as a modular add-on compatible with a wide range of goggle styles, the system pairs with a companion mobile app for configuring preferences, tracking run history, and viewing social features, eliminating the need to pull out a phone on the mountain.",
  problem: "Skiers and snowboarders frequently use their phones on the slopes to check data, respond to messages, or navigate — creating serious safety risks by taking their eyes off the terrain and increasing the chance of collisions or losing gear like phones and gloves in the cold. Existing wearables like smart watches require the same distracting look-away interaction, and no current product puts live data directly into a skier's line of sight.",
  process: "The team built a working prototype through four iterations: starting with sensor validation and serial monitor output, moving to web-based HUD rendering with live serial data, then wireless BLE data streaming with a standalone HTML HUD, and finally integrating a Micro-OLED screen with a beamsplitter to project through bird-path optics onto the goggle visor. The current prototype uses a 3D-printed enclosure housing a Raspberry Pi Zero, IMU sensor, ESP32, and BME680 temperature sensor. As lead on market research and app development, I conducted competitive analysis against products like Sirius AR and Rekkie, defined the target user persona (avid skiers spending 10+ days per season), and designed the companion app wireframe covering login, HUD configuration, and a navigational map feature for trail data, hazard zones, and live rider tracking.",
  outcome: "A functional prototype validating that live sensor data can be rendered through an optical HUD in real time, alongside a defined go-to-market strategy: a technology licensing model where Arc SSG's HUD, sensor platform, and companion software are licensed to established goggle manufacturers rather than competing directly as a hardware brand. Market sizing placed the addressable premium goggle market at $2.7–3.6 billion annually, with a companion app subscription tier as a secondary recurring revenue stream.",
  takeaway: "This project sharpened my ability to connect user research with product strategy on a hardware-software product — translating a real safety problem into both a validated prototype and a business model. Working across market research, competitive positioning, and app design taught me how technical feasibility, user behavior, and business viability need to move together rather than being solved in isolation.",
},
]

function Project() {
  const { id } = useParams()
  const navigate = useNavigate()
  const project = projects.find(p => p.id === parseInt(id))

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!project) return (
    <div style={{ padding: '4rem', color: 'var(--text-primary)' }}>
      Project not found. <button onClick={() => navigate('/')}>Go back</button>
    </div>
  )

  return (
    <div style={{ cursor: 'none', minHeight: '100vh' }}>
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
        <button
          onClick={() => navigate('/')}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-secondary)',
            fontSize: '13px',
            letterSpacing: '0.04em',
            cursor: 'pointer',
          }}
          onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
        >
          ← Back
        </button>
        <span style={{
          fontSize: '14px',
          letterSpacing: '0.08em',
          color: 'var(--text-secondary)',
        }}>
          PRATIKSHA SATISH
        </span>
      </nav>

      <main style={{ padding: '10rem 6rem 8rem', maxWidth: '1200px', margin: '0 auto' }}>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '5rem' }}
        >
          <p style={{
            fontSize: '12px',
            letterSpacing: '0.14em',
            color: 'var(--burgundy-light)',
            textTransform: 'uppercase',
            marginBottom: '1rem',
          }}>
            {project.category}
          </p>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: '700',
            letterSpacing: '-0.03em',
            lineHeight: '1.05',
            marginBottom: '1rem',
          }}>
            {project.title}
          </h1>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)', letterSpacing: '0.06em' }}>
            {project.year}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            borderTop: '0.5px solid var(--border)',
            borderBottom: '0.5px solid var(--border)',
            padding: '2rem 0',
            marginBottom: '5rem',
          }}
        >
          <div>
            <p style={{ fontSize: '11px', letterSpacing: '0.12em', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Role</p>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>{project.role}</p>
          </div>
          <div>
            <p style={{ fontSize: '11px', letterSpacing: '0.12em', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Skills</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {project.skills.map(skill => (
                <span key={skill} style={{
                  fontSize: '12px',
                  padding: '0.3rem 0.8rem',
                  border: '0.5px solid var(--border)',
                  borderRadius: '20px',
                  color: 'var(--text-secondary)',
                }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ marginBottom: '5rem' }}
        >
          <p style={{ fontSize: '11px', letterSpacing: '0.12em', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Overview</p>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>{project.overview}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '3rem',
            marginBottom: '5rem',
            borderTop: '0.5px solid var(--border)',
            paddingTop: '3rem',
          }}
        >
          {[
            { label: 'Problem', content: project.problem },
            { label: 'Process', content: project.process },
            { label: 'Outcome', content: project.outcome },
          ].map(({ label, content }) => (
            <div key={label}>
              <p style={{ fontSize: '11px', letterSpacing: '0.12em', color: 'var(--burgundy-light)', textTransform: 'uppercase', marginBottom: '1rem' }}>{label}</p>
              <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>{content}</p>
            </div>
          ))}
        </motion.div>

{project.figmaLink && (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.4 }}
    style={{ marginBottom: '5rem' }}
  >
    <p style={{ fontSize: '11px', letterSpacing: '0.12em', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '2rem' }}>Prototype</p>
    <a
      href={project.figmaLink}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.75rem',
        fontSize: '14px',
        color: 'var(--burgundy-light)',
        border: '0.5px solid var(--burgundy)',
        padding: '1rem 2rem',
        borderRadius: '2px',
        letterSpacing: '0.04em',
        transition: 'all 0.2s',
        textDecoration: 'none',
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
      View Interactive Prototype ↗
    </a>
  </motion.div>
)}

{project.images && (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.5 }}
    style={{ marginBottom: '5rem' }}
  >
    <p style={{ fontSize: '11px', letterSpacing: '0.12em', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '2rem' }}>Process</p>
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '1.5rem',
    }}>
            {project.images.map((img, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
        >
          <img
            src={img.src}
            alt={img.label}
            style={{
              width: '100%',
              borderRadius: '8px',
              border: '0.5px solid var(--border)',
              marginBottom: '0.75rem',
              objectFit: 'cover',
              aspectRatio: '16/9',
            }}
          />
          <p style={{ fontSize: '12px', color: 'var(--text-muted)', letterSpacing: '0.06em', textAlign: 'center' }}>{img.label}</p>
        </motion.div>
      ))}
    </div>
  </motion.div>
)}

{project.screens && (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.5 }}
    style={{ marginBottom: '5rem' }}
  >
    <p style={{ fontSize: '11px', letterSpacing: '0.12em', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '2rem' }}>Screens</p>
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '1.5rem',
    }}>
      {project.screens.map((img, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
        >
          <img
            src={img.src}
            alt={img.label}
            style={{
              width: '100%',
              borderRadius: '8px',
              border: '0.5px solid var(--border)',
              marginBottom: '0.75rem',
              objectFit: 'cover',
              aspectRatio: '16/9',
            }}
          />
          <p style={{ fontSize: '12px', color: 'var(--text-muted)', letterSpacing: '0.06em', textAlign: 'center' }}>{img.label}</p>
        </motion.div>
      ))}
    </div>
  </motion.div>
)}

          <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ borderTop: '0.5px solid var(--border)', paddingTop: '3rem' }}
        >
          <p style={{ fontSize: '11px', letterSpacing: '0.12em', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Takeaway</p>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>{project.takeaway}</p>
        </motion.div>

      </main>
    </div>
  )
}

export default Project