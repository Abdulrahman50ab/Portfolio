# Light Theme Design System Specification

## 1. Design Philosophy
The portfolio adopts an **Editorial Light Mode** standard. The visual identity emphasizes crisp clarity, typographical hierarchy, and structural minimalism inspired by top-tier modern software engineering portfolios.

---

## 2. Color System

### Primary Backgrounds
| Token | Hex Value | Application |
|---|---|---|
| `bg-white` | `#FFFFFF` | Primary canvas, cards, navbar surface |
| `bg-slate-50` | `#F8FAFC` | Alternating section backgrounds, input fields, badges |
| `bg-slate-100` | `#F1F5F9` | Progress tracks, subtle tag badges, image fallbacks |

### Neutrals & Typography
| Token | Hex Value | Application |
|---|---|---|
| `text-slate-900` | `#0F172A` | Primary headings, prominent titles, active labels |
| `text-slate-800` | `#1E293B` | Subheadings, card titles, emphasis text |
| `text-slate-600` | `#475569` | Body copy, descriptions, secondary text |
| `text-slate-500` | `#64748B` | Captions, dates, meta subtitles |
| `text-slate-400` | `#94A3B8` | Placeholder text, icon neutral states |

### Brand Accents
| Token | Hex Value | Application |
|---|---|---|
| `indigo-600` | `#4F46E5` | Primary CTA buttons, key highlights, active nav indicators |
| `indigo-700` | `#4338CA` | Hover states, focused primary accents |
| `indigo-50` | `#EEF2FF` | Highlight badges, tag fills, icon backgrounds |
| `emerald-600` | `#059669` | Success states, availability indicator |
| `rose-600` | `#E11D48` | Error notifications |

---

## 3. Spatial Geometry & 8pt Grid
- **Section Padding:** `py-24` (96px) desktop, `py-16` (64px) mobile.
- **Card Padding:** `p-6` (24px) to `p-8` (32px).
- **Element Spacing:** Consistent increments of 4px / 8px (`space-y-2`, `space-y-4`, `space-y-6`, `space-y-8`).
- **Corner Radii:**
  - Micro badges / buttons: `rounded-lg` (8px)
  - Cards & form containers: `rounded-2xl` (16px)
  - Pills / avatar: `rounded-full` (9999px)

---

## 4. Iconography Standards
- **Vector Source:** 100% `lucide-react`.
- **Stroke Uniformity:** 1.5px – 2px stroke width.
- **Strict Ban:** Zero decorative emojis (`✨`, `🌟`, `🚀`, `🔥`) or clichéd neon glowing effects.
