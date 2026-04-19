export function Footer() {
  return (
    <footer className="border-t border-mist-dim bg-bg px-6 py-16 md:px-10">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 md:grid-cols-12">
        <div className="md:col-span-4 flex flex-col gap-4">
          <span className="font-display text-5xl font-light leading-none tracking-tight text-bone">
            Æther
          </span>
          <p className="max-w-xs text-sm leading-relaxed text-bone-dim">
            Atelier of Imaginary Weather. A private archive maintained by
            five observers and a cat named Lu.
          </p>
        </div>

        <div className="md:col-span-2 md:col-start-6 flex flex-col gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-bone-dim">
          <span className="text-ember">Archive</span>
          <a className="hover:text-bone transition-colors cursor-pointer" href="#catalogue">
            Catalogue
          </a>
          <a className="hover:text-bone transition-colors cursor-pointer" href="#instruments">
            Instruments
          </a>
          <a className="hover:text-bone transition-colors cursor-pointer" href="#dispatch">
            Dispatches
          </a>
        </div>

        <div className="md:col-span-2 flex flex-col gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-bone-dim">
          <span className="text-ember">Studio</span>
          <span>Halden, Orévny, Ailari</span>
          <span>52.0884° N / 4.2783° E</span>
          <span>By appointment only</span>
        </div>

        <div className="md:col-span-3 md:col-start-10 flex flex-col gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-bone-dim">
          <span className="text-ember">Correspondence</span>
          <a className="hover:text-bone transition-colors cursor-pointer" href="mailto:post@aether.studio">
            post@aether.studio
          </a>
          <span>No telephone.</span>
        </div>

        <div className="md:col-span-12 mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-mist-dim pt-6 font-mono text-[10px] uppercase tracking-[0.3em] text-mist">
          <span>© MMLI Æther Studio</span>
          <span>Printed, occasionally</span>
          <span>All weather fictional</span>
        </div>
      </div>
    </footer>
  );
}
