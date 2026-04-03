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
}'0.25em', marginBottom: '12px', textAlign: 'center' }}>MENU</p>
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
              { name: 'ホットサンド', price: '¥600', note: '人気No.1。ふわっとし�食感のモーニング定番' },
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
            店内で焙煎し�珈琲豆をお持ち帰り用にご用意しています。
            ご自宅で楽し　ためは最適な焙煎度合いをご提案します。100g ¥700〜(縮朚に�って喵業市なります)
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
    { day: '金雜日', time: '7:00〜17:00', closed: false },
    { day: '土曜日', time: '7:00〜17:00', closed: false },
    { day: '日曜日', time: '7:00〜17:00', closed: false },
  ]

  return (
    <div className="main-pad" style={{ paddingTop: '60px' }}>
      <p className="hero-en" style={{ fontSize: '12px', color: 'var(--accent)', letterSpacing: '0.25em', marginBottom: '12px', textAlign: 'center' }}>ACCESS</p>
      <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '48px', fontWeight: 900 }}>店�"%���yh,x���ਸ�����O�����]��\�Ә[YOH�ܚYL����]���]��[O^���X��ܛ�[��	ݘ\�KX�\�
I��ܙ\��	�\��Y�\�KX�ܙ\�I�Y[�Έ	�̜	�_O����[O^���۝�^�N�	�M�	��۝�ZY��
�X\��[����N�	̍	�]\��X�[�Έ	��
Y[I��ܙ\����N�	�\��Y�\�KX�ܙ\�I�Y[�Л��N�	�L�	�_O�g+9��yh,O�ς���X�[�	�n��d#I��[YN�	��cx�k8����x���K��X�[�	�/c��`	��[YN�	��$���N�L��.�:`�yn�9.�:`�yn �."�.�9c.�l�ylaybcy�.�����$�LI�K��X�[�	�� 9k�8ࢸ�x��x�����	��[YN�	�c%�a�i*y��9k��9o���jy�!
yb!��."�. �.�9o���jy�!�b!��K��X�[�	�Ӕ���[YN�	�[��Yܘ[N��[�X�Y�{�":*l��,8�k��'9�(��"I�K��X�[�	��8��8��8�8�����[YN�	��`�ࢻ�"8��੸�������8�������8�����n+{�"I�K��X�[�	��������	��[YN�	�n��"%�bcx�k�i%�n+x�k��e9��:*��c���K�K�X\

[���JHO�
�]��^O^�_H�[O^��\�^N�	ٛ^	��\�	�M�	�X\��[����N�	�M�	��^ܘ\�	�ܘ\	�_O���[��[O]^��۝�^�N�	�L�	���܎�	ݘ\�KXX��[�
I�]\��X�[�Έ	��[I�Z[��Y�	�	��^��[�Έ_O��[��˛X�[O��[����[��[O^���۝�^�N�	�L�	�[�RZY��K���]T�X�N�	��K[[�I���܎�	ݘ\�K]^
I�_O��[��˝�[Y_O��[����]���
J_B��]����]����]���]��[O^���X��ܛ�[��	ݘ\�KX�\�
I��ܙ\��	�\��Y�\�KX�ܙ\�I�Y[�Έ	�̜	�_O����[O^���۝�^�N�	�M�	��۝�ZY��
�X\��[����N�	̍	�]\��X�[�Έ	��
Y[I��ܙ\����N�	�\��Y�\�KX�ܙ\�I�Y[�Л��N�	�L�	�_O�e���ky�`�e���ς���\�˛X\

JHO�
�]��^O^�_H�[O^��\�^N�	ٛ^	��\�Y�P�۝[��	��X�KX�]�Y[��Y[�Έ	�L	��ܙ\����N�	�\��Y�\�KX�ܙ\�I��^ܘ\�	�ܘ\	��\�	�	�_O���[��[O^���۝�^�N�	�L�	���܎�	ݘ\�K]^[]]Y
I�_O���^_O��[����[��[O^���۝�^�N�	�L�	���܎�����Y�	ݘ\�KXX��[�
I��	ݘ\�K]^
I�_O���[Y_O��[����]���
J_B��]����]��[O^��X\��[���	�M�	��X��ܛ�[��	ݘ\�KX�\�
I��ܙ\��	�\��Y�\�KX�ܙ\�I�Y[�Έ	̍	�^[Yێ�	��[�\��_O���[O^���۝�^�N�	�L�	���܎�	ݘ\�K]^[]]Y
I�X\��[����N�	�L�	�_O�����H8���������i�论*�O���B��Y�H�΋��X\˙����K���K�X\��Ox�cx�k8����x���.�:`�yn �."�.�9c.�l�ylaybcy�.���\��]H�؛[�Ȃ��[H����[�\��ܙY�\��\����[O^�\�^N�	�[�[�KX�������X��ܛ�[��	ݘ\�KXX��[�
I����܎�	�ٙ����Y[�Έ	�L��	���۝�^�N�	�L�	��^X�ܘ][ێ�	ۛۙI��]\��X�[�Έ	��
Y[I���]T�X�N�	ۛ�ܘ\	��_B���9g,9f���i�)����O���]����]�����ʈX��\����\�
��B�]��[O^��X\��[���	�̜	�X^�Y�	�
�	��X��ܛ�[��	ݘ\�KX�\�
I��ܙ\��	�\��Y�\�KX�ܙ\�I�Y[�Έ	̎̜	�_O����[O^���۝�^�N�	�M	��۝�ZY��
�X\��[����N�	�L�	���܎�	ݘ\�KXX��[�
I�_O�ਸ�����x�j��i8�a8�i��ς��[O^���۝�^�N�	�L�	�[�RZY��K�K��܎�	ݘ\�K]^[]]Y
I�_O��:-��g,8�j�� y��8�e��g�c%x�i��cx�g�� z`'��e��i��k�a�x�k��g��x� ya&�a&�."��i��kx�cx�g�� ya�alx�j��k��e8�k���� ����b�࠸�dx�f��c��h8�ex�a8� ��9.�:`�yn�9.�:`�yn �."�.�9c.�l�ylaybcx�b�ࢹ."�. �.�k��/$y.�L�8�$�
����k��" �ZJ~�
~ZN8~8�8.���Z��[	.8�[�8�ZJ�8�8).8�[~8(.8N8�88�y�XX>8�8N8n8N8�8�8 ������F�c���F�c���Р�gV�7F���6��F7E6V7F��ₒ��&WGW&����F�b6�74��S�&����B"7G��S׷�FF��uF��sc�r����6�74��S�&�W&��V�"7G��S׷�f��E6��S�s'�r�6���#�wf"���66V�B�r��WGFW%76��s�s�#VV�r��&v��&�GF�Ӣs'�r�FW�DƖv�v6V�FW"r���4��D5C���ƃ"6�74��S�'6V7F����F�F�R"7G��S׷�FW�DƖv�v6V�FW"r��&v��&�GF�Ӣs'�r�f��EvV�v�C�����8�YX�8NY�8(�8����#��7G��S׷�FW�DƖv�v6V�FW"r�6���#�wf"���FW�B��WFVB�r�f��E6��S�s7�r��&v��&�GF�ӢsC��r���8NX��X��8�8�YX�8N{HN8�8Ny����~X��8���7Fw&�8�D�8�8�8�8�Z�Κ�>8�8N8n8�88Njx�8 ���ࠢ�F�b6�74��S�&6��F7B�w&�B"7G��S׷���v�GF��s��r��&v��sWF�r���������6��	�;rr��V�t��7Fw&�r��F�F�S�t��7Fw&�8~8.8����r��FW63�~i��j��8�Xi^Z��8�i�Z�8(.Z�>z�8~8N8�8�8.K��8�:H8�h�n8���7Fw&�8~9ٮ8(�[�~8��~8(�8n8N8�8�8$D��Ȏ888*N8:�8*�88�8:88>8;�8;�8+��Ȟ8~8�8N[�n8(N8(�8�8�8"r��7F���v�GG3���wwr��7Fw&��6���r���&Vât��7Fw&�8).���XX�r��������6��	��r��V�uvƲ֖�r��F�F�S�~����N8�iz^Z�8~8�88^8Br��FW63�~K��{HNK��X��8~8N�)�ZI�8(.8(.8(�8�8�8.X{�X[8�[	8�8N8�8(8���Z��[	.8�8�[{.8~8�88^8N8�8�8.8�ij�8>X��8�8(�8).8�88�8�8(.8).8�88^8N8�8�8"r��7F���v�GG3����2�v��v�R�6����3��X�~�x�ZJ�k�Z��[�"r���&Vâ~Y�Y�>8~8*.8*�8+�8+�z+����r����������2��������F�b�W�׶��7G��S׷�&6�w&�V�C�wf"���6&B�r�&�&FW#�s�6�ƖBf"���&�&FW"�r�FF��s�sC�#��r�FW�DƖv�v6V�FW"r����F�b7G��S׷�f��E6��S�sCG�r��&v��&�GF�Ӣs'�r���2�6�����F�c��6�74��S�&�W&��V�"7G��S׷�f��E6��S�s�r�6���#�wf"���66V�B�r��WGFW%76��s�s�&V�r��&v��&�GF�Ӣs�r���2�V�����ƃ27G��S׷�f��E6��S�sW�r�f��EvV�v�C�s��&v��&�GF�Ӣsg�r��WGFW%76��s�s�VV�r���2�F�F�W����3��7G��S׷�f��E6��S�s7�r�6���#�wf"���FW�B��WFVB�r�Ɩ�T�V�v�C����&v��&�GF�Ӣs#G�r���2�FW67�������&Vc׶2�7F���ТF&vWC�%�&�� �&V��&���V�W"��&VfW'&W" �7G��S׷��F�7���v��Ɩ�R�&��6�r��&6�w&�V�C�wf"���66V�B�r��6���#�r6ffbr��FF��s�s'�#��r��f��E6��S�s7�r��FW�DFV6�&F���v���Rr���WGFW%76��s�s�VV�r��v��FU76S�v��w&r���Т��2��&V�Т�����F�c���Т��F�cࠢ�F�b7G��S׷���v�GF��s��r��&v��s3'�WF�r�&6�w&�V�C�wf"���6&B�r�&�&FW#�s�6�ƖBf"���&�&FW"�r�FF��s�s#G�#��r���ƃ27G��S׷�f��E6��S�sG�r�f��EvV�v�C�s��&v��&�GF�Ӣs'�r�6���#�wf"���66V�B�r���YknjZ�8��j.8�8(�8Nk:�hH����3��V�7G��S׷�Ɨ7E7G��S�v���Rr�FF��s�������~iʎi��iz^8�Z�K�iz^8~8�8.YknjZ�i�.�i>8�s�8	�s�8�8�8(�8�8�8"r��~[��i[8�[	8�8N8�8(88+8:�8;�89~8~8�8Ni�^[�~8�K��X��8�8N�
>{Z8N8�888(�8�X��8�8(�8�8�8"r��~ZIΙi>8�YknjZ�8�K��{HNX�n8�8�8>8n8N8�8~�Ȏ��>{K8���7Fw&�8).8Nz+����8�88^8N�Ȓr���������FR��������ƒ�W�׶��7G��S׷�f��E6��S�s7�r�6���#�wf"���FW�B��WFVB�r�Ɩ�T�V�v�C��r��&v��&�GF�Ӣs��r�FF��t�VgC�sg�r��6�F���w&V�F�fRr����7�7G��S׷��6�F���v'6��WFRr��VgC��6���#�wf"���66V�B�r���+s��7�����FWТ��Ɠ���Т��V����F�c���F�c����
