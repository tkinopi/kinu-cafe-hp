import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'きぬカフェ | 京都・上京区の隠れ家珈琲店',
  description: '京都市上京区鳥居前町。着物姿の店主が一杯一杯丁寧に淹れる珈琲と、こだわりのモーニング。北野天満宮近くの静かな隠れ家カフェ。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
