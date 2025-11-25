import Link from "next/link";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Specifications", href: "#specs" },
  { label: "Smart Control", href: "#smart" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const features = [
  {
    title: "Ultra Efficient Motor",
    description:
      "Adaptive pressure sensing delivers consistent flow while reducing energy use by up to 37%.",
    icon: "⚡",
  },
  {
    title: "Weather-Sealed Build",
    description:
      "IP68-rated enclosure, marine-grade fasteners, and corrosion-resistant impeller housing.",
    icon: "🛡️",
  },
  {
    title: "Silent Performance",
    description:
      "Fluid-damped bearings keep noise below 45 dB, perfect for residential and hospitality sites.",
    icon: "🔇",
  },
  {
    title: "Smart Diagnostics",
    description:
      "Integrated predictive maintenance alerts identify issues before they impact uptime.",
    icon: "📡",
  },
];

const specs = [
  { label: "Flow Rate", value: "5,400 L/h" },
  { label: "Max Head", value: "68 m" },
  { label: "Power Draw", value: "1.2 kW @ 220V" },
  { label: "Connectivity", value: "Wi-Fi 6, Modbus TCP" },
  { label: "Operating Temp", value: "-15°C to 55°C" },
  { label: "Warranty", value: "10 years" },
];

const testimonials = [
  {
    quote:
      "We cut our maintenance visits in half. HydroFlow keeps us online with zero downtime.",
    name: "Jordan Miller",
    role: "Facilities Director, Meridian Resorts",
  },
  {
    quote:
      "The remote dashboard gives instant insight into every site. Setup was seamless.",
    name: "Priya Chauhan",
    role: "Operations Lead, AquaTech Services",
  },
];

export default function Home() {
  return (
    <main className="page">
      <header className="hero">
        <nav className="nav">
          <div className="brand">
            <span className="brand-mark">HydroFlow</span>
            <span className="brand-sub">Pumps</span>
          </div>
          <div className="nav-links">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
          <Link className="btn btn-outline" href="#contact">
            Request Quote
          </Link>
        </nav>

        <div className="hero-content">
          <div className="hero-copy">
            <p className="tag">Precision Engineered Water Control</p>
            <h1>
              Deliver unstoppable flow with the HydroFlow HS-500 smart water
              pump.
            </h1>
            <p className="lead">
              Engineered for industrial reliability and residential elegance,
              the HS-500 couples a high-efficiency motor with predictive
              analytics for uninterrupted performance in any environment.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" href="#contact">
                Talk with an Engineer
              </Link>
              <Link className="btn btn-ghost" href="#specs">
                View Technical Sheet
              </Link>
            </div>
            <div className="hero-metrics">
              <div>
                <h3>45%</h3>
                <p>Less energy consumption compared to legacy pumps.</p>
              </div>
              <div>
                <h3>99.8%</h3>
                <p>Uptime delivered across 3,000+ deployments.</p>
              </div>
              <div>
                <h3>&lt;4 hrs</h3>
                <p>Average remote resolution time for service alerts.</p>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="pump-card">
              <div className="pump-glow" />
              <div className="pump-image">
                <div className="pump-body">
                  <div className="pump-top" />
                  <div className="pump-middle" />
                  <div className="pump-bottom" />
                </div>
                <div className="water-flow">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
              <div className="pump-stats">
                <div>
                  <p>Peak Flow</p>
                  <strong>5,400 L/h</strong>
                </div>
                <div>
                  <p>Efficiency</p>
                  <strong>IE5+</strong>
                </div>
                <div>
                  <p>Connectivity</p>
                  <strong>SmartLink</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section id="features" className="section features">
        <div className="section-header">
          <p className="tag">Why HydroFlow</p>
          <h2>Purpose-built for mission-critical water delivery</h2>
          <p>
            From agricultural irrigation to vertical living complexes, the
            HS-500 pump adapts to your requirements with modular hardware and
            intelligent control.
          </p>
        </div>
        <div className="feature-grid">
          {features.map((feature) => (
            <div key={feature.title} className="feature-item">
              <span className="feature-icon" aria-hidden>
                {feature.icon}
              </span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="smart" className="section smart">
        <div className="smart-grid">
          <div className="smart-copy">
            <p className="tag">SmartLink Dashboard</p>
            <h2>Remote insights that keep your water systems thriving</h2>
            <p>
              Monitor live performance, set automation schedules, and receive
              predictive maintenance alerts from any device. The SmartLink
              dashboard visualizes flow, pressure, and efficiency metrics in
              real time, helping teams optimize water distribution without
              sending a technician on-site.
            </p>
            <ul>
              <li>Adaptive load balancing during peak demand spikes.</li>
              <li>AI-powered leak detection with zone-level alerts.</li>
              <li>Secure API for BMS and SCADA integrations.</li>
            </ul>
            <div className="smart-actions">
              <Link className="btn btn-primary" href="#contact">
                Schedule Demo
              </Link>
              <Link className="btn btn-outline" href="#specs">
                Download Spec Sheet
              </Link>
            </div>
          </div>
          <div className="smart-visual">
            <div className="dashboard">
              <header>
                <div className="pill active">Flow</div>
                <div className="pill">Pressure</div>
                <div className="pill">Alerts</div>
              </header>
              <div className="chart">
                <div className="line" />
                <div className="pulse pulse-1" />
                <div className="pulse pulse-2" />
              </div>
              <div className="status-cards">
                <div>
                  <p>System Status</p>
                  <strong>Optimal</strong>
                </div>
                <div>
                  <p>Energy Savings</p>
                  <strong>32%</strong>
                </div>
                <div>
                  <p>Predictive Alerts</p>
                  <strong>0 Active</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="specs" className="section specs">
        <div className="section-header">
          <p className="tag">Technical Specifications</p>
          <h2>Engineered for performance and longevity</h2>
          <p>
            Every HydroFlow pump is calibrated to deliver consistent pressure
            across complex water infrastructure.
          </p>
        </div>
        <div className="spec-grid">
          {specs.map((spec) => (
            <div key={spec.label} className="spec-item">
              <p>{spec.label}</p>
              <strong>{spec.value}</strong>
            </div>
          ))}
        </div>
      </section>

      <section id="testimonials" className="section testimonials">
        <div className="section-header">
          <p className="tag">Trusted Worldwide</p>
          <h2>Built for organizations that can’t afford downtime</h2>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="testimonial-item">
              <p className="quote">“{testimonial.quote}”</p>
              <p className="name">{testimonial.name}</p>
              <p className="role">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="section contact">
        <div className="contact-card">
          <div>
            <p className="tag">Let’s partner</p>
            <h2>Design your next water system with HydroFlow</h2>
            <p>
              Share your site requirements and our engineering team will deliver
              a custom pumping solution within 48 hours.
            </p>
          </div>
          <form className="contact-form">
            <div className="form-grid">
              <label>
                Name
                <input type="text" name="name" placeholder="Jordan Smith" />
              </label>
              <label>
                Company
                <input type="text" name="company" placeholder="AquaRenew Inc." />
              </label>
              <label>
                Email
                <input type="email" name="email" placeholder="you@company.com" />
              </label>
              <label>
                Phone
                <input type="tel" name="phone" placeholder="+1 (555) 123-4567" />
              </label>
              <label className="span-2">
                Project Details
                <textarea
                  name="details"
                  placeholder="Outline flow requirements, site locations, and any integration needs."
                  rows={4}
                />
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit Request
            </button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-grid">
          <div>
            <div className="brand">
              <span className="brand-mark">HydroFlow</span>
              <span className="brand-sub">Pumps</span>
            </div>
            <p>
              HydroFlow designs high-performance water pumps empowering the next
              generation of sustainable infrastructure.
            </p>
          </div>
          <div>
            <p className="footer-heading">Support</p>
            <ul>
              <li>
                <a href="#specs">Documentation</a>
              </li>
              <li>
                <a href="#contact">Service Plans</a>
              </li>
              <li>
                <a href="#smart">SmartLink Platform</a>
              </li>
            </ul>
          </div>
          <div>
            <p className="footer-heading">Contact</p>
            <ul>
              <li>+1 (800) 555-0199</li>
              <li>support@hydroflowpumps.com</li>
              <li>400 Cascade Drive, Portland, OR</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} HydroFlow Pumps. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Accessibility</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
