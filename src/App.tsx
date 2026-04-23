import './index.css';

function App() {
  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brown-900/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 px-6 sm:px-10 max-w-5xl">
          <p className="text-gold-400 tracking-widest text-xs sm:text-sm mb-4">
            EXPERIÊNCIA. ORIGEM. EXCELÊNCIA.
          </p>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Café é arte.
            <br />E nós elevamos.
          </h1>

          <p className="text-text-secondary text-sm sm:text-base max-w-md mb-8">
            Grãos selecionados, torra artesanal e paixão em cada
            detalhe.
          </p>

          <button
            className="
            bg-gold-500 text-brown-900
            px-6 sm:px-8 py-3
            rounded-full
            text-sm sm:text-base
            hover:opacity-90 transition
          "
          >
            Descubra a coleção →
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
