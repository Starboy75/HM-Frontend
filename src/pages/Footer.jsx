import { Facebook, Instagram, Twitter, Github, Youtube } from "lucide-react"
import logo from "@/images/logo.jpg"

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

const footerLinks = {
  // Solutions: [
  //   { name: "Marketing", href: "#" },
  //   { name: "Analytics", href: "#" },
  //   { name: "Automation", href: "#" },
  //   { name: "Commerce", href: "#" },
  //   { name: "Insights", href: "#" },
  // ],
  // Support: [
  //   { name: "Submit ticket", href: "#" },
  //   { name: "Documentation", href: "#" },
  //   { name: "Guides", href: "#" },
  // ],
  Company: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Jobs", href: "#" },
    { name: "Press", href: "#" },
  ],
  Legal: [
    { name: "Terms of service", href: "#" },
    { name: "Privacy policy", href: "#" },
    { name: "License", href: "#" },
  ],
}

export default function Footer() {
  return (
    <footer className="w-full px-6 py-12 bg-background border-t">
      <div className="container max-w-6xl mx-auto space-y-8">
        {/* Logo and Tagline */}
        <div className="space-y-4">
          <div className="w-10 h-10 flex gap-2">
            {/* <svg viewBox="0 0 24 24" className="text-primary w-full h-full"  fill="currentColor">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z" />
            </svg> */}
            <img src={logo} sizes="24px" alt="logo" />
            <p className="text-3xl">HOTELHUB</p>
          </div>
          <p className="text-muted-foreground">
            Making the world a better place through constructing elegant hierarchies.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-3">
              <h3 className="font-semibold">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Your Company, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

