import { motion } from 'framer-motion'
import { useState } from 'react'

// --- Original dot + ring cursor (kept for easy revert) ---
// function Cursor() {
//   const [pos, setPos] = useState({ x: -100, y: -100 })
//   const [hovered, setHovered] = useState(false)
//
//   useState(() => {
//     const move = e => setPos({ x: e.clientX, y: e.clientY })
//     const over = e => {
//       if (e.target.closest('.hoverable')) setHovered(true)
//       else setHovered(false)
//     }
//     window.addEventListener('mousemove', move)
//     window.addEventListener('mouseover', over)
//     return () => {
//       window.removeEventListener('mousemove', move)
//       window.removeEventListener('mouseover', over)
//     }
//   }, [])
//
//   return (
//     <>
//       <motion.div
//         animate={{ x: pos.x - 4, y: pos.y - 4 }}
//         transition={{ type: 'spring', stiffness: 800, damping: 40 }}
//         style={{
//           position: 'fixed',
//           width: 8,
//           height: 8,
//           borderRadius: '50%',
//           background: 'var(--burgundy)',
//           pointerEvents: 'none',
//           zIndex: 9999,
//           mixBlendMode: 'screen',
//         }}
//       />
//       <motion.div
//         animate={{
//           x: pos.x - 20,
//           y: pos.y - 20,
//           scale: hovered ? 2 : 1,
//           opacity: hovered ? 0.6 : 0.3,
//         }}
//         transition={{ type: 'spring', stiffness: 200, damping: 30 }}
//         style={{
//           position: 'fixed',
//           width: 40,
//           height: 40,
//           borderRadius: '50%',
//           border: '1px solid var(--burgundy)',
//           pointerEvents: 'none',
//           zIndex: 9999,
//         }}
//       />
//     </>
//   )
// }

function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [hovered, setHovered] = useState(false)

  useState(() => {
    const move = e => setPos({ x: e.clientX, y: e.clientY })
    const over = e => {
      if (e.target.closest('.hoverable')) setHovered(true)
      else setHovered(false)
    }
    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', over)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
    }
  }, [])

  return (
    <>
      <motion.div
        animate={{ x: pos.x - 3, y: pos.y - 3 }}
        transition={{ type: 'spring', stiffness: 800, damping: 40 }}
        style={{
          position: 'fixed',
          width: 6,
          height: 6,
          borderRadius: '50%',
          background: 'var(--burgundy)',
          pointerEvents: 'none',
          zIndex: 9999,
        }}
      />
      <motion.div
        animate={{ y: pos.y }}
        transition={{ type: 'spring', stiffness: 600, damping: 40 }}
        style={{
          position: 'fixed',
          left: 0,
          right: 0,
          height: 1,
          background: 'var(--burgundy)',
          opacity: hovered ? 0.3 : 0.15,
          pointerEvents: 'none',
          zIndex: 9998,
        }}
      />
      <motion.div
        animate={{ x: pos.x }}
        transition={{ type: 'spring', stiffness: 600, damping: 40 }}
        style={{
          position: 'fixed',
          top: 0,
          bottom: 0,
          width: 1,
          background: 'var(--burgundy)',
          opacity: hovered ? 0.3 : 0.15,
          pointerEvents: 'none',
          zIndex: 9998,
        }}
      />
    </>
  )
}

export default Cursor