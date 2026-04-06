export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[var(--line)] bg-[#0a0403] py-10">
      <div className="layout-shell relative">
        <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <a href="#home" className="flex items-center">
            <img
              src="/assets/logo_large.jpg"
              alt="Ligaya Guitars"
              loading="lazy"
              decoding="async"
              className="h-12 w-12 rounded-full border border-[rgba(240,200,137,0.22)] object-cover"
            />
          </a>

          <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start md:gap-6">
            {[
              ['Facebook', 'https://www.facebook.com/ligaya.guitars/'],
              ['Instagram', 'https://www.instagram.com/ligayaguitars/'],
              ['TikTok', 'https://www.tiktok.com/@ligayaguitars'],
              ['Lazada', 'https://www.lazada.com.ph/shop/ligaya-guitars/'],
            ].map(([name, url]) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-[rgba(247,239,228,0.46)] transition-colors hover:text-[var(--accent-soft)]"
              >
                {name}
              </a>
            ))}
          </div>

          <p className="text-[0.68rem] tracking-[0.18em] text-[rgba(247,239,228,0.34)]">
            Copyright {new Date().getFullYear()} Ligaya Guitars Philippines
          </p>
        </div>
      </div>
    </footer>
  )
}
