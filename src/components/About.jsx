const About = () => {
  return (
    <section id="nosotros" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif text-balance">
                <span className="text-foreground">Comprometidos con</span>
                <br />
                <span className="text-primary">la justicia desde 1991</span>
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed">
                En <strong className="text-foreground">Ibañez & Bertera Asociados</strong>, entendemos que cada caso es
                único y merece atención personalizada. Con más de tres décadas de experiencia, hemos construido nuestra
                reputación sobre la base de la confianza, la dedicación y los resultados exitosos.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Nuestro compromiso va más allá del asesoramiento legal: acompañamos a nuestros clientes en cada paso del
                proceso, brindando claridad y tranquilidad en momentos difíciles.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-foreground">Experiencia</h3>
                <p className="text-sm text-muted-foreground">33 años respaldando a nuestros clientes</p>
              </div>

              <div className="space-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-foreground">Compromiso</h3>
                <p className="text-sm text-muted-foreground">Dedicación total a cada caso</p>
              </div>

              <div className="space-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-foreground">Cercanía</h3>
                <p className="text-sm text-muted-foreground">Atención personalizada y humana</p>
              </div>

              <div className="space-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-foreground">Resultados</h3>
                <p className="text-sm text-muted-foreground">Soluciones efectivas y exitosas</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden">
              <img
                src="/images/office-exterior.png"
                alt="Estudio Jurídico Ibañez & Bertera"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent"></div>
            </div>

            {/* Address card */}
            <div className="absolute -bottom-6 -right-6 bg-card border border-border rounded-lg p-6 shadow-2xl">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-sm font-medium text-foreground">Nueva ubicación</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Ocantos 178
                  <br />
                  Monte Grande, Buenos Aires
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
