import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Shield, Award, Send, Users, CheckCircle, 
  HelpCircle, ChevronRight, Globe, Layers, Zap, Clock 
} from 'lucide-react';

export default function Home() {
  const [activeFaq, setActiveFaq] = useState(null);

  const stats = [
    { value: '25+', label: 'Manufacturing Partners' },
    { value: '15+', label: 'Countries Served' },
    { value: '100+', label: 'Premium Products' },
    { value: '98%', label: 'On-Time Deliveries' },
    { value: '24/7', label: 'Business Support' }
  ];

  const products = [
    {
      title: 'Home Textiles',
      desc: 'Premium bedsheets, hotel linen, towels, comforters, blankets, quilts, pillows and customized textile collections.',
      image: '/images/Luxury_bedding_in_hotel_bedroom.jpeg'
    },
    {
      title: 'Fresh Fruits',
      desc: 'Carefully selected export-quality mangoes, pomegranates, grapes and seasonal produce.',
      image: '/images/Mangoes_on_conveyor_belt.jpeg'
    },
    {
      title: 'Agricultural Products',
      desc: 'Rice, wheat, pulses, spices, herbs, oil seeds and other agricultural commodities.',
      image: '/images/warehouse.jpeg'
    },
    {
      title: 'Private Label & OEM Sourcing',
      desc: 'Custom branding, retail packaging and OEM manufacturing for global brands.',
      image: '/images/Textile_manufacturing.jpeg'
    }
  ];

  const exportSteps = [
    { id: '01', title: 'Product Inquiry', desc: 'Share your requirements and target specifications.' },
    { id: '02', title: 'Requirement Analysis', desc: 'Our team evaluates sourcing viability and pricing.' },
    { id: '03', title: 'Sampling', desc: 'We deliver physical samples for quality approval.' },
    { id: '04', title: 'Production', desc: 'Products manufactured at certified facilities.' },
    { id: '05', title: 'Inspection', desc: 'Independent pre-shipment quality checks.' },
    { id: '06', title: 'Packaging', desc: 'Export-grade packaging optimized for safe transport.' },
    { id: '07', title: 'Documentation', desc: 'Seamless customs clearance and certificates.' },
    { id: '08', title: 'Shipping', desc: 'Logistics coordination via sea or air cargo.' },
    { id: '09', title: 'Delivery', desc: 'Goods arrive safely at your destination port.' }
  ];

  const qualitySteps = [
    { title: 'Raw Material Evaluation', desc: 'Inspecting raw fibers, thread counts, or fresh crop grades prior to manufacturing.' },
    { title: 'Production Monitoring', desc: 'On-site checks ensuring compliance with technical specifications.' },
    { title: 'Quality Inspection', desc: 'Post-production validation of finished export commodities.' },
    { title: 'Packaging Verification', desc: 'Ensuring labels, barcodes, and cartons resist high sea transit strains.' },
    { title: 'Container Loading', desc: 'Inspecting cargo placement, weights, and securing blocks.' },
    { title: 'Final Dispatch', desc: 'Releasing customs certificates, tracking, and logistics updates.' }
  ];

  const faqs = [
    { 
      q: "What is Crestwave Global's primary sourcing region?", 
      a: "We source our products primarily from India, collaborating with verified manufacturing hubs and high-quality agricultural farms nationwide to ensure we export the finest standards." 
    },
    { 
      q: "How does Crestwave Global ensure quality standards for B2B shipments?", 
      a: "Quality is monitored throughout the entire journey. We run raw material evaluations, on-site production checks, independent third-party pre-shipment quality inspections, and final container loading checks." 
    },
    { 
      q: "Do you offer private label packaging and OEM manufacturing?", 
      a: "Yes. We support custom sizing, labeling, branding, and customized packaging options tailored for major retail chains, hospitality groups, and private label brands globally." 
    },
    { 
      q: "What are your standard payment and shipping terms?", 
      a: "We work with standard international terms including FOB, CIF, and CFR. Payment conditions typically utilize secure Letter of Credit (L/C) or Telegraphic Transfer (T/T) based on agreements." 
    }
  ];

  return (
    <div style={{ position: 'relative' }}>
      
      {/* Hero Section */}
      <section style={{
        minHeight: 'calc(100vh - 120px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        background: 'linear-gradient(rgba(11, 35, 65, 0.85), rgba(11, 35, 65, 0.95)), url("/images/Cargo_vessel_cutting_ocean.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#ffffff',
        position: 'relative',
        padding: '5rem 0'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '850px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <motion.span 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.9rem',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                color: 'var(--accent)',
                fontWeight: '600'
              }}
            >
              Premium B2B Global Trade
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              style={{
                fontSize: '4rem',
                fontWeight: '800',
                color: '#ffffff',
                lineHeight: '1.15',
                letterSpacing: '-0.02em',
                fontFamily: 'var(--font-display)'
              }}
              className="hero-heading"
            >
              Connecting India's Finest Products to Global Markets.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                fontSize: '1.2rem',
                color: '#CBD5E1',
                lineHeight: '1.7',
                fontWeight: '400'
              }}
            >
              Crestwave Global bridges trusted Indian manufacturers and international buyers through reliable sourcing, quality assurance, and seamless export solutions. From premium home textiles to fresh agricultural produce, we help businesses worldwide source with confidence.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', marginTop: '1.5rem' }}
            >
              <Link to="/products" className="btn btn-accent" style={{ padding: '1rem 2.25rem' }}>
                Explore Products <ArrowRight size={16} />
              </Link>
              <Link to="/request-quote" className="btn btn-white">
                Request a Quote
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Floating statistics counter overlay inside hero */}
        <div style={{
          marginTop: '6rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          background: 'rgba(11, 35, 65, 0.6)',
          backdropFilter: 'blur(8px)',
          padding: '2.5rem 0'
        }}>
          <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
              {stats.map((stat, i) => (
                <div key={i} style={{ flex: '1 1 180px' }}>
                  <h3 style={{
                    fontSize: '2.75rem',
                    fontWeight: '800',
                    color: 'var(--accent)',
                    fontFamily: 'var(--font-display)',
                    marginBottom: '0.25rem'
                  }}>{stat.value}</h3>
                  <p style={{ fontSize: '0.875rem', color: '#94A3B8', fontWeight: '500' }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <style dangerouslySetInnerHTML={{__html: `
          @media (max-width: 768px) {
            .hero-heading {
              font-size: 2.5rem !important;
            }
          }
        `}} />
      </section>

      {/* Trust Strip */}
      <div className="trust-strip">
        <div className="container">
          <div className="trust-flex">
            <div className="trust-item"><CheckCircle size={18} /> Reliable Global Export Solutions</div>
            <div className="trust-item"><CheckCircle size={18} /> Quality-Focused Operations</div>
            <div className="trust-item"><CheckCircle size={18} /> Worldwide Shipping Support</div>
            <div className="trust-item"><CheckCircle size={18} /> Transparent Business Practices</div>
          </div>
        </div>
      </div>

      {/* Who We Are */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div>
              <span className="section-tag">Who We Are</span>
              <h2 className="section-title">Building Global Partnerships Through Quality and Trust</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                At Crestwave Global, we believe international trade is built on consistency, transparency, and long-term relationships. We partner with carefully selected manufacturers and producers across India to deliver products that meet the expectations of global markets. 
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '2rem' }}>
                Every shipment is managed with attention to quality, documentation, and timely execution, helping our clients source with confidence.
              </p>
              <Link to="/about" className="btn btn-secondary">
                Read Our Story <ChevronRight size={16} />
              </Link>
            </div>
            
            <div className="img-container" style={{ height: '450px', borderRadius: '1rem', boxShadow: '0 20px 40px rgba(0,0,0,0.06)' }}>
              <img src="/images/Executives.jpeg" alt="Crestwave Team Meeting" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Why Crestwave Section */}
      <section className="section section-bg">
        <div className="container">
          <div className="section-header center text-center">
            <span className="section-tag">Why Crestwave</span>
            <h2 className="section-title">Why Businesses Choose Crestwave Global</h2>
          </div>
          
          <div className="grid-4">
            <div className="card">
              <div style={{ width: '50px', height: '50px', backgroundColor: 'rgba(37, 99, 235, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', marginBottom: '1.5rem', color: 'var(--secondary)' }}>
                <Globe size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Trusted Sourcing</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>We collaborate with verified manufacturing partners and experienced producers to deliver products that meet buyer specifications.</p>
            </div>
            
            <div className="card">
              <div style={{ width: '50px', height: '50px', backgroundColor: 'rgba(37, 99, 235, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', marginBottom: '1.5rem', color: 'var(--secondary)' }}>
                <Shield size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Quality Assurance</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Every order follows a structured quality inspection process before packaging, loading and final dispatch.</p>
            </div>

            <div className="card">
              <div style={{ width: '50px', height: '50px', backgroundColor: 'rgba(37, 99, 235, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', marginBottom: '1.5rem', color: 'var(--secondary)' }}>
                <Zap size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Export Expertise</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>From customs documentation to shipping logistics coordination, we streamline every stage of international trade.</p>
            </div>

            <div className="card">
              <div style={{ width: '50px', height: '50px', backgroundColor: 'rgba(37, 99, 235, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', marginBottom: '1.5rem', color: 'var(--secondary)' }}>
                <Users size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Long-Term Partnerships</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Our approach focuses on reliability, transparency, and creating lasting partnerships with our customers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section">
        <div className="container">
          <div className="section-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem' }}>
            <div>
              <span className="section-tag">Our Products</span>
              <h2 className="section-title">Our Product Portfolio</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>We supply products that combine quality manufacturing with dependable export processes.</p>
            </div>
            <Link to="/products" className="btn btn-primary">
              View All Products <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid-2">
            {products.map((prod, index) => (
              <div key={index} className="card" style={{ padding: 0, display: 'flex', flexDirection: 'column' }}>
                <div style={{ height: '240px', overflow: 'hidden', position: 'relative', borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem' }}>
                  <img src={prod.image} alt={prod.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} className="product-card-img" />
                </div>
                <div style={{ padding: '2.5rem' }}>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{prod.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem', minHeight: '4.5rem' }}>{prod.desc}</p>
                  <Link to="/products" style={{ color: 'var(--secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '600', fontSize: '0.95rem' }}>
                    View Sourcing Specs <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style dangerouslySetInnerHTML={{__html: `
          .card:hover .product-card-img {
            transform: scale(1.05);
          }
        `}} />
      </section>

      {/* Manufacturing Section */}
      <section className="section section-bg">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div className="img-container" style={{ height: '480px', borderRadius: '1rem', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.08)' }}>
              <img src="/images/Textile_manufacturing.jpeg" alt="Textile Sourcing Factory" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            
            <div>
              <span className="section-tag">Production Quality</span>
              <h2 className="section-title">Manufacturing Excellence</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                Behind every product is a carefully managed production process. We work alongside experienced manufacturing partners who combine advanced machinery, skilled craftsmanship, and rigorous quality standards to produce export-ready products that meet international expectations.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '2.5rem' }}>
                From high-capacity automated loom textile factories to sanitized agricultural grading lines, we ensure modern infrastructure drives global performance.
              </p>
              <Link to="/manufacturing" className="btn btn-primary">
                Explore Manufacturing <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Process Flowchart */}
      <section className="section">
        <div className="container">
          <div className="section-header center text-center">
            <span className="section-tag">Quality Assurance</span>
            <h2 className="section-title">Quality That Travels With Every Shipment</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Quality isn't checked once—it's monitored throughout the entire journey.</p>
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'stretch',
            gap: '1.5rem',
            flexWrap: 'wrap'
          }} className="quality-flow">
            {qualitySteps.map((step, idx) => (
              <div key={idx} className="card" style={{
                flex: '1 1 180px',
                padding: '2rem',
                border: '1px solid var(--border)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.8rem',
                position: 'relative'
              }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--primary)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.9rem',
                  fontWeight: '700'
                }}>
                  {idx + 1}
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginTop: '0.5rem' }}>{step.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>{step.desc}</p>
                {idx < qualitySteps.length - 1 && (
                  <div className="flow-arrow" style={{
                    position: 'absolute',
                    right: '-1rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 2,
                    display: 'flex',
                    alignItems: 'center',
                    color: 'var(--accent)'
                  }}>
                    <ChevronRight size={20} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <style dangerouslySetInnerHTML={{__html: `
          @media (max-width: 1024px) {
            .flow-arrow {
              display: none !important;
            }
          }
        `}} />
      </section>

      {/* Animated Export Process Timeline */}
      <section className="section section-bg" style={{ overflow: 'hidden' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Trade Workflow</span>
            <h2 className="section-title">A Transparent Export Journey</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
              Every shipment follows a structured workflow designed to ensure consistency, compliance, and timely delivery.
            </p>
          </div>

          <div style={{ 
            display: 'flex', 
            gap: '1.5rem', 
            overflowX: 'auto', 
            paddingBottom: '2.5rem',
            scrollSnapType: 'x mandatory',
            scrollPadding: '2rem'
          }} className="timeline-scroll-container">
            {exportSteps.map((step, idx) => (
              <div key={idx} style={{
                flex: '0 0 280px',
                scrollSnapAlign: 'start',
                backgroundColor: '#ffffff',
                border: '1px solid var(--border)',
                borderRadius: '1rem',
                padding: '2rem',
                position: 'relative',
                boxShadow: '0 4px 15px rgba(0,0,0,0.02)'
              }}>
                <span style={{
                  fontSize: '2.5rem',
                  fontWeight: '800',
                  color: 'rgba(37, 99, 235, 0.1)',
                  position: 'absolute',
                  top: '1.5rem',
                  right: '1.5rem',
                  fontFamily: 'var(--font-display)'
                }}>{step.id}</span>
                
                <h4 style={{
                  fontSize: '1.15rem',
                  fontWeight: '700',
                  color: 'var(--primary)',
                  marginBottom: '1rem',
                  marginTop: '1rem'
                }}>{step.title}</h4>
                
                <p style={{
                  fontSize: '0.875rem',
                  color: 'var(--text-muted)',
                  lineHeight: '1.6'
                }}>{step.desc}</p>
                
                {idx < exportSteps.length - 1 && (
                  <div style={{
                    position: 'absolute',
                    right: '-1.5rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '1.5rem',
                    height: '2px',
                    backgroundColor: 'rgba(37, 99, 235, 0.2)',
                    zIndex: 1
                  }} className="timeline-connector" />
                )}
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '1.5rem' }}>
            <span>Scroll horizontally to view detailed timeline</span>
            <ArrowRight size={14} />
          </div>
        </div>
        <style dangerouslySetInnerHTML={{__html: `
          .timeline-scroll-container::-webkit-scrollbar {
            height: 6px;
          }
          .timeline-scroll-container::-webkit-scrollbar-track {
            background: #E2E8F0;
            border-radius: 9999px;
          }
          .timeline-scroll-container::-webkit-scrollbar-thumb {
            background: var(--accent);
            border-radius: 9999px;
          }
        `}} />
      </section>

      {/* Global Network World Map */}
      <section className="section" style={{ backgroundColor: '#07162C', color: '#ffffff' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div>
              <span className="section-tag" style={{ color: 'var(--accent)' }}>Global Network</span>
              <h2 className="section-title" style={{ color: '#ffffff' }}>Delivering Beyond Borders</h2>
              <p style={{ color: '#94A3B8', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                Our export network connects Indian manufacturing and agriculture with businesses across North America, Europe, the Middle East, Asia-Pacific, and Africa.
              </p>
              <p style={{ color: '#94A3B8', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '2.5rem' }}>
                Through efficient ocean carrier contracts and reliable air cargo channels, we guarantee timely paperwork execution and logistical transparency from origin to destination.
              </p>
              <Link to="/global-markets" className="btn btn-accent">
                View Global Markets <ArrowRight size={16} />
              </Link>
            </div>
            
            {/* World Map SVG Route Animation */}
            <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
              <svg viewBox="0 0 1000 500" style={{ width: '100%', height: 'auto', display: 'block' }}>
                {/* Simplified World Outline Background Map */}
                <path d="M 150 150 L 190 130 L 220 160 L 260 170 L 280 200 L 250 250 L 200 300 L 160 320 L 170 380 L 190 400 L 170 420 L 140 400 L 120 310 L 130 250 L 120 200 Z" fill="#1E293B" opacity="0.3" /> {/* Americas */}
                <path d="M 450 120 L 520 90 L 580 120 L 610 160 L 590 200 L 530 250 L 520 300 L 480 340 L 460 380 L 420 330 L 440 250 Z" fill="#1E293B" opacity="0.3" /> {/* Europe & Africa */}
                <path d="M 600 100 L 680 80 L 780 110 L 850 150 L 820 240 L 760 280 L 700 250 L 650 180 Z" fill="#1E293B" opacity="0.3" /> {/* Asia */}
                <path d="M 800 350 L 850 340 L 880 380 L 850 420 L 790 400 Z" fill="#1E293B" opacity="0.3" /> {/* Australia */}

                {/* Sourcing Hub: India */}
                <circle cx="650" cy="200" r="8" fill="var(--accent)" />
                <circle cx="650" cy="200" r="16" fill="transparent" stroke="var(--accent)" strokeWidth="1.5">
                  <animate attributeName="r" values="8;24;8" dur="3s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="1;0;1" dur="3s" repeatCount="indefinite" />
                </circle>
                <text x="650" y="180" fill="var(--accent)" fontSize="12" fontWeight="700" textAnchor="middle">INDIA (ORIGIN)</text>

                {/* Sourcing Routes (India to USA, UK, UAE, Australia, Singapore) */}
                
                {/* Route 1: USA (West) */}
                <path d="M 650 200 Q 400 130 200 180" fill="none" stroke="var(--secondary)" strokeWidth="2" strokeDasharray="6" className="map-route-line" />
                <circle cx="200" cy="180" r="5" fill="#ffffff" />
                <text x="200" y="165" fill="#ffffff" fontSize="10" textAnchor="middle">USA</text>

                {/* Route 2: UK */}
                <path d="M 650 200 Q 550 130 500 140" fill="none" stroke="var(--secondary)" strokeWidth="2" strokeDasharray="6" className="map-route-line" />
                <circle cx="500" cy="140" r="5" fill="#ffffff" />
                <text x="500" y="125" fill="#ffffff" fontSize="10" textAnchor="middle">UK</text>

                {/* Route 3: UAE */}
                <path d="M 650 200 Q 600 180 570 190" fill="none" stroke="var(--secondary)" strokeWidth="2" strokeDasharray="6" className="map-route-line" />
                <circle cx="570" cy="190" r="5" fill="#ffffff" />
                <text x="570" y="175" fill="#ffffff" fontSize="10" textAnchor="middle">UAE</text>

                {/* Route 4: Australia */}
                <path d="M 650 200 Q 750 300 820 370" fill="none" stroke="var(--secondary)" strokeWidth="2" strokeDasharray="6" className="map-route-line" />
                <circle cx="820" cy="370" r="5" fill="#ffffff" />
                <text x="820" y="355" fill="#ffffff" fontSize="10" textAnchor="middle">AUSTRALIA</text>

                {/* Route 5: South Africa */}
                <path d="M 650 200 Q 550 280 480 350" fill="none" stroke="var(--secondary)" strokeWidth="2" strokeDasharray="6" className="map-route-line" />
                <circle cx="480" cy="350" r="5" fill="#ffffff" />
                <text x="480" y="335" fill="#ffffff" fontSize="10" textAnchor="middle">SOUTH AFRICA</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="section">
        <div className="container">
          <div className="section-header center text-center">
            <span className="section-tag">Sector Coverage</span>
            <h2 className="section-title">Industries We Serve</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Sourcing expertise catering to diverse market channels worldwide.</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '1.5rem'
          }}>
            {[
              { title: 'Retail Chains', desc: 'Home decor textiles, packaging commodities and bespoke goods.' },
              { title: 'Hospitality Sourcing', desc: 'Premium white bedsheets, luxury towels and linens for hotels.' },
              { title: 'B2B Importers', desc: 'Sourcing agents handling bulk crops, fruits and spice seeds.' },
              { title: 'Wholesalers & Distributors', desc: 'Supply logistics optimized for high volume distributions.' },
              { title: 'Private Label Brands', desc: 'Custom packaging solutions tailored for local retail specifications.' },
              { title: 'E-Commerce Businesses', desc: 'Flexible fulfillment batches, barcoding and global dropship readiness.' }
            ].map((ind, i) => (
              <div key={i} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <h4 style={{ fontSize: '1.2rem', fontWeight: '700' }}>{ind.title}</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="section section-bg">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div className="img-container" style={{ height: '400px', borderRadius: '1rem' }}>
              <img src="/images/Green_cargo.jpeg" alt="Sustainable Port Sourcing" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            <div>
              <span className="section-tag">Ethical Trade</span>
              <h2 className="section-title">Responsible Trade. Sustainable Growth.</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                We believe responsible sourcing and efficient operations create long-term value for our partners and the communities we work with. Our focus is on reducing waste, encouraging efficient packaging, and supporting ethical business practices across our supply chain.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.8' }}>
                By optimizing logistics container loading weights and enforcing plastic-reduction packaging specs, we do our part to build environment-friendly supply routes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <div className="section-header center text-center">
            <span className="section-tag">B2B Feedback</span>
            <h2 className="section-title">Trusted by International Importers</h2>
          </div>

          <div className="grid-3">
            <div className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <p style={{ fontStyle: 'italic', fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                "Crestwave Global has become our exclusive sourcing partner in India for home textiles. Their pre-shipment inspections are rigorous, and they always maintain complete documentation transparency."
              </p>
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: '700' }}>Andrew Vance</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--accent)', fontWeight: '600' }}>Hospitality Procurement (UK)</p>
              </div>
            </div>

            <div className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <p style={{ fontStyle: 'italic', fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                "The mango shipment we imported last season arrived in immaculate condition. Their packaging techniques are exceptional, maintaining temperature settings perfectly throughout transit."
              </p>
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: '700' }}>Faisal Al-Subaie</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--accent)', fontWeight: '600' }}>Fruit Importers Ltd (UAE)</p>
              </div>
            </div>

            <div className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <p style={{ fontStyle: 'italic', fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                "We were looking for private label retail branding for our rice commodities. Crestwave managed the entire OEM project, matching our specific grade targets and delivery deadlines."
              </p>
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: '700' }}>Marcus Chen</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--accent)', fontWeight: '600' }}>Supermarket Chain Buyer (Singapore)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section section-bg">
        <div className="container">
          <div className="grid-2">
            <div>
              <span className="section-tag">FAQ Support</span>
              <h2 className="section-title">Frequently Asked Questions</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                Have questions about B2B sourcing, custom manufacturing, logistics, or container limits?
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.7' }}>
                Browse our quick FAQs or contact our trade desk directly for tailored solutions.
              </p>
              <Link to="/faq" className="btn btn-primary" style={{ marginTop: '2rem' }}>
                View Full FAQs
              </Link>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {faqs.map((faq, index) => (
                <div key={index} style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid var(--border)',
                  borderRadius: '0.75rem',
                  padding: '1.5rem',
                  cursor: 'pointer'
                }} onClick={() => setActiveFaq(activeFaq === index ? null : index)}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: '600', color: 'var(--primary)' }}>{faq.q}</h4>
                    <ChevronRight size={18} style={{ transform: activeFaq === index ? 'rotate(90deg)' : 'none', transition: 'transform 0.3s ease' }} />
                  </div>
                  {activeFaq === index && (
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '1rem', borderTop: '1px solid #F1F5F9', paddingTop: '1rem' }}>
                      {faq.a}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}
