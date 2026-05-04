import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ProjectTag } from '@/components/ui/Badge'
import { projects } from '@/data/projects'
import type { Project } from '@/types'

/* ══════════════════════════════════════════════════════════════
   SVG THUMBNAIL ILLUSTRATIONS
   Each one is a dark-themed product UI mockup unique to the project.
   All SVG attributes are JSX-camelCased.
   ══════════════════════════════════════════════════════════════ */

function HiveMedixThumb() {
  return (
    <svg viewBox="0 0 400 210" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden>
      <defs>
        <linearGradient id="hm-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#071428" />
          <stop offset="100%" stopColor="#0d2149" />
        </linearGradient>
        <linearGradient id="hm-glow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
        </linearGradient>
        <pattern id="hm-dots" x="0" y="0" width="22" height="22" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1" fill="#1e3a5f" />
        </pattern>
      </defs>

      {/* bg layers */}
      <rect width="400" height="210" fill="url(#hm-bg)" />
      <rect width="400" height="210" fill="url(#hm-dots)" opacity="0.5" />
      <rect x="60" y="0" width="280" height="210" fill="url(#hm-glow)" />

      {/* App bar */}
      <rect x="20" y="16" width="360" height="34" rx="8" fill="#112244" stroke="#1e3a6c" strokeWidth="1" />
      {/* Medical cross */}
      <rect x="34" y="25" width="3" height="16" rx="1.5" fill="#ef4444" />
      <rect x="28" y="31" width="15" height="3" rx="1.5" fill="#ef4444" />
      <text x="52" y="38" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="Inter,sans-serif">HiveMedix</text>
      <circle cx="355" cy="33" r="5" fill="#22c55e" opacity="0.9" />
      <text x="363" y="37" fill="#4ade80" fontSize="8" fontFamily="Inter,sans-serif">Live</text>

      {/* ECG line */}
      <path
        d="M 20 105 L 60 105 L 78 82 L 96 128 L 114 65 L 132 145 L 150 105 L 185 105 L 203 88 L 221 122 L 239 95 L 257 105 L 380 105"
        fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      />
      {/* ECG glow */}
      <path
        d="M 20 105 L 60 105 L 78 82 L 96 128 L 114 65 L 132 145 L 150 105"
        fill="none" stroke="#93c5fd" strokeWidth="5" strokeLinecap="round" opacity="0.18"
      />

      {/* Metric cards */}
      <rect x="20" y="140" width="108" height="52" rx="8" fill="#0d2149" stroke="#1e3a6c" strokeWidth="1" />
      <text x="32" y="158" fill="#64748b" fontSize="7.5" fontFamily="Inter,sans-serif" letterSpacing="0.6">HEART RATE</text>
      <text x="32" y="178" fill="#e2e8f0" fontSize="16" fontWeight="700" fontFamily="Inter,sans-serif">72 <tspan fontSize="8" fill="#64748b">bpm</tspan></text>

      <rect x="146" y="140" width="108" height="52" rx="8" fill="#0d2149" stroke="#1e3a6c" strokeWidth="1" />
      <text x="158" y="158" fill="#64748b" fontSize="7.5" fontFamily="Inter,sans-serif" letterSpacing="0.6">APPTS TODAY</text>
      <text x="158" y="178" fill="#e2e8f0" fontSize="16" fontWeight="700" fontFamily="Inter,sans-serif">12</text>

      <rect x="272" y="140" width="108" height="52" rx="8" fill="#042b0f" stroke="#14532d" strokeWidth="1" />
      <text x="284" y="158" fill="#4ade80" fontSize="7.5" fontFamily="Inter,sans-serif" letterSpacing="0.6">STATUS</text>
      <text x="284" y="178" fill="#22c55e" fontSize="16" fontWeight="700" fontFamily="Inter,sans-serif">Active</text>
    </svg>
  )
}

function AgrolinkThumb() {
  return (
    <svg viewBox="0 0 400 210" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden>
      <defs>
        <linearGradient id="ag-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#071a0e" />
          <stop offset="100%" stopColor="#0a2e16" />
        </linearGradient>
        <linearGradient id="ag-glow" x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#10b981" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
        </linearGradient>
        <pattern id="ag-grid" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
          <path d="M28 0L0 0 0 28" fill="none" stroke="#0d3320" strokeWidth="0.6" />
        </pattern>
      </defs>

      <rect width="400" height="210" fill="url(#ag-bg)" />
      <rect width="400" height="210" fill="url(#ag-grid)" opacity="0.7" />
      <rect width="400" height="210" fill="url(#ag-glow)" />

      {/* Leaf shape */}
      <path
        d="M 200 40 C 240 40 270 70 270 110 C 270 150 240 175 200 175 C 160 175 130 150 130 110 C 130 70 160 40 200 40 Z"
        fill="rgba(16,185,129,0.1)" stroke="#10b981" strokeWidth="1.5"
      />
      {/* Leaf vein */}
      <line x1="200" y1="45" x2="200" y2="170" stroke="#10b981" strokeWidth="1.2" opacity="0.6" />
      <line x1="200" y1="80" x2="240" y2="100" stroke="#10b981" strokeWidth="0.8" opacity="0.4" />
      <line x1="200" y1="100" x2="155" y2="115" stroke="#10b981" strokeWidth="0.8" opacity="0.4" />
      <line x1="200" y1="120" x2="240" y2="135" stroke="#10b981" strokeWidth="0.8" opacity="0.4" />
      <line x1="200" y1="140" x2="162" y2="150" stroke="#10b981" strokeWidth="0.8" opacity="0.4" />

      {/* Scan rings */}
      <circle cx="200" cy="108" r="28" fill="none" stroke="#10b981" strokeWidth="1.2" opacity="0.7" strokeDasharray="4 3" />
      <circle cx="200" cy="108" r="44" fill="none" stroke="#10b981" strokeWidth="0.9" opacity="0.4" strokeDasharray="4 4" />
      <circle cx="200" cy="108" r="60" fill="none" stroke="#10b981" strokeWidth="0.6" opacity="0.2" strokeDasharray="5 5" />
      {/* Center dot */}
      <circle cx="200" cy="108" r="5" fill="#10b981" opacity="0.9" />

      {/* Confidence badge */}
      <rect x="240" y="52" width="140" height="28" rx="14" fill="#042b0f" stroke="#14532d" strokeWidth="1" />
      <circle cx="256" cy="66" r="4" fill="#22c55e" />
      <text x="267" y="70" fill="#4ade80" fontSize="10" fontWeight="700" fontFamily="Inter,sans-serif">97.3% Confidence</text>

      {/* Disease label */}
      <rect x="20" y="52" width="144" height="28" rx="8" fill="#042b0f" stroke="#14532d" strokeWidth="1" />
      <text x="32" y="63" fill="#64748b" fontSize="7" fontFamily="Inter,sans-serif" letterSpacing="0.5">DETECTION</text>
      <text x="32" y="75" fill="#e2e8f0" fontSize="9" fontWeight="600" fontFamily="Inter,sans-serif">Leaf Rust</text>

      {/* Bottom chips */}
      <rect x="20" y="175" width="88" height="22" rx="6" fill="#0a2e16" stroke="#166534" strokeWidth="1" />
      <text x="30" y="190" fill="#4ade80" fontSize="9" fontFamily="Inter,sans-serif">☁ 28°C · Rain</text>
      <rect x="118" y="175" width="100" height="22" rx="6" fill="#0a2e16" stroke="#166534" strokeWidth="1" />
      <text x="128" y="190" fill="#4ade80" fontSize="9" fontFamily="Inter,sans-serif">GHS 12.40 / kg</text>
      <rect x="228" y="175" width="80" height="22" rx="6" fill="#0a2e16" stroke="#166534" strokeWidth="1" />
      <text x="238" y="190" fill="#4ade80" fontSize="9" fontFamily="Inter,sans-serif">AI Powered</text>
    </svg>
  )
}

function EmergencyThumb() {
  return (
    <svg viewBox="0 0 400 210" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden>
      <defs>
        <linearGradient id="em-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1a0000" />
          <stop offset="100%" stopColor="#2d0505" />
        </linearGradient>
        <radialGradient id="em-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ef4444" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
        </radialGradient>
        <pattern id="em-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="0.8" fill="#3b0000" />
        </pattern>
      </defs>

      <rect width="400" height="210" fill="url(#em-bg)" />
      <rect width="400" height="210" fill="url(#em-dots)" opacity="0.8" />
      <rect width="400" height="210" fill="url(#em-glow)" />

      {/* Pulsing rings */}
      <circle cx="200" cy="100" r="75" fill="none" stroke="#ef4444" strokeWidth="0.8" opacity="0.15" />
      <circle cx="200" cy="100" r="55" fill="none" stroke="#ef4444" strokeWidth="1" opacity="0.25" />
      <circle cx="200" cy="100" r="36" fill="none" stroke="#ef4444" strokeWidth="1.2" opacity="0.4" />

      {/* SOS button */}
      <circle cx="200" cy="100" r="26" fill="#7f1d1d" stroke="#ef4444" strokeWidth="2" />
      <text x="200" y="106" fill="white" fontSize="13" fontWeight="900" fontFamily="Inter,sans-serif" textAnchor="middle" letterSpacing="1">SOS</text>

      {/* Status bar */}
      <rect x="20" y="16" width="360" height="30" rx="8" fill="#200000" stroke="#3b0000" strokeWidth="1" />
      {/* Alert dot */}
      <circle cx="34" cy="31" r="5" fill="#ef4444" />
      <rect x="34" y="26" width="0" height="0" />
      <text x="46" y="35" fill="#fca5a5" fontSize="10" fontWeight="700" fontFamily="Inter,sans-serif">EMERGENCY ACTIVE</text>
      <text x="318" y="35" fill="#64748b" fontSize="9" fontFamily="Inter,sans-serif">03:24</text>

      {/* Location pin */}
      <path d="M 80 95 C 80 80 95 68 110 68 C 125 68 140 80 140 95 C 140 112 110 130 110 130 C 110 130 80 112 80 95 Z"
        fill="rgba(239,68,68,0.15)" stroke="#ef4444" strokeWidth="1.2" />
      <circle cx="110" cy="95" r="6" fill="#ef4444" />

      {/* Info cards */}
      <rect x="20" y="155" width="115" height="42" rx="8" fill="#200000" stroke="#450a0a" strokeWidth="1" />
      <text x="32" y="172" fill="#f87171" fontSize="7.5" fontFamily="Inter,sans-serif" letterSpacing="0.5">RESPONSE ETA</text>
      <text x="32" y="188" fill="#fca5a5" fontSize="16" fontWeight="700" fontFamily="Inter,sans-serif">3 <tspan fontSize="9" fill="#f87171">min</tspan></text>

      <rect x="147" y="155" width="115" height="42" rx="8" fill="#200000" stroke="#450a0a" strokeWidth="1" />
      <text x="159" y="172" fill="#f87171" fontSize="7.5" fontFamily="Inter,sans-serif" letterSpacing="0.5">RESPONDERS</text>
      <text x="159" y="188" fill="#fca5a5" fontSize="16" fontWeight="700" fontFamily="Inter,sans-serif">2 <tspan fontSize="9" fill="#f87171">nearby</tspan></text>

      <rect x="274" y="155" width="106" height="42" rx="8" fill="#1a0000" stroke="#450a0a" strokeWidth="1" />
      <text x="286" y="172" fill="#f87171" fontSize="7.5" fontFamily="Inter,sans-serif" letterSpacing="0.5">GPS SIGNAL</text>
      <text x="286" y="188" fill="#22c55e" fontSize="14" fontWeight="700" fontFamily="Inter,sans-serif">Active</text>
    </svg>
  )
}

function InvoiceWebThumb() {
  return (
    <svg viewBox="0 0 400 210" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden>
      <defs>
        <linearGradient id="iv-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0b1220" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
        <linearGradient id="iv-doc" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#172033" />
        </linearGradient>
        <pattern id="iv-dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="0.8" fill="#1e293b" />
        </pattern>
      </defs>

      <rect width="400" height="210" fill="url(#iv-bg)" />
      <rect width="400" height="210" fill="url(#iv-dots)" opacity="0.6" />

      {/* Browser chrome */}
      <rect x="30" y="12" width="340" height="188" rx="10" fill="#111827" stroke="#1e293b" strokeWidth="1.5" />
      {/* Title bar */}
      <rect x="30" y="12" width="340" height="28" rx="10" fill="#1e293b" />
      <rect x="30" y="28" width="340" height="12" fill="#1e293b" />
      <circle cx="48" cy="26" r="4" fill="#ef4444" opacity="0.7" />
      <circle cx="62" cy="26" r="4" fill="#f59e0b" opacity="0.7" />
      <circle cx="76" cy="26" r="4" fill="#22c55e" opacity="0.7" />
      {/* URL bar */}
      <rect x="100" y="19" width="200" height="14" rx="4" fill="#0f172a" />
      <text x="200" y="30" fill="#475569" fontSize="7.5" fontFamily="Inter,sans-serif" textAnchor="middle">invoiceweb.app/dashboard</text>

      {/* Invoice header */}
      <rect x="46" y="52" width="308" height="30" rx="6" fill="#1a2540" />
      <text x="60" y="72" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="Inter,sans-serif">INVOICE</text>
      <text x="234" y="67" fill="#94a3b8" fontSize="8" fontFamily="Inter,sans-serif">#INV-2024-0042</text>
      <text x="234" y="78" fill="#94a3b8" fontSize="8" fontFamily="Inter,sans-serif">Due: Dec 31, 2024</text>

      {/* Line items */}
      {[
        { y: 96,  label: 'Mobile App Development', amt: '$2,400.00' },
        { y: 114, label: 'UI/UX Design & Prototype', amt: '$900.00' },
        { y: 132, label: 'API Integration & Testing', amt: '$580.00' },
        { y: 150, label: 'Deployment & DevOps Setup', amt: '$400.00' },
      ].map(({ y, label, amt }) => (
        <g key={y}>
          <line x1="46" y1={y} x2="354" y2={y} stroke="#1e293b" strokeWidth="1" />
          <text x="60" y={y + 13} fill="#94a3b8" fontSize="8.5" fontFamily="Inter,sans-serif">{label}</text>
          <text x="354" y={y + 13} fill="#e2e8f0" fontSize="8.5" fontFamily="Inter,sans-serif" textAnchor="end">{amt}</text>
        </g>
      ))}

      {/* Total row */}
      <rect x="220" y="163" width="134" height="26" rx="6" fill="#1a2540" />
      <text x="234" y="180" fill="#94a3b8" fontSize="9" fontFamily="Inter,sans-serif">Total</text>
      <text x="346" y="180" fill="#f59e0b" fontSize="11" fontWeight="700" fontFamily="Inter,sans-serif" textAnchor="end">$4,280.00</text>

      {/* PAID stamp */}
      <rect x="46" y="163" width="54" height="26" rx="5" fill="rgba(34,197,94,0.12)" stroke="#16a34a" strokeWidth="1.5" />
      <text x="73" y="180" fill="#22c55e" fontSize="10" fontWeight="800" fontFamily="Inter,sans-serif" textAnchor="middle" letterSpacing="1">PAID</text>
    </svg>
  )
}

function WificombatThumb() {
  return (
    <svg viewBox="0 0 400 210" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden>
      <defs>
        <linearGradient id="wc-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0a0c2e" />
          <stop offset="100%" stopColor="#0f0f3d" />
        </linearGradient>
        <linearGradient id="wc-glow" x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#6366f1" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
        </linearGradient>
        <pattern id="wc-grid" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
          <path d="M30 0L0 0 0 30" fill="none" stroke="#1e1b4b" strokeWidth="0.6" />
        </pattern>
      </defs>

      <rect width="400" height="210" fill="url(#wc-bg)" />
      <rect width="400" height="210" fill="url(#wc-grid)" opacity="0.7" />
      <rect width="400" height="210" fill="url(#wc-glow)" />

      {/* Top bar */}
      <rect x="20" y="14" width="360" height="30" rx="8" fill="#13124a" stroke="#2e2b77" strokeWidth="1" />
      <text x="36" y="33" fill="#a5b4fc" fontSize="11" fontWeight="700" fontFamily="Inter,sans-serif">Wificombat</text>
      <rect x="288" y="21" width="84" height="16" rx="6" fill="#4338ca" />
      <text x="330" y="33" fill="white" fontSize="8" fontWeight="600" fontFamily="Inter,sans-serif" textAnchor="middle">Dashboard</text>

      {/* Stats row */}
      {[
        { x: 20,  label: 'Students', value: '2,840', color: '#818cf8' },
        { x: 115, label: 'Courses',  value: '64',    color: '#a78bfa' },
        { x: 210, label: 'Live Now', value: '12',    color: '#34d399' },
        { x: 305, label: 'Avg Score', value: '87%',  color: '#f59e0b' },
      ].map(({ x, label, value, color }) => (
        <g key={x}>
          <rect x={x} y="58" width="85" height="44" rx="8" fill="#13124a" stroke="#2e2b77" strokeWidth="1" />
          <text x={x + 12} y="73" fill="#64748b" fontSize="7" fontFamily="Inter,sans-serif" letterSpacing="0.4">{label.toUpperCase()}</text>
          <text x={x + 12} y="91" fill={color} fontSize="16" fontWeight="800" fontFamily="Inter,sans-serif">{value}</text>
        </g>
      ))}

      {/* Progress bars */}
      <text x="20" y="122" fill="#64748b" fontSize="8" fontFamily="Inter,sans-serif" letterSpacing="0.4">ACTIVE COURSES</text>
      {[
        { y: 130, label: 'Flutter Mastery',    pct: 78, color: '#818cf8' },
        { y: 148, label: 'React Fundamentals', pct: 54, color: '#a78bfa' },
        { y: 166, label: 'AI & Machine Learning', pct: 32, color: '#34d399' },
      ].map(({ y, label, pct, color }) => (
        <g key={y}>
          <text x="20" y={y + 10} fill="#94a3b8" fontSize="8" fontFamily="Inter,sans-serif">{label}</text>
          <rect x="20" y={y + 14} width="360" height="6" rx="3" fill="#1e1b4b" />
          <rect x="20" y={y + 14} width={360 * pct / 100} height="6" rx="3" fill={color} opacity="0.85" />
          <text x="388" y={y + 21} fill={color} fontSize="8" fontFamily="Inter,sans-serif" textAnchor="end">{pct}%</text>
        </g>
      ))}
    </svg>
  )
}

function HolocronThumb() {
  return (
    <svg viewBox="0 0 400 210" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden>
      <defs>
        <linearGradient id="hl-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0d0119" />
          <stop offset="100%" stopColor="#1a0533" />
        </linearGradient>
        <linearGradient id="hl-glow" cx="50%" cy="50%" r="50%" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="hl-center" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
        </radialGradient>
        <pattern id="hl-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="0.8" fill="#2e1065" />
        </pattern>
      </defs>

      <rect width="400" height="210" fill="url(#hl-bg)" />
      <rect width="400" height="210" fill="url(#hl-dots)" opacity="0.7" />
      <circle cx="200" cy="105" r="90" fill="url(#hl-center)" />

      {/* Holocron cube (stylised Star Wars holocron shape) */}
      {/* Bottom face */}
      <path d="M200 130 L230 113 L200 96 L170 113 Z" fill="#3b0764" stroke="#7c3aed" strokeWidth="1" />
      {/* Right face */}
      <path d="M230 113 L230 82 L200 65 L200 96 Z" fill="#4c0d8a" stroke="#7c3aed" strokeWidth="1" />
      {/* Left face */}
      <path d="M170 113 L200 96 L200 65 L170 82 Z" fill="#2e0659" stroke="#7c3aed" strokeWidth="1" />
      {/* Top face */}
      <path d="M170 82 L200 65 L230 82 L200 99 Z" fill="#5b21b6" stroke="#a78bfa" strokeWidth="1" />
      {/* Center glow dot */}
      <circle cx="200" cy="90" r="4" fill="#a78bfa" opacity="0.9" />
      {/* Orbital ring */}
      <ellipse cx="200" cy="97" rx="38" ry="14" fill="none" stroke="#7c3aed" strokeWidth="0.8" opacity="0.5" strokeDasharray="3 3" />

      {/* Branding */}
      <text x="200" y="148" fill="#a78bfa" fontSize="13" fontWeight="800" fontFamily="Inter,sans-serif" textAnchor="middle" letterSpacing="2">HOLOCRON LABS</text>
      <text x="200" y="162" fill="#7c3aed" fontSize="8" fontFamily="Inter,sans-serif" textAnchor="middle" letterSpacing="1">INVOICE TEMPLATE SYSTEM</text>

      {/* Document preview strip */}
      <rect x="44" y="170" width="312" height="28" rx="8" fill="#1a0533" stroke="#3b0764" strokeWidth="1" />
      {/* Doc icon */}
      <rect x="58" y="177" width="10" height="13" rx="1.5" fill="#4c0d8a" stroke="#7c3aed" strokeWidth="0.8" />
      <rect x="60" y="181" width="6" height="1.2" rx="0.6" fill="#a78bfa" opacity="0.7" />
      <rect x="60" y="184" width="4" height="1.2" rx="0.6" fill="#a78bfa" opacity="0.5" />
      <text x="76" y="188" fill="#94a3b8" fontSize="8.5" fontFamily="Inter,sans-serif">invoice_template_v2.tsx</text>
      <rect x="278" y="176" width="64" height="16" rx="5" fill="#3b1a7a" />
      <text x="310" y="187" fill="#c4b5fd" fontSize="8" fontFamily="Inter,sans-serif" textAnchor="middle" fontWeight="600">PDF Export</text>

      {/* Top branding bar */}
      <rect x="20" y="14" width="360" height="28" rx="8" fill="#13012b" stroke="#3b0764" strokeWidth="1" />
      <circle cx="34" cy="28" r="5" fill="#7c3aed" opacity="0.8" />
      <text x="46" y="32" fill="#c4b5fd" fontSize="10" fontWeight="600" fontFamily="Inter,sans-serif">Freelance · Holocron Labs</text>
      <rect x="302" y="20" width="68" height="16" rx="6" fill="#3b0764" />
      <text x="336" y="31" fill="#a78bfa" fontSize="8" fontFamily="Inter,sans-serif" textAnchor="middle">v2.0 Shipped</text>
    </svg>
  )
}

/* ══════════════════════════════════════════════════════════════
   THUMBNAIL REGISTRY
   Maps each project id → its SVG illustration component.
   ══════════════════════════════════════════════════════════════ */

const THUMBS: Record<string, () => JSX.Element> = {
  'hivemedix':               HiveMedixThumb,
  'agrolink':                AgrolinkThumb,
  'Ghana-emergency-response': EmergencyThumb,
  'invoice-web':             InvoiceWebThumb,
  'wificombat-elearning':    WificombatThumb,
  'holocron-invoice':        HolocronThumb,
}

function Fallback() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
      <span className="text-gray-400 text-xs font-mono">No preview</span>
    </div>
  )
}

/* ══════════════════════════════════════════════════════════════
   ANIMATION VARIANTS
   ══════════════════════════════════════════════════════════════ */

const container = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.09 } },
}

const cardAnim = {
  hidden:  { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
}

/* ══════════════════════════════════════════════════════════════
   PROJECT CARD
   ══════════════════════════════════════════════════════════════ */

function ProjectCard({ project }: { project: Project }) {
  const Thumb = THUMBS[project.id] ?? Fallback

  return (
    <motion.article
      variants={cardAnim}
      whileHover={{ y: -8, boxShadow: '0 32px 64px rgba(0,0,0,0.18)' }}
      transition={{ type: 'spring', stiffness: 240, damping: 22 }}
      className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-card flex flex-col
        hover:border-gray-300 transition-colors duration-300"
    >
      {/* ── Thumbnail ── */}
      <div className="h-52 overflow-hidden relative">
        <div className="w-full h-full transition-transform duration-500 group-hover:scale-[1.03]">
          <Thumb />
        </div>
        {/* Subtle shimmer on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300
          bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
      </div>

      {/* ── Body ── */}
      <div className="flex flex-col flex-1 p-6 pt-5">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tags.map((t) => (
            <ProjectTag key={t}>{t}</ProjectTag>
          ))}
        </div>

        <h3 className="font-bold text-gray-900 text-[0.95rem] leading-snug mb-2 group-hover:text-primary-600 transition-colors">
          {project.title}
        </h3>

        <p className="text-sm text-gray-500 leading-[1.75] flex-1 mb-5 line-clamp-3">
          {project.description}
        </p>

        <div className="flex gap-2 mt-auto pt-4 border-t border-gray-100">
          {project.links.demo && (
            <a
              href={project.links.demo}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold
                text-primary-600 border border-primary-200 bg-primary-50
                hover:bg-primary-600 hover:text-white hover:border-primary-600
                transition-all duration-200"
            >
              <ExternalLink size={11} /> Live Demo
            </a>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold
                text-gray-600 border border-gray-200 bg-gray-50
                hover:bg-gray-900 hover:text-white hover:border-gray-900
                transition-all duration-200"
            >
              <Github size={11} /> GitHub
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

/* ══════════════════════════════════════════════════════════════
   SECTION
   ══════════════════════════════════════════════════════════════ */

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-gray-50/60">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="Featured Work"
          title="Projects I've Built"
          subtitle="Real-world products designed, built, and shipped — spanning mobile, web, and full-stack."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
