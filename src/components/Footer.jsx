const Footer = () => {
  return (
    <footer className="bg-background border-t border-border ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-amber-400 rounded-lg">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2 space-y-4 text-center flex flex-col items-center">
            <a href="#menu">
              <img  src="/images/logo.png" alt="Ibañez & Bertera Asociados" className="h-12 w-auto" />
            </a>
            <p className=" leading-relaxed max-w-md text-zinc-700">
              Con 33 años de experiencia, brindamos asesoramiento jurídico integral con compromiso, dedicación y
              resultados exitosos.
            </p>
          <div className="flex space-x-4 ">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/estudiojuridico.ibanezbertera/"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
              target="_blank"                           

            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm5.75-3a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z"/>
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Facebook"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10 10 0 0 0 22 12"/>
              </svg>
            </a>

            {/* WhatsApp */}
            <a
              href="https://web.whatsapp.com/send?phone=5491165338090&text=Hola%20quiero%20hacer%20una%20consulta%20sobre%20sus%20servicios%20legales%2C%20me%20contacto%20via%20http%3A%2F%2Fwww.estudiobertera.com%2F%20." 
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="WhatsApp"
              target="_blank"                           

            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .5a11.5 11.5 0 0 0-9.9 17.3L1 23l5.4-1.8A11.5 11.5 0 1 0 12 .5zm0 2a9.5 9.5 0 0 1 8.2 14.3l-.3.6.2.7-2.9-1a9.5 9.5 0 0 1-14.1-8.2A9.5 9.5 0 0 1 12 2.5zm-4.1 5c-.2 0-.5.1-.7.4-.2.3-.9.9-.9 2.2s1 2.5 1.1 2.7 2 3.1 5 4.2c2.5 1 2.9.9 3.4.8.5-.1 1.6-.7 1.8-1.3.2-.6.2-1.1.1-1.3-.1-.2-.3-.3-.7-.5-.4-.2-2.1-1-2.4-1.1-.3-.1-.5-.2-.7.2s-.8 1.1-1 1.3c-.2.2-.4.2-.7.1-.3-.1-1.2-.5-2.3-1.5-1-1-1.4-1.8-1.6-2.1-.2-.3 0-.5.2-.7.2-.2.5-.6.7-.8.2-.2.3-.3.4-.5.1-.2.1-.4 0-.5-.1-.2-.7-1.6-1-2.1-.2-.5-.4-.4-.7-.4z"/>
              </svg>
            </a>
          </div>

          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#nosotros" className="text-muted-foreground hover:text-primary transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-muted-foreground hover:text-primary transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-muted-foreground hover:text-primary transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contacto</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>116533-8090</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>siniestros@estudiobertera.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <svg className="w-4 h-4 text-primary mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                <span>Ocantos 178, Monte Grande, Buenos Aires</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center ">
          <p className="text-muted-foreground text-sm">
            © 2025 Ibañez & Bertera Asociados. Todos los derechos reservados. // POWERED BY WebMasterStudio
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Política de Privacidad
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Términos de Servicio
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
