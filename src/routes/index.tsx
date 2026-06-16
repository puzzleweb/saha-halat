import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  Truck,
  Wrench,
  Award,
  Link2,
  Cog,
  Anchor,
  Hammer,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Saha Zincir Çelik Halat İmalat San. ve Tic. Ltd. Şti." },
      {
        name: "description",
        content:
          "Saha Halat — Çelik halat, zincir ve bağlantı aparatları imalatında güvenin adı. Endüstriyel kalite, hızlı teslimat, teknik destek.",
      },
      { property: "og:title", content: "Saha Zincir Çelik Halat İmalat" },
      {
        property: "og:description",
        content:
          "Çelik halat, zincir ve bağlantı aparatları imalatçısı. Sahada güvenin adı.",
      },
    ],
  }),
  component: Index,
});

const NAV = [
  { label: "ANASAYFA", href: "#anasayfa" },
  { label: "HAKKIMIZDA", href: "#hakkimizda" },
  { label: "ÜRÜNLER", href: "#urunler" },
  { label: "NEDEN BİZ", href: "#neden-biz" },
  { label: "İLETİŞİM", href: "#iletisim" },
];

function Logo() {
  return (
    <a href="#anasayfa" className="flex items-center gap-3 shrink-0">
      <div className="flex h-12 w-12 items-center justify-center bg-brand-yellow border-2 border-brand-yellow">
        <span className="font-display text-brand-dark text-xl font-black tracking-tighter">
          SH
        </span>
      </div>
      <div className="leading-tight">
        <div className="font-display text-brand-yellow text-base font-extrabold tracking-wide">
          SAHA HALAT
        </div>
        <div className="text-[10px] text-brand-yellow/70 uppercase tracking-[0.2em]">
          ÇELİK HALAT & ZİNCİR
        </div>
      </div>
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-brand-dark border-b-2 border-brand-yellow/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 h-20">
          <Logo />
          <div className="flex items-center gap-6">
            <nav className="hidden lg:flex items-center gap-7">
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  className="text-sm font-semibold uppercase tracking-wider text-white/90 hover:text-brand-yellow transition-colors"
                >
                  {n.label}
                </a>
              ))}
            </nav>
            <a
              href="tel:+903125119372"
              className="hidden md:inline-flex items-center gap-2 bg-brand-yellow text-brand-dark px-4 py-2.5 font-bold text-sm hover:bg-white transition-colors"
            >
              <Phone className="h-4 w-4" />
              0312 511 93 72
            </a>
            <button
              className="lg:hidden text-brand-yellow"
              onClick={() => setOpen((v) => !v)}
              aria-label="Menüyü aç"
            >
              {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
        {open && (
          <nav className="lg:hidden pb-4 flex flex-col gap-1">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="text-sm font-semibold uppercase tracking-wider text-white/90 hover:text-brand-yellow px-2 py-3 border-b border-white/10"
              >
                {n.label}
              </a>
            ))}
            <a
              href="tel:+903125119372"
              className="md:hidden inline-flex items-center gap-2 bg-brand-yellow text-brand-dark px-4 py-3 font-bold text-sm mt-2"
            >
              <Phone className="h-4 w-4" />
              0312 511 93 72
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}

function ChainPattern() {
  return (
    <svg
      className="absolute inset-0 h-full w-full opacity-[0.07]"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="chain"
          x="0"
          y="0"
          width="80"
          height="80"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="20" cy="20" r="12" fill="none" stroke="#15151F" strokeWidth="4" />
          <circle cx="60" cy="60" r="12" fill="none" stroke="#15151F" strokeWidth="4" />
          <line x1="0" y1="0" x2="80" y2="80" stroke="#15151F" strokeWidth="2" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#chain)" />
    </svg>
  );
}

function Hero() {
  return (
    <section id="anasayfa" className="relative bg-brand-yellow overflow-hidden">
      <ChainPattern />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-brand-dark text-brand-yellow px-3 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">
            <span className="h-2 w-2 bg-brand-yellow" />
            ENDÜSTRİYEL İMALAT - ANKARA
          </div>
          <h1 className="font-display text-brand-dark text-5xl sm:text-6xl lg:text-7xl font-black uppercase leading-[0.95] tracking-tight">
            SAHA ZİNCİR
            <br />
            ÇELİK HALAT
          </h1>
          <div className="mt-6 flex items-center gap-4">
            <div className="h-1 w-16 bg-brand-dark" />
            <p className="font-display text-brand-dark text-lg sm:text-xl font-bold uppercase">
              İMALAT SAN. VE TİC. LTD. ŞTİ.
            </p>
          </div>
          <p className="mt-4 font-display text-brand-dark/80 text-2xl sm:text-3xl font-extrabold italic">
            "Sahada güvenin adı."
          </p>
          <p className="mt-8 text-brand-dark/90 text-base sm:text-lg max-w-2xl leading-relaxed">
            Çelik halat ve zincir imalatında yılların tecrübesi ile ağır sanayi,
            inşaat, denizcilik ve vinç sektörlerine dayanıklılık ve güvenliği
            ön planda tutan ürünler sunuyoruz. Her halka, her tel; saha
            şartlarına göre üretilir.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#urunler"
              className="inline-flex items-center gap-2 bg-brand-dark text-brand-yellow px-6 py-4 font-bold text-sm uppercase tracking-wider hover:bg-black transition-colors"
            >
              ÜRÜNLERİMİZİ İNCELEYİN <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#iletisim"
              className="inline-flex items-center gap-2 border-2 border-brand-dark text-brand-dark px-6 py-4 font-bold text-sm uppercase tracking-wider hover:bg-brand-dark hover:text-brand-yellow transition-colors"
            >
              BİZE ULAŞIN
            </a>
          </div>
        </div>
      </div>
      {/* bottom industrial stripe */}
      <div className="relative h-3 bg-brand-dark flex">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="flex-1 border-r border-brand-yellow/20"
          />
        ))}
      </div>
    </section>
  );
}

const STATS = [
  { number: "25+", label: "Yıllık Tecrübe" },
  { number: "500+", label: "Ürün Çeşidi" },
  { number: "1000+", label: "Memnun Müşteri" },
  { number: "%100", label: "Sektörel Güven" },
];

function About() {
  return (
    <section id="hakkimizda" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <div className="text-brand-yellow font-bold text-sm uppercase tracking-[0.3em] mb-4">
              — Hakkımızda
            </div>
            <h2 className="font-display text-brand-dark text-4xl lg:text-5xl font-black uppercase leading-tight">
              SAHADA TEST EDİLMİŞ
              <br />
              ENDÜSTRİYEL KALİTE
            </h2>
            <div className="mt-8 space-y-5 text-brand-dark/80 leading-relaxed">
              <p>
                <strong className="text-brand-dark">
                  Saha Zincir Çelik Halat İmalat San. ve Tic. Ltd. Şti.
                </strong>{" "}
                olarak, çelik halat ve zincir imalatında uzun yıllara dayanan
                tecrübemizle Türkiye'nin önde gelen üreticilerinden biri
                konumundayız. Üretim hattımızda işlenen her metre çelik halat,
                her halka zincir; sahada karşılaşılan en zorlu koşullar göz
                önünde bulundurularak üretilir.
              </p>
              <p>
                Modern üretim tesisimizde uluslararası standartlara uygun
                ekipmanlarla çalışıyor, hammaddeden son ürüne kadar tüm
                aşamalarda kalite kontrolden geçen ürünler sunuyoruz. İnşaat,
                madencilik, denizcilik, vinç ve ağır sanayi sektörlerine
                hizmet veriyoruz.
              </p>
              <p>
                Müşterilerimizin taleplerine göre özel imalat yapabilme
                esnekliğimiz, hızlı teslimat ağımız ve satış sonrası teknik
                desteğimizle sektörde fark yaratıyoruz.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="bg-brand-dark p-6 lg:p-8 border-l-4 border-brand-yellow"
              >
                <div className="font-display text-brand-yellow text-4xl lg:text-5xl font-black">
                  {s.number}
                </div>
                <div className="mt-2 text-white/80 text-sm font-semibold uppercase tracking-wider">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const PRODUCTS = [
  {
    icon: Cog,
    title: "ÇELİK HALAT",
    desc: "Galvanizli ve siyah çelik halat çeşitleri. Vinç, asansör, inşaat ve denizcilik uygulamaları için her çap ve konstrüksiyonda imalat.",
  },
  {
    icon: Link2,
    title: "ZİNCİR",
    desc: "Yük zinciri, kalibre zincir, gemici zinciri ve dekoratif zincir üretimi. Yüksek mukavemet, sertifikalı kalite.",
  },
  {
    icon: Anchor,
    title: "BAĞLANTI APARATLARI",
    desc: "Kanca, mapa, kasnak, mapa, kilit, sapan ve vinç aksesuarları. Halat ve zincir sistemleri için komple çözüm.",
  },
  {
    icon: Hammer,
    title: "ÖZEL İMALAT",
    desc: "Talebe göre özel ölçü, özel uç bağlantısı ve projeye özel sapan imalatı. Mühendislik desteği ile birlikte üretim.",
  },
];

function Products() {
  return (
    <section id="urunler" className="bg-muted py-20 lg:py-28 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <div className="text-brand-yellow font-bold text-sm uppercase tracking-[0.3em] mb-4">
            — ÜRÜNLERİMİZ
          </div>
          <h2 className="font-display text-brand-dark text-4xl lg:text-5xl font-black uppercase leading-tight">
            ÇELİK HALATTAN ZİNCİRE,
            <br />
            TAM KAPSAMLI ÜRETİM
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group bg-white border-t-4 border-brand-yellow p-8 hover:bg-brand-dark transition-colors duration-200"
            >
              <div className="h-14 w-14 bg-brand-yellow flex items-center justify-center mb-6 group-hover:bg-brand-yellow">
                <Icon className="h-7 w-7 text-brand-dark" strokeWidth={2.5} />
              </div>
              <h3 className="font-display text-brand-dark group-hover:text-brand-yellow text-xl font-extrabold uppercase tracking-tight mb-3">
                {title}
              </h3>
              <p className="text-sm text-brand-dark/70 group-hover:text-white/80 leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const WHY = [
  {
    icon: ShieldCheck,
    title: "KALİTE KONTROL",
    desc: "Hammaddeden son ürüne kadar her aşamada test ve sertifikasyon.",
  },
  {
    icon: Truck,
    title: "HIZLI TESLİMAT",
    desc: "Geniş stok ve etkin lojistik ile Türkiye geneline hızlı sevkiyat.",
  },
  {
    icon: Wrench,
    title: "TEKNİK DESTEK",
    desc: "Doğru ürün seçimi ve uygulama için mühendis ekibimizden destek.",
  },
  {
    icon: Award,
    title: "GÜVENLİK STANDARDI",
    desc: "Uluslararası standartlarda dayanıklılık ve iş güvenliği uyumu.",
  },
];

function WhyUs() {
  return (
    <section id="neden-biz" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <div className="text-brand-yellow font-bold text-sm uppercase tracking-[0.3em] mb-4">
            — NEDEN SAHA HALAT
          </div>
          <h2 className="font-display text-brand-dark text-4xl lg:text-5xl font-black uppercase leading-tight">
            NEDEN BİZİ SEÇMELİSİNİZ?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-brand-dark/10">
          {WHY.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-white p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 bg-brand-dark flex items-center justify-center shrink-0">
                  <Icon className="h-6 w-6 text-brand-yellow" strokeWidth={2.5} />
                </div>
                <h3 className="font-display text-brand-dark text-lg font-extrabold uppercase">
                  {title}
                </h3>
              </div>
              <p className="text-sm text-brand-dark/70 leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="iletisim" className="bg-brand-dark py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]">
        <ChainPattern />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <div className="text-brand-yellow font-bold text-sm uppercase tracking-[0.3em] mb-4">
              — İLETİŞİM
            </div>
            <h2 className="font-display text-white text-4xl lg:text-5xl font-black uppercase leading-tight">
              PROJENİZ İÇİN
              <br />
              <span className="text-brand-yellow">BİZE ULAŞIN</span>
            </h2>
            <p className="mt-6 text-white/70 leading-relaxed max-w-md">
              Ürün talepleriniz, özel imalat projeleriniz ve teknik
              danışmanlık için ekibimiz size yardımcı olmaya hazır.
            </p>

            <div className="mt-10 space-y-5">
              <a
                href="tel:+903125119372"
                className="flex items-center gap-4 group"
              >
                <div className="h-12 w-12 bg-brand-yellow flex items-center justify-center shrink-0 group-hover:bg-white transition-colors">
                  <Phone className="h-5 w-5 text-brand-dark" strokeWidth={2.5} />
                </div>
                <div>
                  <div className="text-white/60 text-xs uppercase tracking-wider">Telefon</div>
                  <div className="text-white font-bold text-lg group-hover:text-brand-yellow transition-colors">
                    (0312) 511 93 72
                  </div>
                </div>
              </a>
              <a href="tel:+903125119383" className="flex items-center gap-4 group">
                <div className="h-12 w-12 bg-brand-yellow flex items-center justify-center shrink-0 group-hover:bg-white transition-colors">
                  <Phone className="h-5 w-5 text-brand-dark" strokeWidth={2.5} />
                </div>
                <div>
                  <div className="text-white/60 text-xs uppercase tracking-wider">Faks / Tel</div>
                  <div className="text-white font-bold text-lg group-hover:text-brand-yellow transition-colors">
                    (0312) 511 93 83
                  </div>
                </div>
              </a>
              <a
                href="mailto:info@sahacelikhalat.com"
                className="flex items-center gap-4 group"
              >
                <div className="h-12 w-12 bg-brand-yellow flex items-center justify-center shrink-0 group-hover:bg-white transition-colors">
                  <Mail className="h-5 w-5 text-brand-dark" strokeWidth={2.5} />
                </div>
                <div>
                  <div className="text-white/60 text-xs uppercase tracking-wider">E-posta</div>
                  <div className="text-white font-bold text-lg group-hover:text-brand-yellow transition-colors">
                    info@sahacelikhalat.com
                  </div>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-brand-yellow flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-brand-dark" strokeWidth={2.5} />
                </div>
                <div>
                  <div className="text-white/60 text-xs uppercase tracking-wider">Adres</div>
                  <div className="text-white font-bold">Ankara, Türkiye</div>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="bg-white p-8 lg:p-10"
          >
            <h3 className="font-display text-brand-dark text-2xl font-extrabold uppercase mb-6">
              HIZLI İLETİŞİM FORMU
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-dark/70 mb-2">
                  Ad Soyad
                </label>
                <input
                  required
                  type="text"
                  className="w-full bg-muted border-2 border-transparent focus:border-brand-yellow focus:bg-white outline-none px-4 py-3 text-brand-dark"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-dark/70 mb-2">
                    E-posta
                  </label>
                  <input
                    required
                    type="email"
                    className="w-full bg-muted border-2 border-transparent focus:border-brand-yellow focus:bg-white outline-none px-4 py-3 text-brand-dark"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-dark/70 mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    className="w-full bg-muted border-2 border-transparent focus:border-brand-yellow focus:bg-white outline-none px-4 py-3 text-brand-dark"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-dark/70 mb-2">
                  Mesajınız
                </label>
                <textarea
                  required
                  rows={5}
                  className="w-full bg-muted border-2 border-transparent focus:border-brand-yellow focus:bg-white outline-none px-4 py-3 text-brand-dark resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-brand-yellow text-brand-dark font-black uppercase tracking-wider py-4 hover:bg-brand-dark hover:text-brand-yellow transition-colors"
              >
                {sent ? "Mesajınız Alındı ✓" : "Gönder"}
              </button>
            </div>
          </form>
        </div>

        <div className="mt-12 lg:mt-16 aspect-[21/9] w-full bg-white/5 border border-white/10 flex items-center justify-center">
          <div className="text-center text-white/40">
            <MapPin className="h-8 w-8 mx-auto mb-2" />
            <div className="text-xs uppercase tracking-wider">Harita / Konum</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-brand-dark border-t-2 border-brand-yellow/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div>
            <Logo />
            <p className="mt-4 text-white/60 text-sm max-w-xs leading-relaxed">
              Çelik halat, zincir ve bağlantı aparatları imalatında sahada
              güvenin adı.
            </p>
          </div>
          <div>
            <div className="text-brand-yellow font-bold text-xs uppercase tracking-[0.3em] mb-4">
              İLETİŞİM
            </div>
            <div className="space-y-2 text-white/80 text-sm">
              <a href="tel:+903125119372" className="block hover:text-brand-yellow">
                (0312) 511 93 72
              </a>
              <a href="tel:+903125119383" className="block hover:text-brand-yellow">
                (0312) 511 93 83
              </a>
              <a
                href="mailto:info@sahacelikhalat.com"
                className="block hover:text-brand-yellow"
              >
                info@sahacelikhalat.com
              </a>
            </div>
          </div>
          <div>
            <div className="text-brand-yellow font-bold text-xs uppercase tracking-[0.3em] mb-4">
              HIZLI ERİŞİM
            </div>
            <div className="space-y-2 text-sm">
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  className="block text-white/80 hover:text-brand-yellow"
                >
                  {n.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3 justify-between items-start sm:items-center">
          <p className="text-white/50 text-xs">
            © {new Date().getFullYear()} Saha Zincir Çelik Halat İmalat San. ve
            Tic. Ltd. Şti. Tüm hakları saklıdır.
          </p>
          <div className="flex gap-1">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="h-1 w-4 bg-brand-yellow/30" />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Products />
      <WhyUs />
      <Contact />
      <Footer />
    </main>
  );
}
