# Animation Resources for Portfolio

Researched 2025/2026 — best FE animation libraries và patterns cho Next.js portfolio.

## Stack đang dùng

```bash
npm install motion lenis
```

- **motion** (formerly framer-motion) — page transitions, scroll reveal, micro-interactions, parallax
- **lenis** — smooth scroll, chuẩn agency-quality feel

---

## Libraries Overview

### 🥇 Motion (formerly Framer Motion) v12+

**Import:** `import { motion, AnimatePresence, useScroll, useTransform } from "motion/react"`

| Feature | API |
|---|---|
| Scroll-triggered reveal | `whileInView={{ opacity: 1 }}` + `viewport={{ once: true }}` |
| Stagger children | `variants` + `staggerChildren: 0.1` |
| Page transitions | `<AnimatePresence>` trong `template.tsx` |
| Parallax | `useScroll()` + `useTransform()` |
| Hover micro-interactions | `whileHover={{ scale: 1.05 }}` |
| Spring physics | default cho positional values |
| Layout animations | `layout` prop |

```bash
npm install motion
```

### 🥈 GSAP + ScrollTrigger

Dùng khi cần scroll storytelling phức tạp (pinned sections, horizontal scroll, scrubbed timelines).

```bash
npm install gsap @gsap/react
```

```ts
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)
```

### 🥉 React Three Fiber — 3D / WebGL

```bash
npm install three @react-three/fiber @react-three/drei
npm install --save-dev @types/three
```

Lazy-load với next/dynamic để tránh SSR issues:
```tsx
const Scene = dynamic(() => import("../components/Scene"), { ssr: false })
```

### Lenis — Smooth Scroll

```tsx
"use client"
import Lenis from "lenis"
import { useEffect } from "react"

export function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1, duration: 1.2 })
    const raf = (time: number) => { lenis.raf(time); requestAnimationFrame(raf) }
    requestAnimationFrame(raf)
    return () => lenis.destroy()
  }, [])
  return <>{children}</>
}
```

---

## Animation Patterns

### Scroll-triggered reveal (Motion)

```tsx
<motion.div
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>
  <Content />
</motion.div>
```

### Staggered list reveal

```tsx
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
}
const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

<motion.ul variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }}>
  {items.map(i => <motion.li key={i.id} variants={item} />)}
</motion.ul>
```

### Page transitions (Next.js App Router)

Dùng `template.tsx` (không phải `layout.tsx`) để re-render mỗi route:

```tsx
// app/template.tsx
"use client"
import { AnimatePresence, motion } from "motion/react"
import { usePathname } from "next/navigation"

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
```

### Custom Cursor

```tsx
"use client"
const [position, setPosition] = useState({ x: 0, y: 0 })

useEffect(() => {
  const move = (e: MouseEvent) => setPosition({ x: e.clientX, y: e.clientY })
  window.addEventListener("mousemove", move)
  return () => window.removeEventListener("mousemove", move)
}, [])

<motion.div
  className="fixed top-0 left-0 w-4 h-4 rounded-full bg-violet-500 pointer-events-none z-50 mix-blend-difference"
  animate={{ x: position.x - 8, y: position.y - 8 }}
  transition={{ type: "spring", stiffness: 500, damping: 30 }}
/>
```

### Text character stagger

```tsx
const text = "Hello World"
<motion.h1>
  {text.split("").map((char, i) => (
    <motion.span key={i}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.05 }}>
      {char === " " ? "\u00A0" : char}
    </motion.span>
  ))}
</motion.h1>
```

### Parallax

```tsx
const { scrollYProgress } = useScroll()
const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])

<motion.div style={{ y }} className="absolute inset-0">
  <Background />
</motion.div>
```

### 3D card hover tilt

```tsx
const [rotateX, setRotateX] = useState(0)
const [rotateY, setRotateY] = useState(0)

const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
  const rect = e.currentTarget.getBoundingClientRect()
  const x = (e.clientY - rect.top - rect.height / 2) / 10
  const y = -(e.clientX - rect.left - rect.width / 2) / 10
  setRotateX(x); setRotateY(y)
}

<motion.div
  onMouseMove={handleMouseMove}
  onMouseLeave={() => { setRotateX(0); setRotateY(0) }}
  animate={{ rotateX, rotateY }}
  style={{ transformStyle: "preserve-3d" }}
  transition={{ type: "spring", stiffness: 300, damping: 20 }}
>
  <Card />
</motion.div>
```

---

## Pre-built Component Libraries

| Library | Cài đặt | Ghi chú |
|---|---|---|
| **MagicUI** | `npx magicui-cli add <component>` | 150+ animated components với Motion + Tailwind |
| **Aceternity UI** | Copy/paste source | 120K users, spotlight, lamp effect, gradient borders |
| **shadcn/ui** | `npx shadcn@latest add` | Base UI, thêm Motion layer |

**MagicUI components hay dùng cho portfolio:**
- `TextAnimate` — character/word/line text reveal
- `ShimmerButton` — animated CTA
- `BentoGrid` — animated project grid
- `TypingAnimation` — typewriter
- `NumberTicker` — animated số (stats)
- `WordFadeIn` — word-by-word fade
- `Meteors` — falling particles

---

## Performance

| Issue | Solution |
|---|---|
| Bundle size | Motion tree-shakable — import chỉ cần |
| Scroll jank | `whileInView` dùng IntersectionObserver, không scroll listener |
| Reduced motion | `useReducedMotion()` hook từ Motion |
| 3D on mobile | Skip canvas: `useMediaQuery("(max-width: 768px)")` |
| SSR R3F | `dynamic(() => import("..."), { ssr: false })` |

### Accessibility — Reduced Motion

```tsx
import { useReducedMotion } from "motion/react"

function AnimatedCard() {
  const prefersReduced = useReducedMotion()
  return (
    <motion.div
      initial={{ opacity: 0, y: prefersReduced ? 0 : 40 }}
      whileInView={{ opacity: 1, y: 0 }}
    />
  )
}
```

---

## Design Trends 2025/2026

- **Dark mode default** — #09090b (zinc-950) + violet/indigo accent
- **Bento grid** — card grid với hover animations
- **Glass morphism** — `backdrop-blur` + subtle border
- **Typography-first** — large bold type, text animation là main visual
- **Monochrome + single accent** — black/white + 1 màu vibrant
- **Smooth page transitions** — clip-path hoặc curtain wipe
- **Magnetic elements** — cursor attract buttons với spring lag
- **Grain/noise texture** — SVG filter noise overlay
