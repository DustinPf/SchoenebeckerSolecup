import { ChevronDown, FileText } from 'lucide-react';

const numShadow = '0 0 40px rgba(0,0,0,0.9), 2px 4px 20px rgba(0,0,0,0.95), 0 0 80px rgba(0,0,0,0.6)';

export default function Hero() {

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/Schoenebecker-SoleCup_Hero.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1020&dpr=2"
          alt="Schoenebecker SoleCup Meeting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/35 to-black/10" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">

        {/* Date + Ergebnisse row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-6 sm:mb-8 sm:-ml-40">

          {/* Date block */}
          <div className="font-heading tracking-tight leading-[0.9]">
            <div
              className="text-tangerine text-6xl sm:text-7xl lg:text-9xl"
              style={{ textShadow: '2px 4px 12px rgba(0,0,0,0.7), 0 2px 6px rgba(0,0,0,0.5)' }}
            >20.06.2026</div>
            <div
              className="text-jungle text-5xl sm:text-6xl lg:text-8xl"
              style={{ textShadow: '2px 4px 12px rgba(0,0,0,0.7), 0 2px 6px rgba(0,0,0,0.5)' }}
            >Ab 9:30 Uhr</div>
          </div>

          {/* Ergebnisse link */}
          <div className="mt-8 lg:mt-0 lg:text-right">
            <a
              href="/Wettbewerbe/2026-06-20-Schonebeck-Ergebnisliste.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 group"
            >
              <FileText className="w-8 h-8 sm:w-10 sm:h-10 lg:w-14 lg:h-14 text-tangerine drop-shadow-lg group-hover:scale-110 transition-transform duration-300" />
              <span
                className="font-heading text-5xl sm:text-6xl lg:text-8xl text-tangerine uppercase tracking-wide group-hover:opacity-80 transition-opacity duration-300"
                style={{ textShadow: numShadow }}
              >
                Ergebnisse
              </span>
            </a>
          </div>
        </div>

        <p className="font-body text-white text-base sm:text-xl lg:text-2xl max-w-2xl leading-relaxed mb-6 sm:mb-4 sm:-ml-40" style={{ textShadow: '1px 2px 8px rgba(0,0,0,0.8)' }}>
          Das traditionsreiche Wurfmeeting in Schönebeck &ndash; wo Athleten aus ganzer
          Welt ihre Bestleistungen im Diskus, Hammer, Speer und
          Kugelstoßen zeigen.
        </p>
        <div className="flex items-center justify-center gap-4 sm:gap-6 mt-6 sm:mt-8">
          <img
            src="/Logos/Contitnental_Tour-2026.png"
            alt="Continental Tour 2026 Logo"
            className="h-24 sm:h-40 lg:h-80 w-auto object-contain drop-shadow-lg"
          />
          <img
            src="/Logos/World_Athletics_Continental_Tour_Bronzepg.jpg"
            alt="World Athletics Continental Tour Bronze Logo"
            className="h-24 sm:h-40 lg:h-80 w-auto object-contain drop-shadow-lg"
          />
        </div>
      </div>

      <a
        href="#aktuelles"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/60 hover:text-white transition-colors duration-300 animate-bounce"
        aria-label="Nach unten scrollen"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
}
