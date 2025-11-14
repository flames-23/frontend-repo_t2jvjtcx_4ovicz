import { useEffect, useRef, useState } from 'react'

// A smooth, magnetic custom cursor: small dot + soft ring
export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const pos = useRef({ x: 0, y: 0 })
  const mouse = useRef({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY }
      setVisible(true)
    }
    const handleLeave = () => setVisible(false)

    window.addEventListener('mousemove', handleMove)
    window.addEventListener('mouseleave', handleLeave)

    let raf
    const animate = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.2
      pos.current.y += (mouse.current.y - pos.current.y) * 0.2

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.current.x}px, ${mouse.current.y}px, 0)`
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`
      }
      raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mouseleave', handleLeave)
    }
  }, [])

  useEffect(() => {
    const handleEnter = () => {
      if (ringRef.current) ringRef.current.style.width = ringRef.current.style.height = '56px'
    }
    const handleExit = () => {
      if (ringRef.current) ringRef.current.style.width = ringRef.current.style.height = '36px'
    }
    const selectors = ['a', 'button', '.cursor-focus']
    const enterNodes = selectors.flatMap(sel => Array.from(document.querySelectorAll(sel)))
    enterNodes.forEach(n => {
      n.addEventListener('mouseenter', handleEnter)
      n.addEventListener('mouseleave', handleExit)
    })
    return () => {
      enterNodes.forEach(n => {
        n.removeEventListener('mouseenter', handleEnter)
        n.removeEventListener('mouseleave', handleExit)
      })
    }
  }, [])

  return (
    <>
      <div
        ref={ringRef}
        style={{ opacity: visible ? 1 : 0 }}
        className="pointer-events-none fixed left-0 top-0 z-[100] h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/60 bg-white/5 backdrop-blur-sm transition-all duration-200 will-change-transform mix-blend-difference"
      />
      <div
        ref={dotRef}
        style={{ opacity: visible ? 1 : 0 }}
        className="pointer-events-none fixed left-0 top-0 z-[101] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white will-change-transform mix-blend-difference"
      />
    </>
  )
}
