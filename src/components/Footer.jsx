import logo from "../assets/logo-text.png"

function Footer() {
  return (
    <footer
      id="about"
      className="border-t border-slate-100 bg-white"
    >
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <img
              src={logo}
              alt="Dev Stack Logo"
              className="w-[135px] object-contain"
            />

            <p className="mt-5 max-w-xs text-sm leading-6 text-slate-500">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            <div className="mt-5 flex gap-4 text-sm font-medium text-slate-600">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-pink-500"
              >
                GitHub
              </a>

              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-pink-500"
              >
                Twitter
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-pink-500"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-slate-900">
              Product
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-sm text-slate-500">
              <a href="#home" className="hover:text-pink-500">
                Home
              </a>

              <a href="#technologies" className="hover:text-pink-500">
                Technologies
              </a>

              <a href="#projects" className="hover:text-pink-500">
                Projects
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-slate-900">
              Company
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-sm text-slate-500">
              <a href="#about" className="hover:text-pink-500">
                About
              </a>

              <a href="#contact" className="hover:text-pink-500">
                Contact
              </a>

              <a href="#" className="hover:text-pink-500">
                Careers
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-slate-900">
              Legal
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-sm text-slate-500">
              <a href="#" className="hover:text-pink-500">
                Privacy Policy
              </a>

              <a href="#" className="hover:text-pink-500">
                Terms of Service
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Footer */}
        <div
          id="contact"
          className="mt-12 flex flex-col gap-4 border-t border-slate-100 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between"
        >
          <p>
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-pink-500">
              Privacy
            </a>

            <a href="#" className="hover:text-pink-500">
              Terms
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer