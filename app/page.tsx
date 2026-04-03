'use client'
import { useState } from 'react'

type Tab = 'top' | 'menu' | 'info' | 'contact'

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>('top')

  const navItems: { key: Tab; label: string }[] = [
    { key: 'top', label: 'トップ' },
    { key: 'menu', label: 'メニュー' },
    { key: 'info', label: '店舗情報' },
    { key: 'contact', label: 'お問い合わせ' },
  ]

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      {/* Header */}
      <header style={{ position: 'sticky', top: 0, zIndex: 50, background: 'var(--card)', borderBottom: '1px solid var(--border)', padding: '0 40px' }}>
        <div className="site-header-inner">
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span className="hero-en" style={{ fontSize: '11px', color: 'var(--accent)', letterSpacing: '0.2em' }}>Kinu Café, Kyoto</span>
            <span style={{ fontSize: '20px', fontWeight: 900, letterSpacing: '0.08em', color: 'var(--text)' }}>きぬカフェ</span>
          </div>
          <nav className="site-nav">
            {navItems.map(item => (
              <button
                key={item.key}
                onClick={() => setActiveTab(item.key)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '20px 16px',
                  fontSize: '13px',
                  letterSpacing: '0.08em',
                  color: activeTab === item.key ? 'var(--accent)' : 'var(--text-muted)',
                  borderBottom: activeTab === item.key ? '2px solid var(--accent)' : '2px solid transparent',
                  transition: 'all 0.2s',
                  whiteSpace: 'nowrap',
                  fontFamily: 'inherit',
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Content */}
      <main>
        {activeTab === 'top' && <TopSection setActiveTab={setActiveTab} />}
        {activeTab === 'menu' && <MenuSection />}
        {activeTab === 'info' && <InfoSection />}
        {activeTab === 'contact' && <ContactSection />}
      </main>

      {/* Footer */}
      <footer style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)', padding: '48px 40px', textAlign: 'center' }}>
        <p className="hero-en" style={{ fontSize: '22px', color: 'var(--accent)', marginBottom: '4px' }}>Kinu Café</p>
        <p style={{ fontSize: '18px', fontWeight: 900, letterSpacing: '0.08em', marginBottom: '12px' }}>きぬカフェ</p>
        <p style={{ fontSize: '12px', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>〒602-8393 京都府京都市上京区鳥居前町666−11</p>
        <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>営業: 月〜水・金〜日 7:00〜17:00｜定休: 木曜日</p>
        <p style={{ fontSize: '11px', color: 'var(--border)', marginTop: '24px' }}>© 2024 きぬカフェ</p>
      </footer>
    </div>
  )
}

function TopSection({ setActiveTab }: { setActiveTab: (tab: Tab) => void }) {
  return (
    <div>
      {/* Hero */}
      <section className="hero-grid" style={{ minHeight: '85vh', alignItems: 'stretch' }}>
        <div className="hero-pad" style={{ padding: '80px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'var(--card)' }}>
          <p className="hero-en" style={{ fontSize: '13px', color: 'var(--accent)', letterSpacing: '0.15em', marginBottom: '24px' }}>
            A quiet morning in Kyoto
          </p>
          <h1 className="hero-title" style={{ color: 'var(--text)', marginBottom: '28px' }}>
            着物と珈琲が<br />出迎える、<br />朝の静けさ。
          </h1>
          <p style={{ fontSize: '15px', lineHeight: 2.0, color: 'var(--text-muted)', maxWidth: '360px', marginBottom: '44px' }}>
            北野天満宮のほど近く、上七軒の路地に佇　小さな珈琲店。
            着物姿の店主が一杯一杯丁寧に淹れるコーヒーと、
            素朴なモーニングで、京都の朝ゐゆっくりお楽しみください。
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <button
              onClick={() => setActiveTab('menu')}
              style={{
                background: 'var(--accent)',
                color: '#fff',
                border: 'none',
                padding: '14px 32px',
                fontSize: '14px',
                letterSpacing: '0.08em',
                cursor: 'pointer',
                fontFamily: 'inherit',
                whiteSpace: 'nowrap',
              }}
            >
              メニューを見る
            </button>
            <button
              onClick={() => setActiveTab('info')}
              style={{
                background: 'none',
                color: 'var(--text)',
                border: '1px solid var(--border)',
                padding: '14px 32px',
                fontSize: '14px',
                letterSpacing: '0.08em',
                cursor: 'pointer',
                fontFamily: 'inherit',
                whiteSpace: 'nowrap',
              }}
            >
              アクセスを確認
            </button>
          </div>
        </div>
        <div className="hero-deco" style={{ background: 'var(--bg2)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '72px', marginBottom: '20px' }}>☕</div>
            <p className="hero-en" style={{ fontSize: '14px', color: 'var(--text-muted)', letterSpacing: '0.15em' }}>Specialty Coffee</p>
            <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '6px', letterSpacing: '0.1em' }}>京都・上京区</p>
          </div>
          {/* Decorative elements */}
          <div style={{ position: 'absolute', top: '40px', right: '40px', width: '80px', height: '80px', border: '1px solid var(--border)', borderRadius: '50%' }} />
          <div style={{ position: 'absolute', bottom: '60px', left: '40px', width: '40px', height: '40px', background: 'var(--accent)', opacity: 0.12, borderRadius: '50%' }} />
          <div style={{ position: 'absolute', top: '50%', left: '20px', width: '1px', height: '120px', background: 'var(--border)', transform: 'translateY(-50%)' }} />
        </div>
      </section>

      {/* Info Bar */}
      <section style={{ background: 'var(--accent)', padding: '20px 40px' }}>
        <div className="info-bar">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '28px', fontWeight: 900, color: '#fff' }}>4.7</span>
            <div>
              <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.85)', letterSpacing: '0.1em' }}>Google評価</p>
              <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.85)' }}>★★★★☆ 101件のクチコミ</p>
            </div>
          </div>
          <div style={{ color: '#fff', fontSize: '13px', letterSpacing: '0.05em' }}>
            北野天満宮 · 上七軒 近く
          </div>
          <div style={{ color: '#fff', fontSize: '13px' }}>
            毎朝 7:00〜17:00 営業（木曜定休）
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="main-pad" style={{ paddingTop: '80px' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
          <p className="hero-en" style={{ fontSize: '12px', color: 'var(--accent)', letterSpacing: '0.25em', marginBottom: '16px' }}>OUR STORY</p>
          <h2 className="section-title" style={{ marginBottom: '28px', fontWeight: 900, letterSpacing: '0.05em' }}>きぬカフェについて</h2>
          <p style={{ fontSize: '15px', lineHeight: 2.1, color: 'var(--text-muted)' }}>
            京都の着物文化を愛する店主が、上七軒の路地に開いた小さな珈琲店です。
            コーヒー豆は自家焙煎にこだわり、豆の種類や焙煎度合いによって最適な抽出方法をご提案。
            モーニングのホットサンドは、近所の常連さん�ちに長く愛されてき�自慢の一品です。
            観光帰りにも、地元の方の日常にも、静かに寄り添える場所でありたいと思っています。
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="main-pad" style={{ paddingTop: '56px' }}>
        <div className="grid-3">
          {[
            { icon: '🎋', en: 'Specialty Coffee', title: '自家焙煎の珈琲', desc: 'コーヒー焙煎機を店内で稼働。豆ごとに最適な焙煎と抽出方法をご提案し、一杯ぞつ丁寧に淹れます。お持ち帰り用の豆販売も。' },
            { icon: '🍞', en: 'Morning Set', title: 'モーニングセット', desc: '7時から始まるモーニング。人気のホットサンドをはじめ、ヨーグルトや手作りの小鉢が揃うやしでも。小別を將ない唗あるのごはん。' },
            { icon: '👘', en: 'Kimono Master', title: '着物姿の店主', desc: '着物姿で接客する店主との会話も楽しみのひとつ。常連さんも多く、一人でも入りやすい温かい雰囲気です。' },
          ].map((f, i) => (
            <div key={i} style={{ background: 'var(--card)', border: '1px solid var(--border)', padding: '36px 24px', textAlign: 'center' }}>
              <div style={{ fontSize: '36px', marginBottom: '12px' }}>{f.icon}</div>
              <p className="hero-en" style={{ fontSize: '11px', color: 'var(--accent)', letterSpacing: '0.15em', marginBottom: '10px' }}>{f.en}</p>
              <h3 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '14px', letterSpacing: '0.05em' }}>{f.title}</h3>
              <p style={{ fontSize: '13px', lineHeight: 1.9, color: 'var(--text-muted)' }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="main-pad" style={{ paddingTop: '64px' }}>
        <p className="hero-en" style={{ fontSize: '12px', color: 'var(--accent)', letterSpacing: '0.25em', marginBottom: '12px', textAlign: 'center' }}>VOICES</p>
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '40px', fontWeight: 900 }}>お客様の声</h2>
        <div className="grid-2">
          {[
            { text: '日本画から出てき�えうなお綺麗な着物姿の店主さんがとても素敵です。コーヒーも香り高く、ま�来�くなります。', name: 'Kou様' },
            { text: '落ち着いてカフェを楽しめる飲める空間です。気付かなければ通りすぎてしまいそうな儚げなカフェ。隠れ家的な雰囲気が最高。', name: 'FUKUDA様' },
          ].map((r, i) => (
            <div key={i} style={{ background: 'var(--card)', border: '1px solid var(--border)', padding: '28px 28px', position: 'relative' }}>
              <span style={{ fontSize: '40px', color: 'var(--accent)', opacity: 0.2, lineHeight: 1, position: 'absolute', top: '12px', left: '20px', fontFamily: 'serif' }}>"</span>
              <p style={{ fontSize: '14px', lineHeight: 2.0, color: 'var(--text-muted)', marginBottom: '20px', paddingTop: '16px' }}>{r.text}</p>
              <p className="hero-en" style={{ fontSize: '12px', color: 'var(--accent)', letterSpacing: '0.1em' }}>— {r.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}'0.25em', margieturn (
    <div className="main-pad" style={{ paddingTop: '60px' }}>
      <p className="hero-en" style={{ fontSize: '12px', color: 'var(--accent)', letterSpacing: '0.25em', marginBottom: '12px', textAlign: 'center' }}>MENU</p>
      <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '8px', fontWeight: 900 }}>メニュー</h2>
      <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '13px', marginBottom: '56px' }}>
        ※価格は税込。季節により変わる場合があります。
      </p>

      <div style={{ maxWidth: '860px', margin: '0 auto' }}>
        {/* Coffee */}
        <div style={{ marginBottom: '52px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
            <h3 style={{ fontSize: '18px', fontWeight: 700, letterSpacing: '0.15em', color: 'var(--text)' }}>珈琲・ドリンク</h3>
            <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
          </div>
          <div className="grid-2-menu">
            {[
              { name: 'ブレンドコーヒー（ホット）', price: '¥500', note: '看板メニュー。自家焙煎の香り豊かな一杯' },
              { name: 'アイスコーヒー', price: '¥550', note: 'アイス専用焙煎。すっきりとした後味' },
              { name: 'カフェラテ', price: '¥580', note: 'ミルクとのバランスが絶妙なラテ' },
              { name: 'アイスレモンティー', price: '¥520', note: 'さわやかなレモンの風味' },
              { name: '白湯', price: '¥200', note: '京都の水を使った優しい白湯' },
              { name: 'テイクアウト珈琲', price: '¥450〜', note: 'お散歩・観光のお供に' },
            ].map((item, i) => (
              <div key={i} style={{ background: 'var(--card)', border: '1px solid var(--border)', padding: '18px 20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '6px' }}>
                  <span style={{ fontSize: '14px', fontWeight: 500 }}>{item.name}</span>
                  <span style={{ fontSize: '14px', color: 'var(--accent)', whiteSpace: 'nowrap', marginLeft: '12px' }}>{item.price}</span>
                </div>
                <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{item.note}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Food */}
        <div style={{ marginBottom: '52px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
            <h3 style={{ fontSize: '18px', fontWeight: 700, letterSpacing: '0.15em', color: 'var(--text)' }}>フード・モーニング</h3>
            <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
          </div>
          <div className="grid-2-menu">
            {[
              { name: 'ホットサンド', price: '¥600', note: '人気No.1。ふわっとした食感のモーニング定番' },
              { name: 'モーニングセット', price: '¥750', note: 'ホットサンド＋コーヒーのお得セット' },
              { name: 'ヨーグルト', price: '¥350', note: '毎朝手作り。フルーツ付き' },
              { name: '日替わり小鉢', price: '¥300', note: '旬の食材を使った手作り小鉢' },
            ].map((item, i) => (
              <div key={i} style={{ background: 'var(--card)', border: '1px solid var(--border)', padding: '18px 20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '6px' }}>
                  <span style={{ fontSize: '14px', fontWeight: 500 }}>{item.name}</span>
                  <span style={{ fontSize: '14px', color: 'var(--accent)', whiteSpace: 'nowrap', marginLeft: '12px' }}>{item.price}</span>
                </div>
                <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{item.note}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Beans */}
        <div style={{ background: 'var(--card)', border: '1px solid var(--border)', padding: '32px 28px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '12px', letterSpacing: '0.08em' }}>☕ コーヒー豆の販売</h3>
          <p style={{ fontSize: '13px', lineHeight: 1.9, color: 'var(--text-muted)' }}>
            店内で焙煎した珈琲豆をお持ち帰り用にご用意しています。
            ご自宅で楽しむための最適な焙煎度合いをご提案します。100g ¥700〜（種類によって異なります）
          </p>
        </div>
      </div>
    </div>
  )
}

function InfoSection() {
  const hours = [
    { day: '月曜日', time: '7:00〜17:00', closed: false },
    { day: '火曜日', time: '7:00〜17:00', closed: false },
    { day: '水曜日', time: '7:00〜17:00', closed: false },
    { day: '木曜日', time: '定休日', closed: true },
    { day: '金曜日', time: '7:00〜17:00', closed: false },
    { day: '土曜日', time: '7:00〜17:00', closed: false },
    { day: '日曜日', time: '7:00〜17:00', closed: false },
  ]

  return (
    <div className="main-pad" style={{ paddingTop: '60px' }}>
      <p className="hero-en" style={{ fontSize: '12px', color: 'var(--accent)', letterSpacing: '0.25em', marginBottom: '12px', textAlign: 'center' }}>ACCESS</p>
      <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '48px', fontWeight: 900 }}>店舗情報・アクセス</h2>

      <div className="grid-2">
        <div>
          <div style={{ background: 'var(--card)', border: '1px solid var(--border)', padding: '32px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '24px', letterSpacing: '0.05em', borderBottom: '1px solid var(--border)', paddingBottom: '12px' }}>基本情報</h3>
            {[
              { label: '店名', value: 'きぬカフェ' },
              { label: '住所', value: '〒602-8393\n京都府京都市上京区鳥居前町666−11' },
              { label: '最寄りスポット', value: '北野天満宮 徒歩約5分\n上七軒 徒歩約3分' },
              { label: 'SNS', value: 'Instagram: @kinucafe（詳細は検索）' },
              { label: 'イートイン', value: 'あり（カウンター・テーブル席）' },
              { label: 'ペット', value: '店舗前の外席はご相談可' },
            ].map((info, i) => (
              <div key={i} style={{ display: 'flex', gap: '16px', marginBottom: '16px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '12px', color: 'var(--accent)', letterSpacing: '0.08em', minWidth: '88px', flexShrink: 0 }}>{info.label}</span>
                <span style={{ fontSize: '13px', lineHeight: 1.6, whiteSpace: 'pre-line', color: 'var(--text)' }}>{info.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div style={{ background: 'var(--card)', border: '1px solid var(--border)', padding: '32px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '24px', letterSpacing: '0.05em', borderBottom: '1px solid var(--border)', paddingBottom: '12px' }}>営業時間</h3>
            {hours.map((h, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid var(--border)', flexWrap: 'wrap', gap: '8px' }}>
                <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{h.day}</span>
                <span style={{ fontSize: '13px', color: h.closed ? 'var(--accent)' : 'var(--text)' }}>{h.time}</span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '16px', background: 'var(--card)', border: '1px solid var(--border)', padding: '24px', textAlign: 'center' }}>
            <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '12px' }}>Google マップで確認</p>
            <a
              href="https://maps.google.com/maps?q=きぬカフェ+京都市上京区鳥居前町"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                background: 'var(--accent)',
                color: '#fff',
                padding: '12px 24px',
                fontSize: '13px',
                textDecoration: 'none',
                letterSpacing: '0.05em',
                whiteSpace: 'nowrap',
              }}
            >
              地図で見る
            </a>
          </div>
        </div>
      </div>

      {/* Access Notes */}
      <div style={{ marginTop: '32px', maxWidth: '860px', background: 'var(--card)', border: '1px solid var(--border)', padding: '28px 32px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: 700, marginBottom: '12px', color: 'var(--accent)' }}>アクセスについて</h3>
        <p style={{ fontSize: '13px', lineHeight: 1.9, color: 'var(--text-muted)' }}>
          路地に面した小さなお店のため、初めての方は少しわかりにくい場合があります。
          北野天満宮の鳥居前から上七軒方面へ徒歩3〜5分。
          観光帰りのお立ち寄りも大歓迎です。混雑時はお席をお待ちいただく場合がございます。
        </p>
      </div>
    </div>
  )
}

function ContactSection() {
  return (
    <div className="main-pad" style={{ paddingTop: '60px' }}>
      <p className="hero-en" style={{ fontSize: '12px', color: 'var(--accent)', letterSpacing: '0.25em', marginBottom: '12px', textAlign: 'center' }}>CONTACT</p>
      <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '12px', fontWeight: 900 }}>お問い合わせ</h2>
      <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '13px', marginBottom: '48px' }}>
        ご不明な点やご予約のご相談はInstagramのDMまたはお電話にてお気軽にどうぞ。
      </p>

      <div className="contact-grid" style={{ maxWidth: '800px', margin: '0 auto' }}>
        {[
          {
            icon: '📷',
            en: 'Instagram',
            title: 'Instagramでご連絡',
            desc: '普段の営業の様子や季節のメニューはInstagramで発信中。DM（ダイレクトメッセージ）でのご質問も承ります。',
            action: 'https://www.instagram.com/',
            label: 'Instagramを見る',
          },
          {
            icon: '🏡',
            en: 'Walk-in',
            title: '直接お越しください',
            desc: '予約不要でご来店いただけます。席数が少ないため、混雑時はお待ちいただく場合がございます。お気軽にどうぞ。',
            action: 'https://maps.google.com/maps?q=きぬカフェ+京都市上京区鳥居前町',
            label: '地図でアクセス確認',
          },
        ].map((c, i) => (
          <div key={i} style={{ background: 'var(--card)', border: '1px solid var(--border)', padding: '40px 28px', textAlign: 'center' }}>
            <div style={{ fontSize: '44px', marginBottom: '12px' }}>{c.icon}</div>
            <p className="hero-en" style={{ fontSize: '11px', color: 'var(--accent)', letterSpacing: '0.2em', marginBottom: '10px' }}>{c.en}</p>
            <h3 style={{ fontSize: '15px', fontWeight: 700, marginBottom: '16px', letterSpacing: '0.05em' }}>{c.title}</h3>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.9, marginBottom: '24px' }}>{c.desc}</p>
            <a
              href={c.action}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                background: 'var(--accent)',
                color: '#fff',
                padding: '12px 28px',
                fontSize: '13px',
                textDecoration: 'none',
                letterSpacing: '0.05em',
                whiteSpace: 'nowrap',
              }}
            >
              {c.label}
            </a>
          </div>
        ))}
      </div>

      <div style={{ maxWidth: '800px', margin: '32px auto 0', background: 'var(--card)', border: '1px solid var(--border)', padding: '24px 28px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: 700, marginBottom: '12px', color: 'var(--accent)' }}>営業に関するご注意</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {[
            '木曜日は定休日です。営業時間は7:00〜17:00となります。',
            '席数が少ないため、グループでのご来店は事前にご連絡いただけると助かります。',
            '夜間の営業は予約制となっています（詳細はInstagramをご確認ください）。',
          ].map((note, i) => (
            <li key={i} style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '8px', paddingLeft: '16px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>·</span>
              {note}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
