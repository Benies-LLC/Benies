interface Props {
  dark?: boolean   // true = white Ben + teal ies (for dark backgrounds)
  size?: 'sm' | 'md' | 'lg'
}

export default function BeniesLogo({ dark = false, size = 'md' }: Props) {
  const heights: Record<string, number> = { sm: 24, md: 30, lg: 40 }
  const h = heights[size]

  // Maintain aspect ratio: lockup is ~6:1 wide
  const w = h * 6

  const iconSize   = h
  const rx         = iconSize * 0.27
  const bSize      = iconSize * 0.64
  const bX         = iconSize * 0.14
  const bY         = iconSize * 0.82
  const pillW      = iconSize * 0.28
  const pillH      = iconSize * 0.10
  const pillX      = iconSize * 0.60
  const pillY      = iconSize * 0.14
  const pillRx     = pillH / 2
  const wordX      = iconSize * 1.22
  const wordY      = iconSize * 0.76
  const fontSize   = iconSize * 0.70

  const benColor   = dark ? '#FFFFFF' : '#0076BC'
  const iesColor   = '#00BCD8'

  return (
    <svg
      width={w}
      height={h}
      viewBox={`0 0 ${w} ${h}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Benies"
    >
      {/* Icon: blue rounded square */}
      <rect width={iconSize} height={iconSize} rx={rx} fill="#0076BC" />
      {/* Lowercase b */}
      <text
        x={bX}
        y={bY}
        fontFamily="DM Sans, Arial, sans-serif"
        fontSize={bSize}
        fontWeight="700"
        fill="white"
      >
        b
      </text>
      {/* Teal pill accent */}
      <rect x={pillX} y={pillY} width={pillW} height={pillH} rx={pillRx} fill="#00BCD8" />
      {/* Wordmark */}
      <text
        fontFamily="DM Sans, Arial, sans-serif"
        fontSize={fontSize}
        fontWeight="700"
        y={wordY}
      >
        <tspan x={wordX} fill={benColor}>Ben</tspan>
        <tspan fill={iesColor}>ies</tspan>
      </text>
    </svg>
  )
}
