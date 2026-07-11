import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ClipboardList, Send, CheckCircle2, AlertCircle, FileText } from 'lucide-react';
import FinalCTA from '../components/FinalCTA';

export default function RequestQuote() {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    products: 'Home Textiles',
    quantity: '',
    country: '',
    specifications: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null
  });

  // Pre-fill product if passed in query string (e.g. /request-quote?product=Premium%20Bedsheets)
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const productParam = params.get('product');
    if (productParam) {
      setFormData(prev => ({
        ...prev,
        products: productParam,
        specifications: `Inquiring about: ${productParam}\n`
      }));
    }
  }, [location]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });

    try {
      const response = await fetch('http://localhost:5000/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setStatus({ submitting: false, success: true, error: null });
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          products: 'Home Textiles',
          quantity: '',
          country: '',
          specifications: ''
        });
      } else {
        setStatus({ submitting: false, success: false, error: data.error || 'Failed to submit quote request.' });
      }
    } catch (err) {
      console.error(err);
      setStatus({ submitting: false, success: false, error: 'Network error. The backend server might not be running.' });
    }
  };

  return (
    <div>
      {/* Subpage Hero */}
      <section style={{
        background: 'linear-gradient(rgba(11, 35, 65, 0.9), rgba(11, 35, 65, 0.95)), url("/images/Cargo_ship_sailing.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '6rem 0',
        color: '#ffffff',
        textAlign: 'center'
      }}>
        <div className="container">
          <span style={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.875rem',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            color: 'var(--accent)',
            fontWeight: '600',
            marginBottom: '1rem',
            display: 'inline-block'
          }}>B2B Inquiry</span>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '3rem',
            fontWeight: '800',
            color: '#ffffff',
            maxWidth: '850px',
            margin: '0 auto',
            lineHeight: '1.2'
          }}>
            Tell Us What You Need.
          </h1>
        </div>
      </section>

      {/* Form Page Container */}
      <section className="section">
        <div className="container" style={{ maxWidth: '850px' }}>
          
          <div className="card" style={{ backgroundColor: '#ffffff', border: '1px solid var(--border)', borderRadius: '1.5rem', padding: '3.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '1.5rem' }}>
              <div style={{ color: 'var(--secondary)' }}><ClipboardList size={32} /></div>
              <div>
                <h2 style={{ fontSize: '1.5rem', color: 'var(--primary)', fontWeight: '700', fontFamily: 'var(--font-display)' }}>
                  Request Sourcing Quotation
                </h2>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                  Share your product requirements, destination port, and target quantity.
                </p>
              </div>
            </div>

            {status.success && (
              <div style={{
                backgroundColor: '#F0FDF4',
                border: '1px solid #BBF7D0',
                borderRadius: '0.5rem',
                padding: '1.5rem',
                display: 'flex',
                gap: '0.75rem',
                color: '#166534',
                marginBottom: '2rem',
                fontSize: '0.9rem'
              }}>
                <CheckCircle2 size={24} style={{ flexShrink: 0 }} />
                <div>
                  <h5 style={{ fontWeight: '700', color: '#166534', fontSize: '1rem' }}>Quote Request Submitted Successfully</h5>
                  <p style={{ marginTop: '0.25rem', lineHeight: '1.5' }}>
                    Our international sourcing officers are reviewing your requirements. We will compile factory quotes and coordinate logistics options, returning with a formal quotation shortly.
                  </p>
                </div>
              </div>
            )}

            {status.error && (
              <div style={{
                backgroundColor: '#FEF2F2',
                border: '1px solid #FCA5A5',
                borderRadius: '0.5rem',
                padding: '1.5rem',
                display: 'flex',
                gap: '0.75rem',
                color: '#991B1B',
                marginBottom: '2rem',
                fontSize: '0.9rem'
              }}>
                <AlertCircle size={24} style={{ flexShrink: 0 }} />
                <div>
                  <h5 style={{ fontWeight: '700', color: '#991B1B', fontSize: '1rem' }}>Submission Failed</h5>
                  <p style={{ marginTop: '0.25rem' }}>{status.error}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="grid-2" style={{ gap: '1.5rem', marginBottom: 0 }}>
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange}
                    className="form-input" 
                    required 
                    placeholder="Enter your name" 
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Work Email *</label>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange}
                    className="form-input" 
                    required 
                    placeholder="e.g. procurement@company.com" 
                  />
                </div>
              </div>

              <div className="grid-2" style={{ gap: '1.5rem', marginBottom: 0 }}>
                <div className="form-group">
                  <label className="form-label">Company Name</label>
                  <input 
                    type="text" 
                    name="company" 
                    value={formData.company} 
                    onChange={handleChange}
                    className="form-input" 
                    placeholder="Enter corporate brand name" 
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Corporate Contact Phone</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange}
                    className="form-input" 
                    placeholder="Include country code" 
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Product Category Interest *</label>
                <select 
                  name="products" 
                  value={formData.products} 
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="Home Textiles">Home Textiles (Bedsheets, Towels, Cushions)</option>
                  <option value="Hotel Linen">Hotel Linen (Bath mats, Luxury bedding, Robes)</option>
                  <option value="Fresh Fruits">Fresh Fruits (Mangoes, Pomegranates, Grapes)</option>
                  <option value="Agricultural Products">Agricultural Products (Rice, Wheat, Oil seeds)</option>
                  <option value="Spices Sourcing">Spices Sourcing (Turmeric, Chilli, Cumin)</option>
                  <option value="Private Label OEM">Private Label & OEM Manufacturing</option>
                  <option value="Other Sourcing Solution">Other Custom Sourcing Requirement</option>
                </select>
              </div>

              <div className="grid-2" style={{ gap: '1.5rem', marginBottom: 0 }}>
                <div className="form-group">
                  <label className="form-label">Target Quantity Required *</label>
                  <input 
                    type="text" 
                    name="quantity" 
                    value={formData.quantity} 
                    onChange={handleChange}
                    className="form-input" 
                    required 
                    placeholder="e.g. 5,000 sets or 1x20ft Container" 
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Destination Country & Port *</label>
                  <input 
                    type="text" 
                    name="country" 
                    value={formData.country} 
                    onChange={handleChange}
                    className="form-input" 
                    required 
                    placeholder="e.g. Port of Rotterdam, Netherlands" 
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Detailed Product Specifications & Custom Requirements</label>
                <textarea 
                  name="specifications" 
                  value={formData.specifications} 
                  onChange={handleChange}
                  className="form-textarea" 
                  style={{ minHeight: '150px' }}
                  placeholder="Describe your weave specs, GSM, yarn card, fruit grading classes, carton limits, private label print requirements, or standard compliance targets."
                />
              </div>

              <button 
                type="submit" 
                className="btn btn-accent" 
                style={{ width: '100%', padding: '1rem', marginTop: '1rem' }}
                disabled={status.submitting}
              >
                {status.submitting ? 'Submitting Quotation Request...' : 'Send Quote Request'} <Send size={16} />
              </button>
            </form>
          </div>

        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
