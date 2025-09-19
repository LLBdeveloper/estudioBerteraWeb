const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-balance leading-tight">
                <span className="text-foreground">Experiencia y</span>
                <br />
                <span className="text-primary ">compromiso legal</span>
                <br />
                <span className=" text-yellow-400">desde 1991</span>
              </h1>

              <p className="text-xl text-muted-foreground text-pretty max-w-2xl leading-relaxed ">
                Con 33 años de trayectoria, brindamos asesoramiento jurídico integral en accidentes de tránsito, derecho
                laboral y derecho de familia en Monte Grande.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary text-primary-foreground px-8 py-4 rounded-md hover:bg-primary/90 transition-colors font-medium text-lg">
                <a href="https://api.whatsapp.com/send?phone=5491165338090&text=Hola%20quiero%20hacer%20una%20consulta%20sobre%20sus%20servicios%20legales%2C%20me%20contacto%20via%20http%3A%2F%2Fwww.estudiobertera.com%2F%20." 
                  target="_blank" 
                  rel="noopener noreferrer">
                  Consulta Gratuita
                </a>
              </button>
              <button className="border border-border text-foreground px-8 py-4 rounded-md hover:bg-secondary transition-colors font-medium text-lg">
                <a href="https://maps.app.goo.gl/vpZiv1eFfrqxaryW7" target="_blank">Conocer Más</a>
              </button>
            </div>
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">33</div>
                <div className="text-sm text-muted-foreground">Años de experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">1000+</div>
                <div className="text-sm text-muted-foreground">Casos resueltos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Atención disponible</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden">
              <img
                src="/images/office-interior.png"
                alt="Oficina Ibañez & Bertera Asociados"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-lg p-6 shadow-2xl">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-primary-foreground "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-foreground">Llamanos ahora</div>
                  <div className="text-primary font-bold">116533-8090</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
