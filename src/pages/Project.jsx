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
    video: '/ModularFrame/frame-assembly-demo.mp4',
    videoLabel: 'Assembly Demo',
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
    overview: "A coffee table with a concealed, motorized storage compartment activated by a hidden book-pull mechanism. The design balances sleek aesthetics with real functionality, integrating electronics, structural engineering, and precision mechanisms to store items securely without giving anything away.",
    problem: "Most furniture prioritizes either looks or function, rarely both. The challenge was building a table that looked completely ordinary while hiding a fully functional motorized compartment that could be triggered discreetly.",
    process: "We designed the scissor-lift mechanism in SolidWorks, 3D printed all structural components, and integrated a 12V geared motor with a polarity reversal switch. The hidden book-pull trigger was the hardest part to get right; it needed to feel natural while reliably activating the lift every time.",
    outcome: "A fully functional coffee table with a motorized scissor-lift compartment that supports up to 20 lbs and travels 8 inches. The trigger activates seamlessly, and the table keeps its normal look at all times.",
    takeaway: "This project taught me to combine aesthetic design with real engineering systems. Getting electronics, CAD, and mechanical prototyping to work together, without compromising durability or safety, was the hardest part and the most rewarding.",
    video: '/HiddenChapter/hidden-chapter-demo.mp4',
    images: [
      { src: '/HiddenChapter/hidden-chapter-table.png', label: 'Final Table' },
      { src: '/HiddenChapter/hidden-chapter-mechanism.png', label: 'Scissor-Lift Mechanism' },
      { src: '/HiddenChapter/hidden-chapter-build.png', label: 'Build Process' },
    ],
  },
  {
    id: 4,
    title: "Piano Playing Octopus Automaton",
    category: "Mechanical Engineering · Fabrication",
    year: "2024",
    color: "#6b3a2a",
    role: "Mechanical Engineer & Designer",
    skills: ["CAD & Modeling", "Fabrication", "3D Printing", "Mechanical Design"],
    overview: "A fully 3D-printed, hand-cranked automaton built to resemble an octopus playing piano, combining mechanical precision with artistic expression in one interactive piece.",
    problem: "Purely mechanical automatons often feel static or lifeless. The challenge was building a hand-cranked mechanism that produced genuinely lifelike, synchronized motion, coordinating leg movement with music, instead of one repetitive action.",
    process: "The automaton runs on a PLA-printed frame and body to cut friction and improve motion efficiency, a custom camshaft system with offset cams for staggered, lifelike leg motion, and a printed gear system that syncs crank rotation with both leg movement and piano key actuation. Hybrid materials, PLA for structure and wood for dowels, keep the motion fluid without sacrificing stability, and a music box mechanism with tempered steel tongs produces clear, resonant tones.",
    outcome: "A fully functional, hand-cranked automaton with a modular design for easy assembly, troubleshooting, and future upgrades, synchronizing leg motion, key actuation, and music in a single mechanism.",
    takeaway: "This project pushed me to merge artistry and engineering into one working piece. I strengthened my skills in iterative redesign, material science, and precision motion design while learning to troubleshoot synchronization between mechanical and auditory systems. It sharpened my appreciation for mechanical art that blends form, function, and storytelling.",
    videos: [
      { src: '/OctopusAutomaton/octopus-mechanism-demo.mp4', label: 'Mechanism Demo' },
      { src: '/OctopusAutomaton/octopus-full-demo.mov', label: 'Full Demo' },
    ],
    images: [
      { src: '/OctopusAutomaton/octopus-concept-sketch.png', label: 'Concept Sketch' },
      { src: '/OctopusAutomaton/octopus-piano-front.jpg', label: 'Front View' },
      { src: '/OctopusAutomaton/octopus-side-view.jpg', label: 'Mechanism View' },
    ],
  },
  {
    id: 5,
    title: "Teaching Piano",
    category: "Product Design · Arduino",
    year: "2024",
    color: "#2a3a6b",
    role: "Product Designer & Engineer",
    skills: ["CAD & Modeling", "Arduino & Electronics", "Product Design", "Prototyping"],
    overview: "A piano prototype that helps beginners learn by combining visual and tactile feedback with Arduino-based tracking, turning practice into a more engaging, interactive experience.",
    problem: "Beginners often lack real-time feedback on note accuracy, making it hard to know if they're playing correctly without a teacher present.",
    process: "The prototype tracks notes in real time and displays visual feedback as learners play, with an interface built to simplify complex concepts for beginners. Arduino microcontroller integration handles responsive, accurate key detection, and the modular design leaves room for future upgrades like sound output and richer feedback mechanisms.",
    outcome: "A functional 3D-printed piano prototype with working keys, paired with a hand-drawn note-tracking guide to test the visual feedback concept alongside the hardware.",
    takeaway: "This project taught me to merge hardware and software into one interactive learning tool. I built skills in system integration, adaptive design, and user-centered development while identifying what to improve next. I'm now exploring how visual cues could help people with hearing impairments learn piano, combining accessibility with intuitive design to make music education more inclusive.",
    images: [
      { src: '/TeachingPiano/piano-prototype.png', label: 'Prototype' },
      { src: '/TeachingPiano/piano-note-guide.png', label: 'Note Tracking Guide' },
      { src: '/TeachingPiano/piano-cad-base.png', label: 'Base CAD' },
      { src: '/TeachingPiano/piano-cad-housing.png', label: 'Housing CAD' },
      { src: '/TeachingPiano/piano-cad-keys.png', label: 'Key Assembly CAD' },
      { src: '/TeachingPiano/piano-cad-panel.png', label: 'Panel CAD' },
    ],
  },
  {
    id: 6,
    title: "Artist's Organizer",
    category: "Product Design · Fabrication",
    year: "2024",
    color: "#5a3a1a",
    role: "Product Designer & Fabricator",
    skills: ["Woodworking", "CAD & Modeling", "Prototyping", "Space Planning"],
    overview: "A compact oil painting organizer built to cut clutter and maximize efficiency in small or shared studio spaces, with a layout that supports both active painting and clean storage.",
    problem: "Painters working in small or shared studios often deal with cluttered, disorganized setups for palettes, brushes, and paints, slowing down their workflow and making materials hard to reach mid-painting.",
    process: "The organizer uses a three-tier drawer system for wet palettes, clean brushes, and bulk paint storage, an integrated paint rack and grooved brush holder for quick access to frequently used supplies, and a layout that positions paper towels, brushes, and paints to minimize movement while painting. Everything fits into a compact, portable footprint built for small or multi-purpose studios.",
    outcome: "A fully built wooden organizer with a three-tier drawer system, integrated paint rack, and grooved brush holder, designed with room to grow: left-handed configurations and expanded storage among the planned upgrades.",
    takeaway: "This project taught me to combine user-focused design with practical engineering. Through iterative prototyping and usability testing, I learned to turn feedback into real improvements while designing for a range of users. I strengthened my skills in space optimization, woodworking, and prototyping while keeping scalability in mind, with future versions aimed at expanding accessibility through modular attachments and customizable layouts.",
    images: [
      { src: '/ArtistOrganizer/organizer-early-prototype.png', label: 'Early Prototype' },
      { src: '/ArtistOrganizer/organizer-brush-rack.png', label: 'Brush Rack' },
      { src: '/ArtistOrganizer/organizer-drawer-stack.png', label: 'Drawer Stack' },
      { src: '/ArtistOrganizer/organizer-full-assembly.png', label: 'Full Assembly' },
      { src: '/ArtistOrganizer/organizer-drawers-open.png', label: 'Drawers Open' },
      { src: '/ArtistOrganizer/organizer-in-use.png', label: 'In Use' },
    ],
  },
  {
    id: 7,
    title: "Arc SSG",
    category: "Product Design · Hardware/Software",
    year: "2026",
    color: "#0f3d4a",
    role: "Market Research & App Development",
    skills: ["Market Research", "App Design", "UX Research", "Product Strategy", "Wireframing"],
    overview: "Arc SSG is a heads-up display (HUD) system for ski and snowboard goggles that overlays real-time data, speed, altitude, temperature, navigation, and phone notifications, directly into the rider's field of view. Built as a modular add-on compatible with a wide range of goggle styles, it pairs with a companion app for configuring preferences, tracking run history, and viewing social features, so riders never need to pull out a phone on the mountain.",
    problem: "Skiers and snowboarders often use their phones on the slopes to check data, respond to messages, or navigate, creating real safety risks by taking their eyes off the terrain and raising the chance of collisions or losing gear like phones and gloves in the cold. Existing wearables like smart watches force the same distracting look-away interaction, and no current product puts live data directly into a skier's line of sight.",
    process: "The team built a working prototype through four iterations: starting with sensor validation and serial monitor output, moving to web-based HUD rendering with live serial data, then wireless BLE data streaming with a standalone HTML HUD, and finally a Micro-OLED screen paired with a beamsplitter to project through bird-path optics onto the goggle visor. The current prototype uses a 3D-printed enclosure housing a Raspberry Pi Zero, IMU sensor, ESP32, and BME680 temperature sensor. As lead on market research and app development, I ran competitive analysis against products like Sirius AR and Rekkie, defined the target user persona (avid skiers spending 10+ days per season), and designed the companion app wireframe, covering login, HUD configuration, and a navigational map feature for trail data, hazard zones, and live rider tracking.",
    outcome: "A functional prototype proving that live sensor data can render through an optical HUD in real time, alongside a defined go-to-market strategy: licensing the HUD, sensor platform, and companion software to established goggle manufacturers instead of competing directly as a hardware brand. Market sizing put the addressable premium goggle market at $2.7 to $3.6 billion annually, with a companion app subscription tier as a secondary recurring revenue stream.",
    takeaway: "This project sharpened my ability to connect user research with product strategy on a hardware-software product, turning a real safety problem into both a validated prototype and a business model. Working across market research, competitive positioning, and app design taught me how technical feasibility, user behavior, and business viability need to move together, not get solved in isolation.",
        images: [
      { src: '/ArcSSG/arcssg.webp', label: 'Overview' },
    ],
    videos: [
      { src: '/ArcSSG/arcssg-hud-flyover.mp4', label: 'HUD Flyover Demo' },
      { src: '/ArcSSG/arcssg-nav-map-demo.mp4', label: 'Navigation Map Demo' },
      { src: '/ArcSSG/arcssg-app-wireframe-demo.mp4', label: 'App Wireframe Walkthrough' },
    ],
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
            
              <a href={project.figmaLink}
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

        {project.video && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ marginBottom: '5rem' }}
          >
            <p style={{ fontSize: '11px', letterSpacing: '0.12em', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '2rem' }}>{project.videoLabel || 'Demo'}</p>
            <video
              src={project.video}
              controls
              style={{
                width: '100%',
                maxWidth: '700px',
                borderRadius: '8px',
                border: '0.5px solid var(--border)',
              }}
            />
          </motion.div>
        )}

        {project.videos && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ marginBottom: '5rem' }}
          >
            <p style={{ fontSize: '11px', letterSpacing: '0.12em', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '2rem' }}>Demos</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {project.videos.map((vid, i) => (
                <div key={i}>
                  <video
  src={vid.src}
  controls
  style={{
    width: '100%',
    maxWidth: '500px',
    borderRadius: '8px',
    border: '0.5px solid var(--border)',
    marginBottom: '0.75rem',
  }}
/>
                  <p style={{ fontSize: '12px', color: 'var(--text-muted)', letterSpacing: '0.06em' }}>{vid.label}</p>
                </div>
              ))}
            </div>
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